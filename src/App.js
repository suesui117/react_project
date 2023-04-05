
//Reference https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
//https://gist.github.com/mtlynch3/1b6b8d05032550465aa66bc0fa5da89e

import { Routes, Route, Link } from 'react-router-dom';
import ApiData from './Users.js';
import UserList from './UserList';
import ColorList from './ColorList';

function App() {

  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];

  const colors = ['red', 'green', 'blue', 'yellow'];

  const image="https://eus-www.sway-cdn.com/s/lS9lnvgYelIJHUrK/images/csweH7hj74FsUq?quality=960&allowAnimation=false"

  return (
    <div className="App" style={{
      backgroundImage: `url(${image}})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }} >
      <Routes>
        <Route index element={<Home />} />


        <Route path="api-call" element={<ApiData />} />
        <Route path="about" element={<About />} />
        <Route path="youtube" element={<Youtube />} />

        <Route path="/colors" element={<ColorList colors={colors} />} />

        <Route path="/users" element={<UserList users={users} />} />

      </Routes>
    </div>
  );
}


function Home() {
  return (
    <div style={{textAlign: 'center', color: 'white'}}>
      <h2>Home</h2>
      <Link to="/about" style={{color: 'white'}}>About page</Link>
      <br></br>

      <Link to="/api-call" style={{color: 'white'}}>API-call</Link>
      <br></br>

      <Link to="/youtube" style={{color: 'white'}}>Youtube page</Link>
      <br></br>

      <Link to="/users" style={{color: 'white'}}>Users</Link>
      <br></br>

      <Link to="/colors" style={{color: 'white'}}>Colors</Link>
      <br></br>
    </div>

  );
}



function Youtube() {
  return (
    
    <div>
      <h2>youtube</h2>
      <Link to="/">Home page</Link>
      <br></br>
      <a href='https://youtube.com' target='_blank' rel='noreferrer'>
        Click me to visit YouTube</a>
    </div>


  );
}

function About() {
  return (
    <div>
      <h2>About me</h2>
      <p> Spring 2023, Practical Web Development </p>
      <Link to="/">Home page</Link>
    </div>
  );
}

export default App;




// import React from 'react';
// import UserList from './UserList';
// import ColorList from './ColorList';

// function App() {


//   const users = [
//     { name: 'Alice', age: 25, sex: 'female' },
//     { name: 'Bob', age: 30, sex: 'male' },
//     { name: 'Charlie', age: 35, sex: 'male' },
//   ];

//   const colors = ['pink', 'yellow', 'blue'];

//   return (
//     <div className="App">
//       <UserList users={users} />
//       <ColorList colors={colors} />
//     </div>
//   );
// }

// export default App;