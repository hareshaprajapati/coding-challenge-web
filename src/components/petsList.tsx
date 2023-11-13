import { useEffect, useState } from 'react';
import { fetchPeople } from '../api/api';
import { Person, PetType } from '../types/types';
import { getSortedPetsGroupedByOwnerGender } from '../utils/utils';

export const PetsList = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPeopleFromAPI = async () => {
    try {
      const people: Person[] = await fetchPeople();
      setPeople(people);
    } catch (error: any) {
      console.error(`Error while fetching data: ${error.message}`);
      setError(`Something went wrong.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeopleFromAPI();
  }, []);

  const renderPetsByType = (petType: PetType) => {
    const petsByOwnerGender = getSortedPetsGroupedByOwnerGender(people, petType);
    return Object.keys(petsByOwnerGender).map((gender) => (
      <div key={gender}>
        <h3 className='header'>{gender}</h3>
        <ul className='list'>
          {petsByOwnerGender[gender].map((pet) => (
            <li key={pet.name}>{pet.name}</li>
          ))}
        </ul>
      </div>
    ));
  }

  return (
    <>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {!(loading || error) && people.length > 0 && renderPetsByType("Cat")}
    </>
  );
}
