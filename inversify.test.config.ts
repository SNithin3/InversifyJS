import { Container} from "inversify";
import{IWarrior,IWeapon} from "./interfaces";
import {TYPES} from "./types";
import {MockWeapon} from "./mockWeapon";
import {Ninja} from "./ninja:;

const testContainer = new Container();
testContainer.bind<IWeapon>(TYPES.IWeapon).to(MockWeapon);
testContainer.bind<IWarrior>(TYPES.Iwarrior).to(Ninja);

export { testContainer};




