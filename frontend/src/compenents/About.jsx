import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">À propos de moi</h2>
        <p className="text-lg leading-relaxed text-justify">
          Je suis <span className="font-semibold text-pink-600">Chanesse Ouguenoune</span>, une étudiante dynamique en troisième année de Bachelor à l’École Supérieure Hexagone, spécialisée en informatique avec une première formation en systèmes d’information.
          Après l’obtention de ma licence, j’ai fait le choix de poursuivre mon parcours en alternance, dans le but de consolider mes acquis, me confronter au monde professionnel et me préparer efficacement aux défis du métier.
          Je suis actuellement à la recherche d’une entreprise pour <span className="font-medium">juillet 2025</span> dans la région du <span className="font-medium">Puy-de-Dôme</span>.
          <br /><br />
          Ce qui me caractérise, c’est ma curiosité naturelle et ma soif d’apprentissage.
          Je suis passionnée par l’univers du numérique au sens large : que ce soit le <span className="font-medium">développement web</span> (front-end, back-end), les <span className="font-medium">réseaux informatiques</span>, ou encore des domaines plus transversaux comme le <span className="font-medium">marketing digital</span>, la <span className="font-medium">communication</span> ou l’<span className="font-medium">administration</span>.
          Je trouve de l’intérêt dans tout ce qui touche à la création, l’organisation, la stratégie et l’innovation.
          <br /><br />
          <span className="font-medium">Rigoureuse</span>, impliquée, et dotée d’un bon esprit d’équipe, je cherche à m’épanouir au sein d’un environnement stimulant, où je pourrai non seulement contribuer activement, mais aussi évoluer et affiner mes compétences jour après jour.
        </p>
      </div>
    </section>
  );
};

export default About;
