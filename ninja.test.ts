impot {testContainer} from "./inversify.test.config";
import{IWarrior} from "./interfaces";
import {TYPES} from "./types";

describe('Ninja',() => {
  it('should use mock weapon', () => {
    const ninja = testContainer.get<IWarrior>(TYPES.IWarrior);

    expect(ninja.fight()).toBe("Mock weapon used!");
  });
});

