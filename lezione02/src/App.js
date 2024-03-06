
import './App.css';
import ElementoElencoSpese from './components/ElementoElencoSpese';

function App() {
  return (
    <>
      <h1>Elenco spese:</h1>
      <ElementoElencoSpese
        data = {"1 Marzo 2023"}
        ammontare={294.67}
        titolo={"Assicurazione Auto"}
      >
      </ElementoElencoSpese>
    </>
  );
}

export default App;
