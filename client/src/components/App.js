import React, {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  const [noKartu, setNoKartu] = useState(0);
  const [nominal, setNominal] = useState(0)

  const getNoKartu = async () => {
    const response = await axios.get('http://localhost:3001/api/get')
    setNoKartu(response.data[0].nokartu)
  }

  const updateSaldo = () => {
    axios.put('http://localhost:3001/api/update', {
      nominal,noKartu
    })
    setNominal(0)
  }

  return (
    <div className="App">
      <h1>Isi Saldo</h1>
      <div className="form">
        <label>Tempelkan kartu rfid anda</label>
        <div className="input">
          <input type="text" value={noKartu} name="isiSaldo" readOnly={true}/>
          <button onClick={getNoKartu}>Get</button>
        </div>
          <label>Masukkan nominal untuk di deposit</label>
        <div className="deposit">
          <input type="text" name="nominal" onChange={(e) => setNominal(e.target.value)}/>
          <button type="submit" onClick={updateSaldo} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
