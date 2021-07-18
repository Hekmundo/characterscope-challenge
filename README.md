# CharacterScope Front-End Challenge

## Usage

Make sure you have [Node.js](https://nodejs.org/en/) installed.

`npm install`

Develop:<br/>
`npm start`

Build: <br/>
`npm run build`

<br/>

## State Management

For this challenge I used React as a UI framework and took the approach of storing the Prismic CMS data as a single global state. I distributed state to the rest of the app by wrapping it in a Context API HOC function that provides the data to all its children. The CMS data is fetched at runtime and until the data is available locally the page will render a simple spinner.

## Design Approach

In order to implement a clean and simple UI I adopted a plain background with subtle colours to accentuate the layout and leader type colour themes. My approach was to take inspiration from the current CharacterScope web design and to keep with the brands aesthetic. In order to add some user interactivity to the UI, I implemented several animations and transitions; most of which can be seen on the home page. I took a mobile first approach in this challenge and as a consequence I have very few media queries.

<br/>

## Dependencies and Technologies:

- [React](https://reactjs.org/) (UI library)
- [React Router](https://reactrouter.com/) (for page routing)
- [Prismic Rich Text, for React](https://www.npmjs.com/package/prismic-reactjs) (to fetch content from the Prismic CMS)
- [React Scroll](https://www.npmjs.com/package/react-scroll) (to handle scroll animation)
- [Create React App (react-scripts)](https://github.com/facebook/create-react-app) (for easy setup of development and build configurations)
- [Styled Components](https://styled-components.com/) (to separate the concern of CSS styles into their own module for each component while avoiding global class name collisions)
