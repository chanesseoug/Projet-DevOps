import React from 'react';
import profilePic from '../assets/photo.jpg';


const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-white text-center px-4 ">
            <div>
                <img
                    src={profilePic}
                    alt="Ouguenoune Chanesse"
                    className="mx-auto rounded-full w-48 h-48 object-cover border-4 border-pink-400 shadow-lg"
                />
                <h1 className="text-4xl font-bold text-pink-700 mt-6">Ouguenoune Chanesse</h1>
                <p className="text-xl mt-2 text-gray-700">
                Etudiante en troisième année de Bachelor d'informatique 
                </p>
                <a
                    href="#contact"
                    className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
                >
                    Me contacter
                </a>
            </div>
        </section>
    );
};

export default Hero;
