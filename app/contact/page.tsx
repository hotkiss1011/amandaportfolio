export default function ContactPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-5">
          <h1 className="text-4xl font-bold text-indigo-700">Amanda Hotchkiss</h1>
          <h2 className="text-xl mt-2 text-gray-600">A Front-End Developer Based in Knoxville, TN, USA</h2>
        </header>
        
        <div className="flex justify-center mb-12">
          <a href="mailto:..." className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition">
            Send Me a Message
          </a>
        </div>

        <section className="text-lg text-gray-700 leading-relaxed mb-12">
          <h3 className="text-2xl font-semibold mb-4">Hello!</h3>
          <p className="mb-4">
            Thank you for visiting my page! Please feel free to contact me at{' '}
            <a
              href="mailto:amanda.hotchkiss1011@gmail.com"
              className="text-indigo-600 underline"
            >
              amanda.hotchkiss1011@gmail.com
            </a>{' '}
            or on{' '}
            <a
              href="https://www.linkedin.com/in/amanda-hotchkiss-1a4056134/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              LinkedIn
            </a>{' '}
            to let me know what you think!
          </p>
          <p className="mb-4">
            I am also on Instagram (
            <a
              href="https://www.instagram.com/hotchkiss_coding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              @hotchkiss_coding
            </a>
            ), and most of my work is on{' '}
            <a
              href="https://github.com/hotkiss1011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            I look forward to hearing from you and appreciate any tips or suggestions you may have.
            <br />
            Thank you! 😊
          </p>
        </section>
      </main>
    </>
  );
}
