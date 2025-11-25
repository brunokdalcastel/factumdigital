import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-light via-primary to-primary-dark"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1558494949-efc5e60c94ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        <span className="text-secondary text-xs font-medium uppercase tracking-widest">Tecnologia Forense Avançada</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        A Verdade Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-500">
                            Revelada
                        </span>
                    </h1>

                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Especialistas em recuperação de dados, perícia judicial e investigação de fraudes corporativas.
                        Transformamos bytes em evidências irrefutáveis.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <button className="group relative px-8 py-4 bg-secondary text-primary-dark font-bold rounded overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(100,255,218,0.5)]">
                            <span className="relative z-10 flex items-center">
                                Solicitar Análise
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button className="px-8 py-4 border border-text-secondary text-text-primary font-medium rounded hover:bg-white/5 transition-colors flex items-center">
                            <Search className="mr-2 w-5 h-5" />
                            Conheça Nossos Serviços
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-text-secondary text-xs uppercase tracking-widest mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
