export function randomStringThing() {
  const randomstring = Math.random().toString(36).slice(2);
  return randomstring;
}

console.log("Generated String:", randomStringThing());
