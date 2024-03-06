
import './ElementoElencoSpese.css';

export default function ElementoElencoSpese(props){
    const data = props.data; // "1 Marzo 2024"
    const titolo = props.titolo; // "Assicurazione Auto"
    const ammontare = props.ammontare; // 294.67
    return  <div className="elemento-elenco">
        <div>{data}</div>
        <div className="element-elenco-descrizione">
            <h2>{titolo}</h2>
        </div>
        <div className="elemento-elenco-prezzo">
            {ammontare}
        </div>
    </div>
}