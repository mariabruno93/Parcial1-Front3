import React from "react";
import styles from './Card.module.css'

const Card = ({name, apellido, pelicula, genero}) => {

    return (
        
        <div className={styles.recuadro}>
            <h2>Hola {name} {apellido}</h2>
            <p>Elegiste la película {pelicula} del género {genero}</p>
        </div>
    )
    
    }

export default Card;