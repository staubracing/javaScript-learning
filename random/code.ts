import { queryItems, queryCollectionInteractionSummaries } from './ddb';
import { getCollection } from './events/queries';
async function getLessonDependencies(lessonId: string): Promise<any[]> {
    const index = 'byLesson';
    const key = 'lessonId';
    const tableName = process.env.API_SVR_LESSONDEPENDENCYTABLE_NAME!;
    const { Items } = await queryItems(tableName, index, key, lessonId);
    return Items ?? [];
}
async function getCollectionInteractionsForUser(collectionId: string, userId: string): Promise<any[]> {
    const tableName = process.env.API_SVR_COLLECTIONINTERACTIONSUMMARYTABLE_NAME!;
    const { Items } = await queryCollectionInteractionSummaries(tableName, collectionId, userId);
    return Items ?? [];
}
export async function getLessonRecommendations(lessonId: string, userId: string): Promise<any> {
    try {
        const dependencies = await getLessonDependencies(lessonId);
        const coreDependencies = dependencies.filter(dep => dep.classification === 'CORE');
        const interactionsPromises = coreDependencies.map(dep =>
            getCollectionInteractionsForUser(dep.collectionId, userId)
            .then(interactions => ({ dep, interactions }))
        );
        const interactionsResults = await Promise.all(interactionsPromises);
        const filteredResults = interactionsResults.reduce((acc, { dep, interactions }) => {
            const { collectionId, collectionSummary } = dep;
            const interaction = interactions.find(inter => inter.collectionId === collectionId);
            if (!interaction || (interaction && !interaction.started && !interaction.completed)) {
                acc.nonInteracted.push({ collectionId, type: collectionSummary.type });
            } else {
                acc.interacted.push({ collectionId, type: interaction.type });
            }
            return acc;
        }, { interacted: [], nonInteracted: [] });
        const { interacted, nonInteracted } = filteredResults;
        if (nonInteracted.length === 0 && interacted.length === 0) {
            return [];
        }
        const prioritizedCollections = nonInteracted.length > 0 ? nonInteracted : interacted;
        const filteredCollection = prioritizedCollections.find(col => col.type === 'PATHWAY' || col.type === 'PROGRAM');
        if (!filteredCollection) {
            return [];
        }
        return await getCollection(filteredCollection.collectionId);
    } catch (e) {
        console.error("Failed to get lesson recommendations:", e);
        throw e;  // rethrow the error after logging it
    }
}