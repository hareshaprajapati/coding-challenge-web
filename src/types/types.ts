export type PetType = "Cat" | "Dog" | "Fish";
export type Gender = "Male" | "Female";

export interface Pet {
  name: string;
  type: PetType; // can be string if we don't want specific type
}

export interface Person {
  name: string;
  gender: Gender; // can be string if we don't want specific type
  age: number;
  pets?: Pet[];
}

export interface PetsByOwnerGender {
  [ownerGender: string]: Pet[];
}
