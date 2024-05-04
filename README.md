# Users Todos & Posts

This project is a React-based web application that interacts with server data provided by the following endpoints:
- Users: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Posts: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- Todos: [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)

## Case 1: Application Starts
- Upon application start, the UI presents all the users' data, ordered by user ID.
- Users with uncompleted tasks (todos) are marked with a red border, while others are marked with a green border.

## Case 2: Search
- Entering text in the search text box filters the user list to display only users whose name or email contains the entered text.

## Case 3: Other Data
- Hovering over the "Other Data" section reveals additional data.
- Clicking on the "Other Data" section closes it.

## Case 4: Update/Delete Data
- Editing user data and pressing "Update" updates the user's data.
- Pressing "Delete" deletes all of the user's data.

## Case 5: Selecting User
- Clicking on the user ID label highlights the user region in orange.
- The user's posts and todos are presented, and for todos that haven't been completed, a "Mark Completed" button is provided to complete the task.

## Case 6: Add new ToDo
- Pressing "Add" above the "ToDo" list allows adding a new ToDo.
- Pressing "Cancel" brings back the ToDo list.

## Case 7: Add new Post
- Pressing "Add" above the "Posts" list allows adding a new Post.
- Pressing "Cancel" brings back the Post list.

## Case 8: Add new User
- Pressing "Add" above the "Users" list navigates to a new user "screen".
- Additional data, such as "Other Data", is not provided during user creation but only during user data updates.

This React application manages a client-side "Database" initialized with server data from the provided endpoints and implements various functionalities based on the specified requirements.
## How to Run

### Prerequisites:
- Node.js installed on your system
- npm or yarn package manager

### Steps:

1. **Clone the repository:**
   git clone <repository_url>

2. **Navigate to the project directory:**
  cd <project_directory>

3. **Install dependencies:**
  npm install

4. **Run the development server:**
   npm run dev




