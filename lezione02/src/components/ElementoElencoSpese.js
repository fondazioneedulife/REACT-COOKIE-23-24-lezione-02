
import './ElementoElencoSpese.css';
import { useState } from 'react';
export default function ElementoElencoSpese(props){

    const [titolo, setTitolo] = useState(props.titolo);
    const data = props.data; 
    const ammontare = props.ammontare;
    const clickHandler = () =>{
        setTitolo("Nuovo titolo!");
    }
    return  <div className="elemento-elenco">
        <div>{data}</div>
        <div className="element-elenco-descrizione">
            <h2>{titolo}</h2>
        </div>
        <div className="elemento-elenco-prezzo">
            {ammontare}
        </div>
        <button onClick={clickHandler}>
            Cambia titolo
        </button>
    </div>
}