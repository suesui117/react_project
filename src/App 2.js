
//Reference https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
//https://gist.github.com/mtlynch3/1b6b8d05032550465aa66bc0fa5da89e

import { Routes, Route, Link } from 'react-router-dom';
import ApiData from './Users.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="api-call" element={<ApiData />} />
        <Route path="youtube" element={<Youtube />} />
      </Routes>
    </div>
  );
}

function Youtube() {
  return (
    <div>
      <h2>youtube</h2>
      <Link to="/">Home page</Link>
      <br></br>
      <a href='https://youtube.com' target='_blank' rel='noreferrer'>Click me -- YouTube</a>
    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <br></br>

      <Link to="/about">About page</Link>
      <br></br>

      <Link to="/api-call">api-call</Link>
      <br></br>

      <Link to="/youtube">Youtube page</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About me</h2>
      <p> Spring 2023 CSCI395 Practical Web Development </p>
      <Link to="/">Home page</Link>
    </div>
  );
}

export default App;
