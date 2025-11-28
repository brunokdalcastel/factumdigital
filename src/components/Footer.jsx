import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <ShieldCheck className="w-8 h-8 text-secondary" />
                            <span className="text-2xl font-bold text-white tracking-wider">
                                VERITAS<span className="text-secondary">ERUM</span>
                            </span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            Líderes em computação forense e recuperação de dados.
                            Compromisso inabalável com a verdade e a segurança da informação.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-text-secondary hover:text-secondary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-text-secondary hover:text-secondary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {['Home', 'Serviços', 'Sobre Nós', 'Operação', 'Blog', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-secondary hover:text-secondary text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Serviços</h4>
                        <ul className="space-y-3">
                            {['Recuperação de Dados', 'Perícia Digital', 'Investigação de Fraudes'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-secondary hover:text-secondary text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-text-secondary text-sm">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>Endereço a definir - São Paulo, SP</span>
                            </li>
                            <li className="flex items-center space-x-3 text-text-secondary text-sm">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center space-x-3 text-text-secondary text-sm">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>contato@email.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
                    <p>&copy; 2024 Veritaserum Forensics. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
