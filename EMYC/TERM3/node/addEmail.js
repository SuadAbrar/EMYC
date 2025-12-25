function addEmail(users) {
  const newUsers = users.map((user) => {
    // const us = {
    //   ...users,
    return {
      ...user,
      email: `${user.name}${user.phone}@gmail.com`,
    };
    // };
    // email: {
    //   user.name + user.phone + `@gmail.com`;
    // }
  });
  return newUsers;
}
// addEmail();
// console.log(addEmail());
// users.map((user) => {
//   user.email = `${user.name}${user.phone}@gmail.com`;
//   console.log(users);
// });

module.exports = { addEmail };
