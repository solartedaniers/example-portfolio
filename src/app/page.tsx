import Image from 'next/image';

export default function Home() {
  return (
    <div className='font-sans flex justify-center'>
      <main className='grid grid-cols-12 container mt-20 gap-10'>
        {/* <Image src='/next.svg' alt='avatar' width={100} height={100} /> */}
        <span className='col-span-3 row-span-2 bg-white rounded-2xl'>IMG</span>
        <p className='p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground'>
          My name is Sunil Kumar self- taught logo/brand designer with 4+ years
          of experience creating modern, clean, and minimal brands that make a
          lasting impression.
        </p>
        <ul className='flex items-center col-span-9 gap-4 p-5 rounded-2xl bg-foreground'>
          <li className='text-white text-lg font-bold border-r pr-4'>
            Interests
          </li>
          <li className='flex items-center bg-background rounded-lg text-white text-sm px-4 py-2'>
            🎮 Gaming
          </li>
          <li className='flex items-center bg-background rounded-lg text-white text-sm px-4 py-2'>
            📽️ Film Making
          </li>
          <li className='flex items-center bg-background rounded-lg text-white text-sm px-4 py-2'>
            ✈️ Traveling
          </li>
        </ul>
        <div className='col-span-6 rounded-2xl bg-foreground p-5'>
          <h3 className='text-2xl font-bold text-white'>Freelancer</h3>
          <p className='text-white'>Logo/Brand Designer</p>
        </div>
        <div className='col-span-6 rounded-2xl bg-foreground p-5'>
          <h3 className='text-2xl font-bold text-white'>Meetzed</h3>
          <p className='text-white'>Logo/Brand Designer</p>
        </div>
      </main>
    </div>
  );
}
