import { exampleFunction } from "@scripts/exampleModule";

describe("example test suit", () => {
    test("example test", () => {
        const name = "david";

        const result = exampleFunction(name);

        expect(result).toBe(`Hello ${name}`);
    })

});

