"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        const text = `
    🚀 *New Portfolio Contact from the final_portfolio_2*
    -----------------------------
    👤 *Name:* ${formData.name}
    📧 *Email:* ${formData.email}
    -----------------------------
    *Message:* ${formData.message}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thanks for reaching out. I will get back to you soon.',
                    icon: 'success',
                    confirmButtonColor: '#00f0ff',
                    background: '#141423',
                    color: '#fff'
                });

                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Telegram API failed');
            }

        } catch (error) {
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#7000ff',
                background: '#141423',
                color: '#fff'
            });
            console.error("Error sending message:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 flex justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl glass-panel p-8 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 relative overflow-hidden"
                    style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 2px 2px 6px rgba(255, 255, 255, 0.2), inset -2px -2px 6px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {/* Decorative Glows */}
                    <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

                    <div className="text-center mb-12 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight"
                        >
                            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">epic.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-gray-300 text-lg md:text-xl font-light"
                        >
                            Send a signal into the void. I'll pick it up.
                        </motion.p>
                    </div>

                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                    placeholder="Your Name"
                                    required
                                />
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                    placeholder="Your Email"
                                    required
                                />
                            </motion.div>
                        </div>

                        {/* Message Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="absolute top-4 left-0 pl-5 pointer-events-none">
                                <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] resize-none"
                                placeholder="Your Message"
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="pt-4 flex justify-center w-full"
                        >
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative shadow-lg"
                            >
                                <div className="absolute inset-0 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out group-hover:w-full z-0 opacity-80" />
                                <span className="relative z-10 text-lg">{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                                <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
