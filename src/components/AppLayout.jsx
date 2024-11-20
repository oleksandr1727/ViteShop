import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

function App() {
  return (
    <div>
      <Form1 />
      <Form2 participant="Учасник 1" />
      <Form3 participant="Учасник 2" />
      <Form4 />
    </div>
  );
}

export default App;