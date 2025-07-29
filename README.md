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


```bash

portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── assets/
│       ├── images/
│       │   ├── profile.jpg
│       │   ├── projects/
│       │   └── icons/
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── common/               # Header, Footer, Navbar, etc.
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Button.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── sections/             # Each page section
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/                   # Cards and small UI elements
│   │       ├── ProjectCard.jsx
│   │       ├── SkillCard.jsx
│   │       ├── Timeline.jsx
│   │       └── LoadingSpinner.jsx
│   ├── pages/                    # Routing pages
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── hooks/                    # Custom hooks
│   │   ├── useTheme.js
│   │   ├── useScrollAnimation.js
│   │   └── useContactForm.js
│   ├── context/                  # React Context API
│   │   └── ThemeContext.js
│   ├── data/                     # Static data used in UI
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── socialLinks.js
│   ├── utils/                    # Helper functions & animations
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── animations.js
│   ├── styles/                   # Global and reusable styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
