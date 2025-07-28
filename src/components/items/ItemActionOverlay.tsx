import { AnimatePresence, motion } from 'framer-motion';
import { Trash2, Copy, Edit } from 'lucide-react';
import React from 'react';
import Button from '../ui/Button';

interface ItemActionOverlayProps {
  isVisible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const buttonContainerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.07,
    },
  },
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ItemActionOverlay: React.FC<ItemActionOverlayProps> = ({ isVisible, onClose, onEdit, onDelete, onDuplicate }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="absolute inset-0 bg-neutral-800/75 rounded-2xl flex justify-end items-center z-10 p-6"
        >
          <motion.div
            variants={buttonContainerVariants}
            className="flex items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div variants={buttonVariants}>
              <Button variant="danger" onClick={onDelete}>
                <Trash2 className="h-5 w-5 mr-2" />
                Smazat
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                onClick={onDuplicate}
                className="text-white focus:ring-blue-500"
                style={{ backgroundColor: '#4A90E2' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#407DC7'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4A90E2'}
              >
                <Copy className="h-5 w-5 mr-2" />
                Duplikovat
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                onClick={onEdit}
                className="text-white focus:ring-blue-500"
                style={{ backgroundColor: '#4A90E2' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#407DC7'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4A90E2'}
              >
                <Edit className="h-5 w-5 mr-2" />
                Upravit
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItemActionOverlay;
