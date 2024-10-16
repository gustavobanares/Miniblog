# Mini Blog

Mini Blog is a web application developed with React and Firebase, allowing users to create, edit, and publish blog posts easily. This platform offers essential blogging features to manage posts and engage with readers.

## 🚀 Features

- 📝 Post Creation: Write and publish new blog posts.
- ✏️ Edit Posts: Update content as needed with ease.
- 🗑️ Delete Posts: Remove unwanted posts from the blog.
- 📄 Post Management: View a list of all posts and their details.
  
## 🛠️ Technologies Used

This project was built using the following technologies:

- Vite: For fast project setup and development.
- React: For building the user interface and managing the state.
- Tailwind CSS: For styling and responsive design.
- JavaScript: For logic and interactivity.
- Firebase: As the backend database to store and manage posts.
  
## 📥 Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/gustavobanares/Miniblog
```
2. Navigate to the project directory:
```bash
cd miniblog
```
3. Install the dependencies:
```bash
npm install
```
4. Configure Firebase:
- Create a project on Firebase.
- Set up Firestore as the database.
- Add your Firebase configuration to the project:
```bash
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```
5. Start the development server:
```bash
npm run dev
```
5. Open http://localhost:5173/ in your browser to use the Mini Blog.

## 🌐 Project Link

Deployed: [Mini Blog on Vercel]()

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) see the LICENSE file for details.
