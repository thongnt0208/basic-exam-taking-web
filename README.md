# Basic Exam Taking Application
This repository stores my Basic Exam Taking Web Application code by ReactJS. One part of the "Bootcamp: Front-End with React Framework" program belongs to the "Future Foundation" events series of FPT University HCM.
Author: Nguyễn Trung Thông - SE160850

## Technologies
- Library: ReactJS
- UI: Prime React

## Requirements
- Tạo mock data dựa trên given format (mockaroo.com)
- Tạo node-RED json
- Lưu countdown time, đáp án đã chọn dưới localstorage → vẫn countdown dù có thoát ra vào lại
- Câu hỏi phải được trộn: check đáp án bằng cách gửi id câu hỏi
- Trang Home có input nhập mã code Submit → chuyển sang trang làm bài
- Auto submit when time-out
- Save the answer to Local Storage

### Current drawbacks
- Do not mix the answers
- Do not UX Optimization
- No handling bad cases
- No lazy load


### Update real API
- Submit answer in POST method with body data in format: [
{
"quesId": "48c9945c-c048-4cdc-99c3-249c4a320386",
"answerId": "e59a4d41-19f8-44b5-aa42-92058fb6cee9"
}
]
- 2 given question id:
1. "285498f5-3486-434d-a459-bedb6bcea7ce"
2. "182e08a1-0d18-44bd-9b4b-c7ac85144e9e"
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
