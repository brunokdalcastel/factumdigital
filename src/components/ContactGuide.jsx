import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

const ContactGuide = () => {
    return (
        <section id="request-guide" className="py-20 bg-primary-dark relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como Solicitar uma Análise</h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
                    <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                        Para garantir agilidade e precisão no seu atendimento, siga as orientações abaixo ao entrar em contato.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Instructions Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-primary-light p-8 rounded-lg border border-white/5 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <ShieldAlert className="w-6 h-6 text-gold mr-3" />
                                Informações Necessárias
                            </h3>
                            <p className="text-text-secondary mb-6">
                                Ao enviar seu e-mail para <span className="text-white font-medium">contato@factumdigital.com.br</span>, por favor inclua:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Nome completo ou Razão Social',
                                    'Tipo de dispositivo ou arquivo (Celular, HD, Servidor, Documento em Nuvem, etc.)',
                                    'Breve descrição do incidente ou necessidade',
                                    'Urgência da demanda (Baixa, Média, Alta)'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-text-dim text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* CTA Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Pronto para iniciar?
                        </h3>
                        <p className="text-text-secondary mb-8 leading-relaxed">
                            Nossa equipe técnica analisará sua solicitação e retornará com os próximos passos em até 24 horas úteis.
                        </p>

                        <a
                            href="mailto:contato@factumdigital.com.br?subject=Solicitação de Análise - [Seu Nome/Empresa]"
                            className="group relative px-8 py-4 bg-gold text-primary-dark font-bold rounded overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(252,211,77,0.4)] w-full md:w-auto flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center">
                                <Mail className="mr-2 w-5 h-5" />
                                Enviar E-mail Agora
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <p className="mt-4 text-xs text-text-dim">
                            Ao clicar, seu cliente de e-mail padrão será aberto.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactGuide;
