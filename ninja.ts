import{injectable,inject} from "inversify";
import{Iwarrior,IWeapon} from "./interfaces";
import {TYPES} from "./types";

@injectable()
  export class Ninja implements IWarrior{
  private weapon : IWeapon;

constructor(@inject(TYPES.IWeapon)weapon : IWeapon){
  this.weapon = weapon;
}
  fight():string{
    return this.weapon.useWeapon();
  }
}
