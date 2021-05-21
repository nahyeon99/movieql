const berry = {
  name: "Blue Berry",
  age: 23,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => berry,
  },
};

export default resolvers;
