# [Ketaby](https://github.com/HussainWorld/kitabi-express-back-end.git)

## Ketaby Logo
![Ketaby Logo Page](./public/KetabyLogo.svg)

## Dashboard Page
![Ketaby Dashboar Page](./public/DashboardPage.png)

## Description 

A MERN-stack e-commerce platform designed to allow users to post advertisements for selling books. Built with React, Bootstrap, and Vite on the frontend, and Node.js, Express.js, and Mongoose on the backend with MongoDB as the database. The platform features user authentication and an advertisement management. The frontend is deployed using Heroku. Tools Used: React.js, Bootstrap, Vite, Node.js, Express.js, Mongoose, MongoDB, Git, Heroku, Morgan

---

## Background

The goal was to build a user-friendly platform that allows users to easily browse advertisements, post an advertisement, and manage their advertisement.

---
 
## Getting Started

- **Deployed App**: [Ketaby](https://kitabi-react-front-pc34hpycf-hussains-projects-06bdfe2e.vercel.app)
- **Frontend Repository**: [Ketaby Frontend](https://github.com/HussainWorld/kitabi-react-front-end.git)
- **Backend Repository**: [Ketaby Backend](https://github.com/HussainWorld/kitabi-express-back-end.git)
---

## Project Structure

### Frontend


```
KITABI-REACT-FRONT-END
│
├── node_modules/
├── public/
│   └── Images/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CreateAd/
│   │   ├── CreateWantedAd/
│   │   ├── Dashboard/
│   │   ├── EditAd.jsx
│   │   ├── Landing/
│   │   ├── MyAds/
│   │   ├── NavBar/
│   │   ├── SignInForm/
│   │   ├── SignUpForm/
│   │   └── ViewAd/
│   │
│   ├── contexts/
│   │   ├── adContext.jsx
│   │   ├── UserContext.jsx
│   │   └── wantedAdContext.jsx
│   │
│   ├── services/
│   │   ├── adService.js
│   │   ├── authService.js
│   │   ├── userService.js
│   │   └── wantedAdService.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── readme.md
├── vite.config.js
```


### Backend


```
KITABI-EXPRESS-BACK-END
│
├── controllers/
│   ├── ads.js
│   ├── auth.js
│   ├── test-jwt.js
│   ├── users.js
│   ├── wantedAds.js
│
├── middleware/
│   └── verify-token.js
│
├── models/
│   ├── ad.js
│   ├── favoriteAdsSchema.js
│   ├── user.js
│   └── wantedAd.js
│
├── node_modules/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
```

---

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Services](#services)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)


## Usage

- Sign in to post an advertisement and manage your advertisements.
- Navigate to the homepage to view the list of advertisements.

## Features

- **User Authentication**: Secure sign-in and sign-up functionality.
- **Responsive Design**: The application is responsive and works on various devices.
  

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Bootstrap**: A CSS framework for responsive design.
  - **Vite**: A build tool for modern web development.

- **Backend**:
  - **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express.js**: A web framework for Node.js.
  - **Mongoose**: An ODM library for MongoDB.

- **Database**:
  - **MongoDB**: A NoSQL database for storing application data.

- **Other Tools**:
  - **Git**: Version control system.
  - **Vercel**: Deployment platform for frontend.
  - **Morgan**: HTTP request logger for Node.js.

---

## Attributions

- [Bootstrap](https://getbootstrap.com/): Used for styling and responsive design.
- [React Icons](https://react-icons.github.io/react-icons/): Used for icons in the application.
- [Vite](https://vitejs.dev/): Used as the build tool for the frontend.

---

## Next Steps

- **User Reviews**: Allow users to leave reviews and ratings for advertisements.
- **Payment Integration**: Integrate a payment gateway for seamless transactions.
- **Advanced Search**: Implement advanced search and filtering options for products.
- **Mobile App**: Develop a mobile version of the application for iOS and Android.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

Enjoy your books! 📚 📖
