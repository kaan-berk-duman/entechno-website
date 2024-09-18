"use client";
import Image from 'next/image';
import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpeg';

const teamMembers = [
  {
    name: 'M.Murat Yanık',
    role: 'CEO',
    image: team1,
    linkedin: 'https://www.linkedin.com/in/m-murat-yanık-45591261/',
  },
  {
    name: 'Yiğit Yanık',
    role: 'Co-Founder',
    image: team2,
    linkedin: 'https://www.linkedin.com/in/ömer-yiğit-yanık-16551a218/',
  },
  {
    name: 'Ahmed Furkan Nazlıgül',
    role: 'Software and Network Director',
    image: team3,
    linkedin: 'https://www.linkedin.com/in/ahmed-furkan-nazligul/',
  },
];

export const Lead = () => {
  return (
    <section className="font-sans py-6 dark:bg-gray-100 dark:text-gray-800 relative overflow-hidden">
  {/* Background light effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-transparent to-transparent opacity-40 pointer-events-none z-0"></div>

  <div className="relative z-10 lg:max-w-5xl max-w-3xl mx-auto">
  <div className="text-center">
                <h1 className="font-bold text-4xl mb-4">Takım</h1>
                <h1>Genç ve Dinamik Kadro</h1>
            </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white border rounded-lg overflow-hidden">
          <Image
            alt={member.name}
            src={member.image}
            className="w-full h-80 object-cover object-top"
            width={400}
            height={400}
          />
          <div className="p-4">
            <h4 className="text-gray-800 text-base font-bold">{member.name}</h4>
            <p className="text-gray-800 text-xs mt-1">{member.role}</p>

            <div className="space-x-4 mt-4">
              <a
                rel="noopener noreferrer"
                href={member.linkedin}
                title="LinkedIn"
                className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-[#0077b5] hover:bg-[#0055b5]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};
