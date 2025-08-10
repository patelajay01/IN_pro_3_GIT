# DevOps Internship - Task 3

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




## Objective
To manage a DevOps project using Git best practices.  
This includes version control, branching, pull requests, and proper documentation.

---

## Tools Used
- Git
- GitHub
- Markdown for documentation

---

## Branch Strategy
- **main** → Stable production code
- **dev** → Development branch
- **feature/** → For individual features

---

## Steps Performed

1. Initialized a local Git repository using:
git init


2. Added all files to staging and committed:
git add .
git commit -m "Initial commit"


3. Created a new repository on GitHub and connected it:
git remote add origin <repo_url>
git branch -M main
git push -u origin main


4. Created additional branches:
git checkout -b dev
git push -u origin dev

git checkout -b feature/login
git push -u origin feature/login



5. Made changes in feature branches, committed, and pushed them:
git add .
git commit -m "Added login feature"
git push origin feature/login


6. Created Pull Requests on GitHub to merge feature branches into `dev`, and then `dev` into `main`.

7. Added `.gitignore` file to avoid unnecessary files being pushed:
node_modules/
pycache/
.DS_Store
Thumbs.db



8. Created a tag for version control:
git tag v1.0
git push origin v1.0


9. Documented all tasks in this `README.md` file.

---

## Notes
- Always create a new branch for each feature or change.
- Use pull requests for merging instead of directly merging to `main`.
- Keep commit messages short and meaningful.
