import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(e) {
    setLinea1(e.target.value);
  }
  const onChangeLinea2 = function(e) {
    setLinea2(e.target.value);
  }
  const onChangeImagen = function(e) {
    setImagen(e.target.value);
  }
  const onClickExportar =function (e) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="container text-center mt-5">
      <h1 className='text-center mb-5 text-white'>App De Memes</h1>
    {/* //select picker de memes */}
      <select onChange={onChangeImagen} className="selector">
        <option></option>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart</option>
      </select> <br/><br/>

    {/* // input text - primer linea */}

    <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /> <br/><br/>

    {/* // input text - segunda linea */}

    <input onChange={onChangeLinea2} type="text" placeholder='Linea 2' /> <br/><br/>

    {/* // boton exportar */}

    <button onClick={onClickExportar}>Exportar</button>

    <div className='meme' id='meme'>
      <span>{linea1}</span> <br/>
      <span className='span2' >{linea2}</span>
      <img src={"/img/" + imagen + ".jpg"} />
    </div>

    </div>
  );
}

export default App;
