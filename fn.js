const fn = {
  add: (x, y) => {
    return x + y;
  },

  makeUser: (name, age) => ({ name, age, gender: undefined }),
}

module.exports = fn;
