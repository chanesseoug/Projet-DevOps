import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Contact</h2>
      <p className="text-lg text-gray-700 mb-4">📧 ouguenoune.chanesse@ecole-hexagone.com</p>
      <a
        href="/CV%20ouguenoune_chanesse.pdf"
        className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
        download
      >
        Télécharger mon CV
      </a>
    </section>
  );
};

export default Contact;
