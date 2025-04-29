import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Formations & Expériences</h2>

      <div className="max-w-3xl mx-auto text-left space-y-8 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold text-pink-600">Développement Web - Projet CI/CD</h3>
          <p className="text-sm">2025 – Projet personnel (React, Express, PostgreSQL, GitHub Actions)</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-pink-600">Licence Informatique</h3>
          <p className="text-sm">Université de Béjaïa – 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
