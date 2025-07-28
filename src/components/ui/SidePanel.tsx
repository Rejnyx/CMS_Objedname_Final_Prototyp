import React, { type ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  actions?: ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose, children, title, actions }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const backdropVariants = {
    visible: { opacity: 0.75 },
    hidden: { opacity: 0 },
  };

  const panelVariants = {
    visible: { x: 0 },
    hidden: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
          ></motion.div>

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full bg-white w-full max-w-2xl shadow-2xl flex flex-col z-50"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <header className="p-6 border-b border-neutral-200 flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
              <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900">
                <X size={24} />
              </button>
            </header>
            <main className="flex-1 overflow-y-auto">{children}</main>
            {actions && (
              <footer className="p-6 border-t border-neutral-200 flex justify-end items-center flex-shrink-0 gap-4">
                {actions}
              </footer>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidePanel;
