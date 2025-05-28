import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and About */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="mt-4 text-neutral-300">
              Escritório especializado na defesa de profissionais da saúde e na atuação 
              estratégica em Direito Médico e da Saúde.
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-neutral-300 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-neutral-300 hover:text-white transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao" className="text-neutral-300 hover:text-white transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-neutral-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/areas-de-atuacao/direito-medico" className="text-neutral-300 hover:text-white transition-colors">
                  Direito Médico
                </Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/direito-da-saude" className="text-neutral-300 hover:text-white transition-colors">
                  Direito da Saúde
                </Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/defesa-processo-judicial" className="text-neutral-300 hover:text-white transition-colors">
                  Defesa em Processos Judiciais
                </Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao/processos-eticos" className="text-neutral-300 hover:text-white transition-colors">
                  Processos Ético-Profissionais
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-neutral-300 flex-shrink-0" />
                <span className="text-neutral-300">
                  Av. Exemplo, 1234, Sala 567<br />
                  Bairro, Cidade - Estado, 00000-000
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-neutral-300 flex-shrink-0" />
                <a href="tel:+5500000000000" className="text-neutral-300 hover:text-white transition-colors">
                  +55 (00) 00000-0000
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-neutral-300 flex-shrink-0" />
                <a href="mailto:contato@amsadvogados.com.br" className="text-neutral-300 hover:text-white transition-colors">
                  contato@amsadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-sm text-center border-t border-neutral-800">
        <div className="container">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} AMS Advogados. Todos os direitos reservados.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/politica-de-privacidade" className="text-neutral-400 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-neutral-700">|</span>
            <Link to="/termos-de-uso" className="text-neutral-400 hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;