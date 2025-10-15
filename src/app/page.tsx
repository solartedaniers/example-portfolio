import Image from 'next/image';

export default function Home() {
  return (
    <div className='font-sans flex justify-center'>
      <main className='grid grid-cols-12 container mt-20 gap-10'>
        <span className='flex items-center justify-center col-span-3 row-span-2 bg-white rounded-2xl overflow-hidden'>
          <Image src='/avatar.jpg' alt='avatar' width={300} height={300} />
        </span>

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

        <article className='col-span-6 rounded-2xl bg-foreground p-10'>
          <section className='flex items-center justify-between border-b border-b-grey pb-10'>
            <header className='flex flex-col'>
              <h3 className='text-2xl font-bold text-white'>Freelancer</h3>
              <p className='text-grey text-sm'>Logo/Brand Designer</p>
            </header>
            <span className='bg-background rounded-lg text-white text-sm p-4'>
              2021 - now
            </span>
          </section>
          <ul className='list-disc list-inside text-white text-sm mt-6'>
            <li>Worked on diverse logo and brand identity projects.</li>
            <li>Collaborated with clients from multiple countries.</li>
            <li>Developed a versatile design skill set.</li>
            <li>Adapted to unique challenges and requirements.</li>
          </ul>
        </article>

        <article className='col-span-6 rounded-2xl bg-foreground p-10'>
          <section className='flex items-center justify-between border-b border-b-grey pb-10'>
            <header className='flex flex-col'>
              <h3 className='text-2xl font-bold text-white'>Meetzed</h3>
              <p className='text-grey text-sm'>Graphic Designer</p>
            </header>
            <span className='bg-background rounded-lg text-white text-sm p-4'>
              2020 - 2021
            </span>
          </section>
          <ul className='list-disc list-inside text-white text-sm mt-6'>
            <li>Collaboration: Supported Lead Designer on projects.</li>
            <li>Branding: Crafted unique brand identities.</li>
            <li>Tools: Used Illustrator, Photoshop & InDesign.</li>
          </ul>
        </article>

        <ul className='flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10'>
          <li className='text-white text-xl font-bold border-r pr-4'>
            Design Tools
          </li>
          <li className='flex items-center bg-[#360300] rounded-lg font-bold text-[#da9f4c] text-xl px-4 py-2'>
            Ai
          </li>
          <li className='flex items-center bg-[#0b172a] rounded-lg font-bold text-[#74aaf2] text-xl px-4 py-2'>
            Ps
          </li>
          <li className='flex items-center bg-[#59051e] rounded-lg font-bold text-[#d84b6f] text-xl px-4 py-2'>
            Id
          </li>
          <li className='flex items-center bg-[#480d30] rounded-lg font-bold text-[#de6ff0] text-xl px-4 py-2'>
            Xd
          </li>
        </ul>

        <section className='flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground p-10'>
          <article className='flex items-center justify-between w-full border-b border-b-grey pb-8'>
            <span className='flex flex-col'>
              <h2 className='text-white text-3xl font-bold'>High School</h2>
              <p className='text-grey text-lg'>Humanities</p>
              <p className='text-grey text-sm'>Delhi Cantonment, India</p>
            </span>
            <span className='bg-background rounded-lg text-white text-sm p-4'>
              2017
            </span>
          </article>

          <article className='flex items-center justify-between w-full border-b border-b-grey pb-8'>
            <span className='flex flex-col'>
              <h2 className='text-white text-3xl font-bold'>Diploma</h2>
              <p className='text-grey text-lg'>Animation and Graphic Design</p>
              <p className='text-grey text-sm'>Delhi, India</p>
            </span>
            <span className='bg-background rounded-lg text-white text-sm p-4'>
              2017 - 18
            </span>
          </article>

          <article className='flex items-center justify-between w-full'>
            <span className='flex flex-col'>
              <h2 className='text-white text-3xl font-bold'>Graduation</h2>
              <p className='text-grey text-lg'>Bachelor of fine Arts</p>
              <p className='text-grey text-sm'>IGNOU Delhi, India</p>
            </span>
            <span className='bg-background rounded-lg text-white text-sm p-4'>
              2017 - 21
            </span>
          </article>
        </section>

        <ul className='flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10'>
          <li className='text-white text-xl font-bold border-r pr-4'>
            Editing Tools
          </li>
          <li className='flex items-center bg-[#000155] rounded-lg font-bold text-[#a0a0f9] text-xl px-4 py-2'>
            Ae
          </li>
          <li className='flex items-center bg-[#02035e] rounded-lg font-bold text-[#9997f9] text-xl px-4 py-2'>
            Pr
          </li>
        </ul>

        <ul className='flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10'>
          <li className='text-white text-xl font-bold border-r pr-4'>
            Languages
          </li>
          <li className='text-4xl'>🇧🇴</li>
          <li className='text-4xl'>🇬🇧</li>
          <li className='text-4xl'>🇺🇸</li>
        </ul>
      </main>
    </div>
  );
}
