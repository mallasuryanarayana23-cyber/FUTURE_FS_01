import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // TODO: Replace with your Web3Forms Access Key
          access_key: '0121e1c0-8d4a-4c0d-9dd0-714e959676cc',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyanGlow mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FiMail />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Email Me</p>
                <a href="mailto:mallasurya189489@gmail.com" className="text-xl font-semibold hover:text-primary transition-colors">mallasurya189489@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-cyanGlow/10 flex items-center justify-center text-cyanGlow text-2xl group-hover:bg-cyanGlow group-hover:text-white transition-all duration-300">
                <FiPhone />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Phone</p>
                <a href="tel:8142027323" className="text-xl font-semibold hover:text-cyanGlow transition-colors">8142027323</a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <FiMapPin />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Location</p>
                <p className="text-xl font-semibold text-gray-300">India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder-gray-600"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <FiCheckCircle />
                  <p className="text-sm">Message sent successfully!</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <FiAlertCircle />
                  <p className="text-sm">Something went wrong. Please try again.</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="group w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-3 mt-4 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} 
                  {status !== 'submitting' && <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

