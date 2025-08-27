
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className='bg-darkBg text-neonBlue min-h-screen p-8'>
      <Head>
        <title>Developer Dashboard</title>
      </Head>
      <h1 className='text-4xl font-bold mb-6'>Developer Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Link href='/tools/http-inspector' className='bg-neonGreen p-4 rounded shadow-lg'>HTTP Inspector</Link>
        <Link href='/tools/encryption' className='bg-neonPink p-4 rounded shadow-lg'>Encryption Tools</Link>
        <Link href='/tools/ai-playground' className='bg-neonBlue p-4 rounded shadow-lg'>AI Playground</Link>
        <Link href='/tools/project-tracker' className='bg-neonGreen p-4 rounded shadow-lg'>Project Tracker</Link>
        <Link href='/tools/system-monitor' className='bg-neonPink p-4 rounded shadow-lg'>System Monitor</Link>
        <Link href='/tools/terminal' className='bg-neonBlue p-4 rounded shadow-lg'>Terminal</Link>
      </div>
    </div>
  );
}
