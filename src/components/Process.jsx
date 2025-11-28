import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, HardDrive, Microscope, FileText } from 'lucide-react';

const steps = [
    {
        icon: <ClipboardCheck className="w-8 h-8" />,
        title: '1. Diagnóstico',
        description: 'Avaliação inicial do dispositivo ou incidente para determinar a viabilidade e estratégia.'
    },
    {
        icon: <HardDrive className="w-8 h-8" />,
        title: '2. Coleta',
        description: 'Aquisição forense dos dados garantindo a integridade e preservação da prova (Cadeia de Custódia).'
    },
    {
        icon: <Microscope className="w-8 h-8" />,
        title: '3. Análise',
        description: 'Exame minucioso dos dados utilizando softwares forenses de ponta para extrair evidências.'
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: '4. Laudo',
        description: 'Entrega de relatório técnico detalhado, conclusivo e pronto para uso judicial.'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-20 bg-primary relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-light/30 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como Trabalhamos</h2>
                        <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
                        <p className="text-text-secondary text-lg max-w-md">
                            Um processo rigoroso e transparente, desenhado para garantir a máxima segurança jurídica e técnica.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <button className="px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary-dark transition-all duration-300 rounded font-medium">
                            Ver Metodologia Completa
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-light -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 bg-primary border border-white/5 p-6 rounded-lg hover:border-secondary/30 transition-colors group"
                            >
                                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-primary group-hover:border-secondary transition-colors relative">
                                    <div className="text-secondary group-hover:text-white transition-colors">
                                        {step.icon}
                                    </div>
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-primary-dark font-bold rounded-full flex items-center justify-center text-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white text-center mb-3">{step.title.split('. ')[1]}</h3>
                                <p className="text-text-secondary text-sm text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
