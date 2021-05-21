export const people = [
  {
    id: "0",
    name: "Blue Berry",
    age: 23,
    gender: "female",
  },
  {
    id: "1",
    name: "StrawBerry",
    age: 23,
    gender: "male",
  },
  {
    id: "2",
    name: "apple",
    age: 27,
    gender: "female",
  },
  {
    id: "3",
    name: "mango",
    age: 19,
    gender: "male",
  },
  {
    id: "4",
    name: "pine apple",
    age: 26,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
