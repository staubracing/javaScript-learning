const { v4: uuidv4 } = require("uuid");

// Helper function to validate UUID v4 using regex
function isValidUUIDv4(uuid) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    uuid
  );
}

describe("UUID Generator Test", () => {
  it("generates 10 unique and valid UUIDs", () => {
    const logSpy = jest.spyOn(console, "log");
    require("./UUID_generator.cjs"); // Execute your script

    expect(logSpy).toHaveBeenCalledTimes(10); // Expect 10 log calls

    const uuids = logSpy.mock.calls.map((call) => call[0]); // Extract logged UUIDs
    const uniqueUUIDs = new Set(uuids); // Filter unique UUIDs

    // Check all UUIDs are valid
    uuids.forEach((uuid) => {
      expect(isValidUUIDv4(uuid)).toBeTruthy();
    });

    // Check all UUIDs are unique
    expect(uniqueUUIDs.size).toBe(10);

    logSpy.mockRestore(); // Clean up
  });
});
