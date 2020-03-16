import exampleModel from "../src/models/example";

describe("Example test suite", () => {
  it("Example test", () => {
    expect(exampleModel.getAll()).toHaveLength(2);
  });
});
