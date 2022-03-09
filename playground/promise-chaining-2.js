require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('620328fd87970027e06bd70e')
//   .then((task) => {
//     console.log(task);

//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);

  const count = Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount('6213a2e1f19d8113088477f7')
  .then((count) => console.log(count))
  .catch((err) => console.log(err));
