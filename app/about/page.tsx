import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-5">
          <h1 className="text-4xl font-bold text-indigo-700">About Me</h1>
        </header>

        <div className='flex justify-center mb-12'>
          <a
            href="/Amanda_Hotchkiss_Resume.pdf"
            download="Amanda_Hotchkiss_Resume.pdf"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition w-fit"
          >
            Download My Resume
          </a>
        </div>

        {/* First Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/kayaking.jpg"
              alt="Amanda Hotchkiss & her father kayaking"
              width={500}
              height={500}
              className="rounded-lg shadow object-cover max-h-[500px] md:max-w-[400px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hi! I am Amanda Hotchkiss.</h2>
            <p className="text-gray-700 mb-4">
              I am a front-end developer based in Knoxville, TN with a passion for collaboration and innovation. I currently work at Accenture where I actively participate in the Tech Master program. I love this program because it encourages Accenture employees to learn about all sorts of tech and problem solve in brilliant and innovative ways! In my free time, I love to code and go kayaking when I can (picture of my dad and I kayaking to left).
            </p>
          </div>
        </section>

        {/* Second Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Story</h2>
            <p className="text-gray-700 mb-4">
              I was first introduced to code while working at Accenture. A Tech Master on our team would build <a className="text-indigo-600 underline" href="https://www.google.com/search?q=GUI" target="_blank" rel="noopener noreferrer">GUIs</a> for the rest of the team to use and I found it absolutely fascinating! I eventually decided that I had to learn myself and asked him what languages he thought I should learn. This led me to begin learning <a className="text-indigo-600 underline" href="https://docs.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office" target="_blank" rel="noopener noreferrer">VBA</a> to assist my management team with their reports. After that, I began researching languages and specialties, and was drawn to web development. I began learning Python 3 which I was certified in by <a className="text-indigo-600 underline" href="https://www.codecademy.com/learn" target="_blank" rel="noopener noreferrer">Codecademy</a> in November 2020, and later found <a className="text-indigo-600 underline" href="https://shecodes.io" target="_blank" rel="noopener noreferrer">SheCodes</a> which has taught me so much! I&apos;ve learned HTML, CSS, and JavaScript, and learned about some great tools to make my webpages look great and make coding a bit easier. I have received the SheCodes Basic and SheCodes Pro certifications, and am currently working on getting the SheCodes Responsive certification. I&apos;m so excited to continue my journey and add more to my list of certifications and <a className="text-indigo-600 underline" href="/projects">works</a>.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/coding-selfie.jpg"
              alt="Amanda Hotchkiss & puppy, Jojo"
              width={400}
              height={400}
              className="rounded-lg shadow object-cover w-auto h-auto max-w-[300px] md:max-w-[400px]"
            />
          </div>
        </section>

        {/* Third Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="flex justify-center">
            <video
              src="/videos/beach.mp4"
              controls
              muted
              autoPlay
              loop
              className="rounded-lg shadow max-w-[300px] md:max-w-[400px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Fun Facts</h2>
            <p className="text-gray-700 dark:text-black mb-4">
              I am originally from California where I loved to go to the beach. Carmel has to be my favorite place to visit for the beach and brunch. San Francisco was another favorite of mine. There was a great crepe shop on Pier 39 that you could enjoy before going to see the sea lions or the view of Alcatraz.
              <br /><br />
              I got my first job at an amusement park called California&apos;s Great America. I began working there in the Games department (most of the games I worked in are now gone 😢). I eventually was hired as the HR Area Manager of Training and Development where I assisted with interviews, onboarding, and creating orientations that would engage new associates. I met so many great people at this job ❤ (I also learned a lot of great tricks that I can use when playing games at other parks. 😋)
            </p>
          </div>
        </section>

        <div className="text-center mb-12">
          <a href="#top" className="text-indigo-600 underline">Return to top of page</a>
        </div>
      </main>
    </>
  );
}
