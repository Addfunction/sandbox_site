
import Head from 'next/head';

export default function Home() {
  return (
    <div className='bg-darkBg text-neonGreen min-h-screen flex items-center justify-center'>
      <Head>
        <title>Sandbox Site</title>
      </Head>
      <h1 className='text-4xl font-bold'>Welcome to Your AI Sandbox</h1>
    </div>
  );
}
