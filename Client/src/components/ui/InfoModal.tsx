import React, { useState, useEffect, useRef } from 'react';
import IshanIcon from "../icons"

interface ModalProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const InfoModal: React.FC<ModalProps> = ({ children, title, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <button 
        type="button" 
        onClick={toggleModal}
        className="text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
        aria-label="Open information modal"
      >
        <IshanIcon variant="LucideInfo" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            ref={modalRef}
            className={`bg-white rounded-lg shadow-xl max-w-lg w-full p-6 m-4 transform transition-transform duration-300 ${className}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1"
                aria-label="Close modal"
              >
                <IshanIcon variant="X" />
              </button>
            </div>

            {/* Content */}
            <div className="text-gray-700 mb-6">
              {children}
            </div>

            {/* Footer with second close button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="bg-red-400 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;
