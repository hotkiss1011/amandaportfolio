import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  appLink: string;
  githubLink: string;
  reverse?: boolean;
};

export default function ProjectCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  appLink,
  githubLink,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div
      className={`flex gap-8 mb-12 items-center ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="rounded-lg shadow object-cover w-auto h-auto max-w-[300px] md:max-w-[400px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <h3 className="text-xl mb-4">{subtitle}</h3>
        <div className="flex space-x-4">
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
