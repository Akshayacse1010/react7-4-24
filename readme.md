# learning react js from hitesh

### npx create-react-app <filename>--> creates a react app

### npx is mostly heavy , vite is a bundler

### command for vite ->npm create vite@latest

## basicreact folder

npm run build -> gives the production version of our app
/Yes, you're correct. In React, batching refers to the process of bundling multiple state updates into a single re-render.

When you call setState (or in your case, setCounter) multiple times within the same synchronous execution block, React will batch these state updates together. This means that React will perform only one re-render with the final state value, instead of re-rendering the component multiple times for each state update./
const setValue = () => {
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => prevCounter + 1);
};
