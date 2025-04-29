import React from 'react';

const Skills = () => {
  const skills = {
    "Développement Web": [
      "HTML / CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Prisma / Express.js"
    ],
    "Programmation & Outils": [
      "Git & GitHub",
      "VS Code",
      "MongoDB / PostgreSQL",
      "Docker (bases)"
    ],
    "Réseaux & Systèmes": [
      "Modèles OSI / TCP-IP",
      "Sécurité réseau (bases)",
      "Commandes Linux & administration système"
    ],
    "Marketing & Communication": [
      "Marketing digital (SEO / Réseaux sociaux)",
      "Création de contenu",
      "Canva / Notion"
    ],
    "Soft Skills": [
      "Autonomie",
      "Esprit d’équipe",
      "Capacité d’adaptation",
      "Curiosité & rigueur"
    ]
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-pink-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-12">Compétences</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-pink-500 mb-4">{category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
