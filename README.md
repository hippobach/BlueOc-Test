# React-Redux Posts Application

This project is a simple React-Redux application that demonstrates fetching and displaying posts from an API and adding new posts dynamically through a form. It is built using **React**, **Redux**, **Vite**, and **Yarn** for a fast and modern development experience.

---

## Features

- Fetch and display posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Add new posts dynamically using a form.
- State management powered by Redux.
- Built with Vite for blazing-fast development.
- Styled with modern CSS, React library.

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [Yarn](https://yarnpkg.com/) (v1.22 or newer)

---

## Installation

Follow the steps below to set up and run the application:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hippobach/BlueOc-Test.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Task_3
   cd react-redux
   ```

3. **Install dependencies using Yarn**:

   ```bash
   yarn install
   ```

4. **Start the development server**:

   ```bash
   yarn dev
   ```

---

## Project Structure

The project follows a clean and modular folder structure:

```
src/
├── components/
│   ├── PostsForm/PostForm.jsx        # Component for adding posts
│   ├── PostsList/PostList.jsx        # Component for displaying posts
├── redux/
│   ├── posts/postsSlice.js
│   ├── store.js            # Redux store configuration
├── App.jsx                 # Main app component
├── index.jsx               # Entry point
├── index.css               # Global styles
```

---

## Usage

1. **Fetch Posts**:

   - When the app loads, it fetches and displays a list of posts from the JSONPlaceholder API.

2. **Add a New Post**:
   - Use the form at the top of the page to add a new post.
   - Enter a title and body, then click **Submit** button.
   - The post will be added to the list below dynamically.

---

## Screenshots

### **Home Page**

![Home Page](BlueOc-Test\Task_3\react-redux\src\assets\postsList.png)

### **Add Post**

![Add Post Form](BlueOc-Test\Task_3\react-redux\src\assets\addNewPostForm.png)

---

## Scripts

Here are the available Yarn commands for this project:

- `yarn dev`: Starts the development server with Vite.
- `yarn build`: Builds the application for production.
- `yarn preview`: Previews the production build.
- `yarn lint`: Runs the linter (if configured).

---

## Dependencies

### Main Dependencies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [React-Redux](https://react-redux.js.org/) - Official React bindings for Redux.

### Dev Dependencies:

- [Vite](https://vitejs.dev/) - A fast build tool for modern web apps.
- [ESLint](https://eslint.org/) - A tool for identifying and fixing problems in JavaScript code (optional).

---

## Contributing

Contributions are welcome! If you want to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin my-feature-branch
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a free and easy-to-use API for testing.
- The React and Redux teams for building awesome libraries.
- The Vite team for creating a modern, fast development experience.

---

### Happy Coding! 🚀

```

```
