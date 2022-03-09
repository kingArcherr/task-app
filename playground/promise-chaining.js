require('../src/db/mongoose');

const User = require('../src/models/user');

// 6208ceab6edce9154cbb2f6a

// User.findByIdAndUpdate('62022cfaa3bd4e12bc7b2ecb', { age: 7 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 0 });
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {
    age,
  });

  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount('62022cfaa3bd4e12bc7b2ecb', 10)
  .then((count) => console.log(count))
  .catch((err) => console.log(err));
