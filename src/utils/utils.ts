import { Person, PetType, PetsByOwnerGender } from "../types/types";

/**
 * It will return the sorted Pets grouped by owner's gender.
 */
export const getSortedPetsGroupedByOwnerGender = (
  people: Person[],
  petType: PetType
) => {
  const petsByOwnerGender: PetsByOwnerGender = {};
  people.forEach((person) => {
    const { pets, gender } = person;
    pets
      ?.filter((pet) => pet.type === petType)
      .forEach((pet) => {
        if (!petsByOwnerGender[gender]) {
          petsByOwnerGender[gender] = [];
        }
        petsByOwnerGender[gender].push(pet);
      });
  });
  // Sort pet names alphabetically within each gender group
  Object.keys(petsByOwnerGender).forEach((gender) => {
    petsByOwnerGender[gender] = petsByOwnerGender[gender].sort((petA, petB) =>
      petA.name.localeCompare(petB.name)
    );
  });
  return petsByOwnerGender;
};
