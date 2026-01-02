import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-primary-dark pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <ShieldCheck className="w-8 h-8 text-secondary" />
                            <span className="text-2xl font-bold text-white tracking-wider">
                                FACTUM <span className="text-secondary">DIGITAL</span>
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'Serviços', href: '#services' },
                                { name: 'Operação', href: '#process' },
                                { name: 'Contato', href: '#contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-text-dim hover:text-secondary text-sm transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Serviços</h4>
                        <ul className="space-y-3">
                            {['Perícia Digital', 'Laudos Técnicos'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-dim hover:text-secondary text-sm transition-colors">
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
                            <li className="flex items-center space-x-3 text-text-dim text-sm">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>contato@factumdigital.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-dim">
                    <p>&copy; 2024 Factum Análise Digital. Todos os direitos reservados.</p>
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
