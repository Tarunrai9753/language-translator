import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = () => {
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate', params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => {
      console.log(res.data);
      setOutput(res.data.translatedText);
    });
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  return (
    <div className="container">
     <h1 className='text-center mt-2 mb-2'> Language Translator</h1>
      <section className="mb-3">
        <label htmlFor="fromSelect" className="form-label">
          From : ({from}){" "}
        </label>
        <select
          onChange={(e) => setFrom(e.target.value)}
          className="form-select"
          id="fromSelect"
        >
          {options.map((op) => (
            <option key={op.code} value={op.code}>
              {op.name}
            </option>
          ))}
        </select>
        <label htmlFor="toSelect" className="form-label">
          To : ({to})
        </label>
        <select
          onChange={(e) => setTo(e.target.value)}
          className="form-select"
          id="toSelect"
        >
          {options.map((op) => (
            <option key={op.code} value={op.code}>
              {op.name}
            </option>
          ))}
        </select>
      </section>


<div className='d-sm-flex justify-content-evenly gap-2'>
      <div className="mb-3 w-sm-50 w-100">
        <textarea
          className="form-control"
          cols="60"
          rows="9"
          onInput={(e) => setInput(e.target.value)}
          placeholder='Type Here To Convert Your Text'
        ></textarea>
      </div>

      <div className="mb-3 w-sm-50 w-100">
        <textarea
          className="form-control"
          cols="60"
          rows="9"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          placeholder='Your Output Will be Shown Here.'
       
        ></textarea>
      </div>

      </div>

      <div className="mb-3 d-flex justify-content-center">
        <button onClick={e => translate()} className="btn btn-primary">Translate</button>
      </div>
    </div>
  );
}

export default App;
