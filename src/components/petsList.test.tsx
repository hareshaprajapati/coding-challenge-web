import { render, screen } from '@testing-library/react';
import { PetsList } from './petsList';

const mockPeople = [
  {
    "name": "Haresh",
    "gender": "Male",
    "age": 23,
    "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
  },
  { "name": "Jennifer", "gender": "Female", "age": 18, "pets": [{ "name": "Garfield", "type": "Cat" }] },
  { "name": "Steve", "gender": "Male", "age": 45, "pets": null },
  {
    "name": "Fred",
    "gender": "Male",
    "age": 40,
    "pets": [
      { "name": "Tom", "type": "Cat" },
      { "name": "Max", "type": "Cat" },
      { "name": "Sam", "type": "Dog" },
      { "name": "Jim", "type": "Cat" }
    ]
  },
  { "name": "Samantha", "gender": "Female", "age": 40, "pets": [{ "name": "Tabby", "type": "Cat" }] },
  {
    "name": "Alice",
    "gender": "Female",
    "age": 64,
    "pets": [{ "name": "Simba", "type": "Cat" }, { "name": "Nemo", "type": "Fish" }]
  }
];

jest.mock('../api/api.ts', () => {
  return ({
    fetchPeople: () => mockPeople
  })
}
)

describe('petsList', () => {
  it('should renders data from API', async () => {
    render(<PetsList />);
    await screen.findByText('Male');
    expect(screen.getAllByText('Garfield')).toHaveLength(2);
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByText('Jim')).toBeInTheDocument();
  });
});