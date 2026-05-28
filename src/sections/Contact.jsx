import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiInfo } from 'react-icons/fi';
import { sendContactMessage } from '../services/contactService';
import Toast from '../components/Toast';
import MagneticButton from '../components/MagneticButton';
import { fadeInUp } from '../animations/variants';

const InputField = ({ id, label, type = 'text', value, onChange, required = true, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 w-full mb-5">
      <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-widest text-zinc-450">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-zinc-900 transition-colors text-white text-xs font-semibold select-none"
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting'
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (formErrors[e.target.id]) {
      setFormErrors({ ...formErrors, [e.target.id]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('submitting');
    
    const result = await sendContactMessage(formData);
    
    setStatus('idle');
    if (result.success) {
      setToast({
        show: true,
        message: result.message,
        type: 'success'
      });
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setToast({
        show: true,
        message: result.message,
        type: 'error'
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Availability Pulse Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Available for Internships & Projects
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 font-display">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Have an open requirement, project collaboration, or simply want to chat coding? Drop a line directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context Card list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-4"
          >
            <div className="glass-card p-5 rounded-xl flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary text-lg">
                <FiMail />
              </div>
              <div>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Email Direct</p>
                <a href="mailto:mallasurya189489@gmail.com" className="text-xs md:text-sm font-bold text-white hover:text-primary transition-colors">
                  mallasurya189489@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-5 rounded-xl flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary text-lg">
                <FiPhone />
              </div>
              <div>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Phone</p>
                <a href="tel:8142027323" className="text-xs md:text-sm font-bold text-white hover:text-primary transition-colors">
                  +91 8142027323
                </a>
              </div>
            </div>

            <div className="glass-card p-5 rounded-xl flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary text-lg">
                <FiMapPin />
              </div>
              <div>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-xs md:text-sm font-bold text-zinc-300">Andhra Pradesh, India</p>
              </div>
            </div>

            {/* Note details */}
            <div className="p-4 bg-zinc-900/10 border border-zinc-850 rounded-xl flex gap-3 text-xs text-zinc-500 leading-relaxed font-semibold">
              <FiInfo className="text-primary text-lg shrink-0 mt-0.5" />
              <p>
                Form submissions are recorded securely in a MongoDB backend pipeline and forward instant notifications via Nodemailer SMTP.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit} 
              className="glass-panel p-6 md:p-8 rounded-xl flex flex-col relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                  <InputField 
                    id="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="text-[10px] text-rose-400 font-semibold mb-3 ml-2 -mt-3">{formErrors.name}</p>}
                </div>
                <div>
                  <InputField 
                    id="email"
                    label="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && <p className="text-[10px] text-rose-400 font-semibold mb-3 ml-2 -mt-3">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <InputField 
                  id="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration Request"
                />
                {formErrors.subject && <p className="text-[10px] text-rose-400 font-semibold mb-3 ml-2 -mt-3">{formErrors.subject}</p>}
              </div>

              <div className="flex flex-col gap-2 w-full mb-5">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-zinc-450">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message details..."
                  className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-zinc-900 transition-colors text-white text-xs font-semibold select-none resize-none placeholder:text-zinc-650"
                />
                {formErrors.message && <p className="text-[10px] text-rose-400 font-semibold mt-1 ml-2">{formErrors.message}</p>}
              </div>

              {/* Submission button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-primary hover:bg-primary/95 text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending Message...' : 'Send Message'} 
                {status !== 'submitting' && <FiSend className="text-xs" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating success/error Toast component */}
      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  );
};

export default Contact;
