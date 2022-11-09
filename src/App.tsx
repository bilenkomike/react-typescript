import React from 'react';
import Todos from './Components/Todos';


function App() {
  return (
    <div>
      <Todos items={['Learn react', 'Learn Typescript']} />
    </div>
  );
}

export default App;
