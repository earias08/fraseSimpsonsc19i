// import logo from './components/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Btn from './components/Btn';
import {Button} from 'react-bootstrap';
import {useEffect, useState} from 'react';


function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async() =>{
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const dato = await respuesta.json();
    console.log(respuesta)
    console.log(dato[0])
    setPersonaje(dato[0])
  }

  return (
    <div className='bg-info py-5 '>
      {/* <img src={logo} alt="logo" /> */}
      <Logo></Logo>    
      {/* <Btn consultarAPI = {consultarAPI}></Btn> */}
      <div className='text-center my-5'>
      <Button variant="warning" size='' type='submit'className='px-5' onClick={()=> consultarAPI()}>Obtener Frase</Button>
      </div>
      <Cards personaje={personaje} ></Cards>
    </div>
    
  );

}

export default App;
