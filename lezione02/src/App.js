
import './App.css';
import ElementoElencoSpese from './components/ElementoElencoSpese';

function App() {

  const spese = [
    {
      titolo :"Assicurazione auto",
      ammontare : 294.13,
      data: new Date(2023,2,29)
    },
    {
      titolo :"TV nuova",
      ammontare : 300,
      data: new Date(2023,3,1)
    }
  ]

  return (
    <>
      <h1>Elenco spese:</h1>
      <ElementoElencoSpese
        data = {spese[0].data}
        ammontare={spese[0].ammontare}
        titolo={spese[0].titolo}
      />
      <ElementoElencoSpese
        data = {spese[1].data}
        ammontare={spese[1].ammontare}
        titolo={spese[1].titolo}
      />
    </>
  );
}

export default App;
