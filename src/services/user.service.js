const axios = require('axios');

const query = async (page = 1, sortBy) => {
  try {
    const data = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=moveo&inc=picture,login,name,email,gender,location,DOB`);
    const users = data.data.results
    if (sortBy !== null) {
      // eslint-disable-next-line default-case
      switch (sortBy) {
        case 'name':
          users.sort((a, b) => { return a.name.first.localeCompare(b.name.first); });
          break;
        case 'mail':
          users.sort((a, b) => { return a.email.localeCompare(b.email); });
          break;
        case 'gender':
          users.sort((a, b) => { return a.gender.localeCompare(b.gender); });
          break;
        case 'age':
          users.sort((a, b) => { return a.dob.age - b.dob.age; });
          break;
      }
    }
    return users;
  }
  catch (err) {
console.log("There is a problem by getting the users");
  }
}


async function getUserByUserName(userName) {
  let users = await query();
  var user = users.find((user) => {
    return userName === user.login.username
  })
  return user
}

export const userService = {
  query,
  getUserByUserName,

};
