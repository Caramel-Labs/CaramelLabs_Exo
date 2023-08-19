# Exo (Frontend)

Welcome to the frontend codebase of the Exo app. The frontend has been built as a mobile-responsive web app (optimized for 360 x 800 screens).

<b>IMPORTANT: This project is still under construction.</b>

Instructions on setting up the frontend locally (in development mode) are available <a href="https://github.com/Caramel-Labs/CaramelLabs_Exo">here</a>.

## Technologies

The frontend of the Exo app has been built using:

1. <b><a href="https://nextjs.org/">NextJS</a></b> - an open-source JavaScript framework used to build full-stack web applications using the ReactJS library. NextJS offered multiple benefits during the development of Exo, including server-side rendering, faster development times, less bloated source code and more.
2. <b><a href="https://tailwindcss.com/">TailwindCSS</a></b> - a CSS framework used to build web components using primitive utility classes. Tailwind has been selected as its utility-first approach allows for greater customization than other CSS frameworks. This is essential for Exo as it uses a custom design system and style guide for its UI.
3. <b><a href="https://www.typescriptlang.org/">TypeScript</a></b> - a strongly-typed high level programming language built on top of JavaScript. TypeScript ensured a good level of code readability and maintainability during the development of this project.

## File Structure

    .
    ├── public                  # Static media assets
    ├── src                     # Source files for NextJS app
        ├── app                 # Pages and routes
        ├── components          # Standalone components
        ├── utils               # Utilities for frontend logic
    ├── [Config files]          # TypeScript, TailwindCSS, Prettier etc.
    └── README.md

The above file structure has been deemed the most optimal, maintainable and scalable structure for Exo after multiple iterations of changing between React-centric design patterns.