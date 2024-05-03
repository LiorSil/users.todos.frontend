import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

const fetchUsers = async () => {
  try {
    const response = await axios.get(`${URL}/users`);
    const newData = response.data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
            
            },

      };
    });
    return newData;
  } catch (error) {
    console.error(error);
  }
};

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${URL}/posts`);
    
    return response.data
  } catch (error) {
    console.error(error);
  }
};

const fetchTodos = async () => {
  try {
    const response = await axios.get(`${URL}/todos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const posts = await fetchPosts();
const users = await fetchUsers();
const todos = await fetchTodos();


export { posts, users, todos };