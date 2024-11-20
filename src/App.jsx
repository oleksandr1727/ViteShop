import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form4 from './components/Form4';
import Form3 from './components/Form3';
import MainForm from './components/MainForm';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
         <Route path='/create_protocol' element={<MainForm />}/>
         <Route path='/protocols' element={<Protocols />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;