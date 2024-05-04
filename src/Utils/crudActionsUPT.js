const addUserToUsers = (users, user) => {
  return [...users, user];
};

const deleteUser = (usersId, users, posts, todos) => {
  const newUsers = users.filter((user) => user.id !== usersId);
  const newPosts = posts.filter((post) => post.userId !== usersId);
  const newTodos = todos.filter((todo) => todo.userId !== usersId);
  return [newUsers, newPosts, newTodos];
};

const updateUser = (userId, users, name, email) => {
  const updatedUsers = users.map((user) => {
    if (user.id === userId) {
      return { ...user, name, email };
    }
    return user;
  });
  return updatedUsers;
};

const getUserTodos = (userId, todos) => {
  return todos.filter((todo) => todo.userId === userId);
};

const getUserPosts = (userId, posts) => {
  return posts.filter((post) => post.userId === userId);
};

const markTodoAsCompleted = (todoId, todos) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, completed: true };
    }
    return todo;
  });
  return updatedTodos;
};

const addTodoToUser = (todos, todo) => {
  return [...todos, todo];
};

const addPostToUser = (posts, post) => {
  return [...posts, post];
};

export {
  deleteUser,
  updateUser,
  getUserTodos,
  getUserPosts,
  markTodoAsCompleted,
  addTodoToUser,
  addPostToUser,
  addUserToUsers,
};
