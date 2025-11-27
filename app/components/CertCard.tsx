'use client';

import { useState } from 'react';
import Button from './Button';

interface CertCardProps {
  title: string;
  issued_by?: string;
  date_issued?: string;
  image?: string;
}

export default function CertCard({ title, issued_by, date_issued, image }: CertCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6">
        
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
        )}

        <h2 className="text-2xl font-semibold text-[var(--noel-teal)] text-center mb-2">
          {title}
        </h2>

        {issued_by && (
          <p className="text-gray-600 dark:text-gray-300 mb-1 text-center">
            Issued by: {issued_by}
          </p>
        )}

        {date_issued && (
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">
            Date Issued: {date_issued}
          </p>
        )}

        <Button label="View Certificate" onClick={() => setIsOpen(true)} />
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full p-6 relative transform transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-bold text-xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
          )}

        </div>
      </div>
    </>
  );
}
