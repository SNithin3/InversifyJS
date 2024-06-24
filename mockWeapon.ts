import { injectable} from "inversify";
import {IWeapon} from "./interfaces";

@injectable()
  export class MockWeapon implements IWeapon{
  useWeapon() : string{
    return "Mock weapon used!";
  }
}
