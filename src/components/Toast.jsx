import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

const Toast = ({ show, message, type = 'success', onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 5000); // auto-close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: '50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '0%' }}
          exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-6 right-6 z-[99999] max-w-sm w-full"
        >
          <div className="glass-panel rounded-2xl p-4 flex items-start gap-4 border border-white/10 shadow-[0_10px_30px_rgba(3,0,20,0.5)] overflow-hidden relative group">
            {/* Background Accent Gradients */}
            <div 
              className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-[30px] opacity-20 pointer-events-none`}
              style={{ backgroundColor: type === 'success' ? '#10b981' : '#ef4444' }}
            />
            
            {/* Top Indicator Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ backgroundColor: type === 'success' ? '#10b981' : '#ef4444' }}
            />

            {/* Icon */}
            <div className={`p-2 rounded-xl text-xl mt-0.5 ${type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
              {type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
            </div>

            {/* Message Body */}
            <div className="flex-1">
              <h4 className="font-bold text-sm text-white font-display">
                {type === 'success' ? 'Message Sent' : 'Delivery Error'}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed mt-1">{message}</p>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <FiX className="text-sm" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
