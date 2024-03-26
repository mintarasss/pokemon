import {colors} from "./const";

export interface Pokemon {
  id:number;
  types: {
    type: { name: keyof typeof colors; }
  }[];
  sprites: { front_default: string };
  name:string;
}

//@todo:maybe it should be enum
export type SortKeys = 'name' | 'id';
