
import { useState } from 'react';

export default function HttpInspector() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const inspectUrl = async () => {
    try {
      const res = await fetch(url);
      const text = await res.text();
      setResponse(text);
    } catch (err) {
      setResponse('Error fetching URL');
    }
  };

  return (
    <div className='bg-darkBg text-neonGreen min-h-screen p-8'>
      <h2 className='text-2xl mb-4'>HTTP Inspector</h2>
      <input type='text' value={url} onChange={e => setUrl(e.target.value)} placeholder='Enter URL' className='p-2 w-full mb-4 text-black'/>
      <button onClick={inspectUrl} className='bg-neonBlue p-2 rounded'>Inspect</button>
      <pre className='mt-4 whitespace-pre-wrap'>{response}</pre>
    </div>
  );
}
