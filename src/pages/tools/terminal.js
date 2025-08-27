
import { useState } from 'react';

export default function Terminal() {
  const [output, setOutput] = useState('');
  const [command, setCommand] = useState('');

  const runCommand = () => {
    setOutput(`$ ${command}
> Simulated output for: ${command}`);
  };

  return (
    <div className='bg-darkBg text-neonBlue min-h-screen p-8'>
      <h2 className='text-2xl mb-4'>Terminal</h2>
      <input type='text' value={command} onChange={e => setCommand(e.target.value)} placeholder='Enter command' className='p-2 w-full mb-4 text-black'/>
      <button onClick={runCommand} className='bg-neonGreen p-2 rounded'>Run</button>
      <pre className='mt-4 whitespace-pre-wrap'>{output}</pre>
    </div>
  );
}
