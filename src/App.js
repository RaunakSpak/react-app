// import React, { useState } from 'react';
// import './App.css'

// import Counter from './counter';

// const App = () => {
  
//   const [count, setCount] = useState(0);

  
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>React Counter App</h1>
//       <h2>Current Count: {count}</h2>
//       <button
//         onClick={increment} className='inc-btn'>
//         Increment
//       </button>
//       <button
//         onClick={decrement} className='dec-btn'>
//         Decrement
//       </button>
//       <Counter/>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import UserCard from './UserCard';
import './App.css';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>User Profiles</h1>
      <UserCard
        name="Hariom singh"
        age={28}
        avatar="https://avatar.iran.liara.run/public/boy"
        bio="Graphic designer who loves turning ideas into visual masterpieces."
      />
      <UserCard
        name="Raunak Vishwakarma"
        age={25}
        avatar="https://avatar.iran.liara.run/public/boy"
        bio="Software developer with a passion for creating amazing applications."
      />
    </div>
  );
};

export default App;
