import React from "react";
import { useState } from "react";
import styles from './Form.module.css';
import Card from './Card'

const Form = () =>{

    //Constantes
    const [nombre, setNombre]=useState("");
    const [apellido,setApellido]= useState("");
    const [genero, setGenero]= useState("");
    const [pelicula, setPelicula]= useState("");
    const [mostrarError,setMostrarError] = useState(false);
    const [mostrarCard, setMostrarCard] = useState(false);

    //Constantes de validación
    const esValidoElNombre = nombre.length>2;
    const esValidoElApellido= apellido.length>5;

    //Funciones OnChange
    const onChangeNombre = (e) =>{
        setNombre(e.target.value.trim())
    }
    const onChangeApellido = (e) =>{
        setApellido(e.target.value)
    }
    const onChangeGenero = (e) =>{
        setGenero(e.target.value);
    }
    const onChangePelicula = (e) =>{
        setPelicula(e.target.value)
    }


    //Funcion Handler del evento
    function manejadorDeEvento(e){
        e.preventDefault();

        if (esValidoElNombre && esValidoElApellido){
            setMostrarError(false);
            setMostrarCard(true);
        }
        else{
            setMostrarError(true);
            setMostrarCard(false);
        }
    }

    //Renderizado
    return(
        <>
        <h3>Por favor llena el formulario con tus datos y los de tu película favorita</h3>
        <form onSubmit={manejadorDeEvento}>
            <div>
                <input
                className={styles.input}
                type="text"
                placeholder="Escriba su nombre"
                value={nombre}
                onChange={onChangeNombre}
                />
                <input
                className={styles.input}
                type="text"
                placeholder="Escriba su apellido"
                value={apellido}
                onChange={onChangeApellido}
                />
            </div>
            <div>
                <select
                    className={styles.input}
                    placeholder="Escoge un género"
                    onChange={onChangeGenero}
                    value={genero}
                >
                    <option value="" disabled default>
                    Escoge un género
                    </option>

                    <option value="terror">Terror</option>
                    <option value="comedia">Comedia</option>
                    <option value="drama">Drama</option>
                </select>
            </div>
            <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Película favorita"
                value={pelicula}
                onChange={onChangePelicula}
                />
            </div>
            <div>
                <button type="submit" className={styles.button}>Enviar</button>
            </div>
            {mostrarError && <p className={styles.error}>Por favor chequea que la información sea correcta</p>}
            {mostrarCard && <div ><Card name={nombre} apellido={apellido} pelicula= {pelicula} genero={genero}/></div>}
        
        </form>
        </>
    )
}
export default Form;