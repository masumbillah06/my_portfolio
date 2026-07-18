import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would be send to a backend. My future work
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-20 px-6 bg-[#0a0a0f]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        <span className="bg-linear-to-r from-[#6c63ff] to-[#a78bfa] bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <div className="w-16 h-1 bg-linear-to-r from-[#6c63ff] to-[#a78bfa] mx-auto mt-3 rounded-full" />
                    <p className="mt-4 text-[#9a9ab0] max-w-2xl mx-auto">
                        Have a project in mind? Let's work together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Let's build something amazing
                        </h3>
                        <p className="text-[#c4c4d4] leading-relaxed mb-6">
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[#9a9ab0]">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#6c63ff] border border-[#2a2a42]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>mbmasum06@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#9a9ab0]">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#6c63ff] border border-[#2a2a42]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#9a9ab0]">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#6c63ff] border border-[#2a2a42]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                                    </svg>
                                </div>
                                <span>Available for work</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#c4c4d4] mb-1.5">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a42] text-white placeholder-[#6a6a82] focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff] transition-all duration-300"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#c4c4d4] mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a42] text-white placeholder-[#6a6a82] focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff] transition-all duration-300"
                                    placeholder="masum@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#c4c4d4] mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a42] text-white placeholder-[#6a6a82] focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff] transition-all duration-300 resize-none"
                                    placeholder="Please Write Your Message Here..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-3 rounded-xl bg-linear-to-r from-[#6c63ff] to-[#7b73ff] text-white font-medium shadow-lg shadow-[#6c63ff]/30 hover:shadow-[#6c63ff]/50 hover:scale-[1.02] transition-all duration-300"
                            >
                                Send Message
                            </button>

                            {isSubmitted && (
                                <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

