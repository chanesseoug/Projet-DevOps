import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Déconnexion réussie ');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/portfolio" className="text-xl font-bold text-pink-600">Chanesse</Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
          <li><a href="#about" className="hover:text-pink-500">À propos</a></li>
          <li><a href="#skills" className="hover:text-pink-500">Compétences</a></li>
          <li><a href="#experience" className="hover:text-pink-500">Expérience</a></li>
          <li><a href="#projects" className="hover:text-pink-500">Projets</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>

          {!token ? (
            <>
              {location.pathname !== "/login" && (
                <li>
                  <Link to="/login" className="text-pink-600 hover:underline">Se connecter</Link>
                </li>
              )}
              {location.pathname !== "/signup" && (
                <li>
                  <Link to="/signup" className="text-pink-600 hover:underline">S'inscrire</Link>
                </li>
              )}
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline"
              >
                Déconnexion
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
