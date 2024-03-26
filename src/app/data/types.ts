import {colors} from "./const";

export interface Pokemon {
  id:number;
  types: {
    type: { name: keyof typeof colors; }
  }[];
  sprites: { front_default: string };
  name:string;
}
