# Miniblog

Mini Blog is a web application developed with React, allowing users to create, view, and manage blog posts. Utilizing Firebase as the database, Mini Blog provides a simple and intuitive experience for publishing and reading blog content.
## 🚀 Features

- 📝 Create Posts: Add new blog posts with a title and content.
- 🔍 View and Read: Browse and read posts in a user-friendly interface.
- 🖊️ Edit Content: Update existing posts with new information.
- 🗑️ Delete Posts: Remove old or unnecessary posts.
  
## 🛠️ Technologies Used

This project was built using the following technologies:

- React: For building the user interface and managing state.
- Firebase: Used as a backend for authentication, database, and storage.
- Vite: Build and development tool for faster loading times.
  
## 📥 Installation

To run the project locally, follow these steps:

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

- Create a project on the Firebase Console.
- Enable Firestore and set up authentication rules.
- Retrieve your Firebase credentials and set up the .env file in the project with the following data:
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```
4. Start the development server:
```bash
npm run dev
```
5. Open http://localhost:5173/ in your browser to use miniblog.

## 🌐 Project Link

Deployed: [Mini Blog on Vercel](miniblog-opal.vercel.app)

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) see the LICENSE file for details.
