// src/pages/organizer/EventsList/EventList.jsx

import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// CORRECCIÓN: Esta es la ruta y extensión correctas
import imgConferencia from '../../../assets/images/event5.jpg';
import imgFestival    from '../../../assets/images/event6.jpeg';
import imgWorkshop    from '../../../assets/images/event6.jpeg'; // o la que quieras

// Importa los íconos de React Icons
import { IoSearch, IoTimeOutline, IoLocationOutline } from 'react-icons/io5';


export default function EventList() {
  return (
    // Usamos un "fragment" <> para envolver la página
    <>
      {/* 1. TU NAVBAR REUTILIZADO */}
      <Navbar />

      {/* El contenido principal de tu página */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            Próximos Eventos
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Descubre los eventos más emocionantes y únete a experiencias inolvidables
          </p>
        </div>

        {/* --- Barra de Búsqueda --- */}
        <div className="mt-12 max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {/* Icono de React Icons */}
              <IoSearch className="text-gray-400" size={20} />
            </div>
            <input
              className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition"
              placeholder="Buscar eventos..."
              type="search"
            />
          </div>
        </div>

        {/* --- Grid de Eventos --- */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* --- Event Card 1 --- */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="relative">
              <img alt="Conferencia de Tecnología" className="w-full h-48 object-cover" src={imgConferencia} />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">14 de marzo de 2024</span>
                <span className="bg-blue-600/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Tecnología</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white">Conferencia de Tecnología 2024</h3>
              <div className="mt-4 space-y-3 text-gray-400 text-sm">
                <p className="flex items-center">
                  <IoTimeOutline className="mr-2" /> 09:00
                </p>
                <p className="flex items-start">
                  <IoLocationOutline className="mr-2 mt-0.5" /> Centro de Convenciones, Ciudad de México
                </p>
                <p className="flex-grow text-gray-500">Las últimas tendencias en tecnología y desarrollo web.</p>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-2xl font-bold text-white">Gratis</p>
                <button className="mt-4 w-full bg-gray-100 text-gray-900 hover:bg-gray-200 py-2.5 rounded-lg font-medium transition-colors">Ver Detalles</button>
              </div>
            </div>
          </div>

          {/* --- Event Card 2 --- */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="relative">
              <img alt="Festival de Música" className="w-full h-48 object-cover" src={imgFestival} />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">21 de marzo de 2024</span>
                <span className="bg-purple-600/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Música</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white">Festival de Música Indie</h3>
              <div className="mt-4 space-y-3 text-gray-400 text-sm">
                <p className="flex items-center">
                  <IoTimeOutline className="mr-2" /> 18:00
                </p>
                <p className="flex items-start">
                  <IoLocationOutline className="mr-2 mt-0.5" /> Parque Simón Bolívar, Bogotá
                </p>
                <p className="flex-grow text-gray-500">Una noche llena de música indie y alternativa.</p>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-2xl font-bold text-white">$30</p>
                <button className="mt-4 w-full bg-gray-100 text-gray-900 hover:bg-gray-200 py-2.5 rounded-lg font-medium transition-colors">Ver Detalles</button>
              </div>
            </div>
          </div>

          {/* --- Event Card 3 --- */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="relative">
              <img alt="Workshop de Diseño" className="w-full h-48 object-cover" src={imgWorkshop} />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">27 de marzo de 2024</span>
                <span className="bg-red-600/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Diseño</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white">Workshop de Diseño UX/UI</h3>
              <div className="mt-4 space-y-3 text-gray-400 text-sm">
                <p className="flex items-center">
                  <IoTimeOutline className="mr-2" /> 10:00
                </p>
                <p className="flex items-start">
                  <IoLocationOutline className="mr-2 mt-0.5" /> Hub de Innovación, Buenos Aires
                </p>
                <p className="flex-grow text-gray-500">Aprende las mejores prácticas de diseño de experiencia de usuario.</p>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-2xl font-bold text-white">$180</p>
                <button className="mt-4 w-full bg-gray-100 text-gray-900 hover:bg-gray-200 py-2.5 rounded-lg font-medium transition-colors">Ver Detalles</button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 3. TU FOOTER REUTILIZADO */}
      <Footer />
    </>
  );
}