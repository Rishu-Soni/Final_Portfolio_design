"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 flex justify-center relative z-10">
                <div className="w-full max-w-3xl glass-panel p-10 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Decorative Glows */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 blur-[50px]" />

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">Ready to <span className="text-primary">Launch?</span></h2>
                    <p className="text-center text-gray-300 mb-12 text-lg">Send a signal into the void. I&apos;ll pick it up.</p>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group relative">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="peer w-full bg-black/20 border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder-transparent rounded-t-lg"
                                    placeholder="Name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 -top-3.5 text-xs text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="peer w-full bg-black/20 border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder-transparent rounded-t-lg"
                                    placeholder="Email"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 -top-3.5 text-xs text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none"
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        <div className="group relative">
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="peer w-full bg-black/20 border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder-transparent rounded-t-lg resize-none"
                                placeholder="Message"
                                required
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-4 -top-3.5 text-xs text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none"
                            >
                                Message
                            </label>
                        </div>

                        <div className="pt-6 flex justify-center">
                            <button
                                type="submit"
                                className="px-12 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_0_30px_rgba(112,0,255,0.5)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm"
                            >
                                Transmit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
