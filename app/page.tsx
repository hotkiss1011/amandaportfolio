import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Amanda Hotchkiss</h1>
          <p className="text-lg text-indigo-600 font-medium mb-2">
            Building Interactive Web Apps with React & Next.js
          </p>
          <h2 className="text-xl text-gray-600">
            Based in Knoxville, TN, USA
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <Image
              src="/images/jojo-and-me.jpg"
              alt="Amanda Hotchkiss & puppy, Jojo"
              width={400}
              height={400}
              className="rounded-lg shadow max-h-[300px] md:max-w-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400 mb-4">
              A front-end developer with prior leadership experience,
              seeking to leverage development skills with emphasis on
              collaboration, communication, passion, and innovation.
            </p>
            <a href="/about" className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition" title="Learn more about me">Who Am I?</a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <p className="text-gray-400 mb-4">
              I love the process of turning ideas into interactive, functional webpages and apps. Front-end development fascinates me because it combines creativity with problem-solving. Here are some of the projects I&apos;ve enjoyed building — I&apos;m excited to keep learning and growing!
            </p>
            <a href="/projects" className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition" title="Full list of my projects">See My Projects</a>
          </div>
          <div>
            <Image
              src="/images/woman-coding.jpg"
              alt="Woman Coding"
              width={500}
              height={500}
              className="rounded-lg shadow"
            />
          </div>
        </section>
      </main>
    </>
  );
}
