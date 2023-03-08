import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>Carga de Estudiantes</h1>
      <Card/>
      <Form/>
    </div>
  )
}

export default App
