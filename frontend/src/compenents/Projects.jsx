import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Personnel',
      desc: 'Un site web personnel codé en React + Tailwind avec backend Node/Express.',
    },
    {
      title: 'Projet CI/CD',
      desc: 'Pipeline GitHub Actions pour tests et déploiement automatique sur Railway.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-pink-50 text-center px-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Projets</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-pink-600">{proj.title}</h3>
            <p className="text-sm mt-2 text-gray-700">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
