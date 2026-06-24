# My Portfolio

This is my personal portfolio website built with React. It showcases my skills, projects, and experience.

## Features

- Responsive design
- Dark/light theme toggle
- Animated sections
- Contact form
- Project filtering

## Technologies Used

- React
- React Router
- Framer Motion (for animations)
- EmailJS (for contact form)
- CSS Modules

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your EmailJS credentials
4. Start the development server: `npm start`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App

## Customization

To customize the portfolio with your own information:

1. Update the data files in `src/data/`
2. Replace images in `public/assets/images/`
3. Modify colors in `src/styles/globals.css`
4. Update the `public/manifest.json` and `public/index.html` files



## Project structre 
```bash

portfolio
    ├── public
    │   ├── assets
    │   │   └── images
    │   │       ├── projects
    │   │       │   ├── AI-chat-5.png
    │   │       │   ├── chess game.jpg
    │   │       │   ├── Food_Delivery.png
    │   │       │   ├── google map.jpg
    │   │       │   ├── online web store.jpg
    │   │       │   ├── original.png
    │   │       │   ├── snake game.png
    │   │       │   ├── tic tac.png
    │   │       │   └── To-Do-List-App.jpg
    │   │       └── profile.jpeg
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   ├── netlify.toml
    │   ├── pf-icon-.png
    │   ├── pf-icon.png
    │   └── robots.txt
    ├── src
    │   ├── components
    │   │   ├── chatbot
    │   │   │   ├── Chatbot.css
    │   │   │   └── Chatbot.jsx
    │   │   ├── common
    │   │   │   ├── Footer.css
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Header.css
    │   │   │   ├── Header.jsx
    │   │   │   ├── ThemeToggle.css
    │   │   │   └── ThemeToggle.jsx
    │   │   ├── sections
    │   │   │   ├── About.css
    │   │   │   ├── About.jsx
    │   │   │   ├── Contact.css
    │   │   │   ├── Contact.jsx
    │   │   │   ├── Experience.css
    │   │   │   ├── Experience.jsx
    │   │   │   ├── Hero.css
    │   │   │   ├── Hero.jsx
    │   │   │   ├── Projects.css
    │   │   │   ├── Projects.jsx
    │   │   │   ├── Skills.css
    │   │   │   └── Skills.jsx
    │   │   └── ui
    │   │       ├── ProjectCard.css
    │   │       └── ProjectCard.jsx
    │   ├── context
    │   │   └── ThemeContext.js
    │   ├── data
    │   │   ├── experience.js
    │   │   ├── projects.js
    │   │   ├── skills.js
    │   │   └── socialLinks.js
    │   ├── hooks
    │   │   ├── useContactForm.js
    │   │   ├── useScrollAnimation.js
    │   │   └── useTheme.js
    │   ├── pages
    │   │   ├── Home.css
    │   │   ├── Home.jsx
    │   │   ├── NotFound.css
    │   │   └── NotFound.jsx
    │   ├── styles
    │   │   ├── animations.css
    │   │   ├── globals.css
    │   │   └── variables.css
    │   ├── utils
    │   │   ├── animations.js
    │   │   ├── constants.js
    │   │   └── helpers.js
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```
