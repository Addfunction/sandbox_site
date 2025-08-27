
import { useState } from 'react';

export default function EncryptionTools() {
  const [text, setText] = useState('');
  const [encrypted, setEncrypted] = useState('');

  const encryptText = () => {
    const encoded = btoa(text);
    setEncrypted(encoded);
  };

  return (
    <div className='bg-darkBg text-neonPink min-h-screen p-8'>
      <h2 className='text-2xl mb-4'>Encryption Tool</h2>
      <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Enter text' className='p-2 w-full mb-4 text-black'/>
      <button onClick={encryptText} className='bg-neonGreen p-2 rounded'>Encrypt</button>
      <pre className='mt-4'>{encrypted}</pre>
    </div>
  );
}
