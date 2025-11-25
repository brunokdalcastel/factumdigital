import React from 'react';
import { motion } from 'framer-motion';
import { Database, Scale, FileSearch, ShieldAlert, HardDrive, Lock } from 'lucide-react';

const services = [
    {
        icon: <Database className="w-10 h-10 text-secondary" />,
        title: 'Recuperação de Dados',
        description: 'Recuperação avançada em HDs, SSDs, servidores RAID e dispositivos móveis com laboratório limpo classe 100.'
    },
    {
        icon: <Scale className="w-10 h-10 text-secondary" />,
        title: 'Perícia Judicial',
        description: 'Assistência técnica em processos judiciais, elaboração de laudos e pareceres técnicos com validade jurídica.'
    },
    {
        icon: <FileSearch className="w-10 h-10 text-secondary" />,
        title: 'Investigação Corporativa',
        description: 'Detecção de fraudes, vazamento de informações e concorrência desleal através de análise forense digital.'
    },
    {
        icon: <ShieldAlert className="w-10 h-10 text-secondary" />,
        title: 'Compliance LGPD',
        description: 'Auditoria e adequação de sistemas para conformidade com a Lei Geral de Proteção de Dados.'
    },
    {
        icon: <HardDrive className="w-10 h-10 text-secondary" />,
        title: 'Análise de Malware',
        description: 'Engenharia reversa e análise comportamental de softwares maliciosos e ataques de ransomware.'
    },
    {
        icon: <Lock className="w-10 h-10 text-secondary" />,
        title: 'Cadeia de Custódia',
        description: 'Preservação rigorosa da integridade da prova digital desde a coleta até a apresentação em juízo.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-primary-light relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossas Especialidades</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                        Soluções completas em computação forense e segurança da informação para empresas e escritórios de advocacia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-primary p-8 rounded-lg border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] group"
                        >
                            <div className="mb-6 p-4 bg-primary-dark rounded-full w-fit group-hover:bg-secondary/10 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
