import React, { useEffect } from 'react';

const InstagramFeedSection: React.FC = () => {
  // Estilo CSS para remover elementos indesejados do widget Elfsight
  const elfsightStyles = `
    /* Remove o título "Follow us on Instagram" */
    .eui-widget-title.es-widget-title.eapps-instagram-feed-title {
      display: none !important;
    }

    /* Remove o link de atribuição "Free Instagram Feed widget" - múltiplos seletores para garantir */
    a[href*="elfsight.com/instagram-feed-instashow"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0 !important;
      width: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
    }
    
    /* Seletores mais específicos baseados no HTML fornecido */
    a[href*="elfsight.com"][target="_blank"][rel="noreferrer"] {
      display: none !important;
      visibility: hidden !important;
    }
    
    /* Remover o container pai se necessário */
    .eapps-instagram-feed-container a[href*="elfsight.com"],
    .eapps-widget a[href*="elfsight.com"],
    .eui-widget a[href*="elfsight.com"] {
      display: none !important;
      visibility: hidden !important;
    }
    
    /* Remover qualquer elemento com texto "Free Instagram Feed widget" */
    *:contains("Free Instagram Feed widget") {
      display: none !important;
    }
    
    /* Traduzir o botão "Load more" para "Carregar mais" */
    .eapps-instagram-feed-posts-grid-load-more-text {
      font-family: inherit !important;
    }
  `;
  // This effect ensures the Elfsight script initializes when the component mounts
  // Função para adicionar regra CSS personalizada para pseudo-seletor :contains
  const addContainsPseudoSelector = () => {
    try {
      // Adiciona um script que vai procurar e remover elementos com o texto específico
      const script = document.createElement('script');
      script.textContent = `
        function removeElfsightBranding() {
          // Função para verificar se um elemento contém o texto específico
          function containsText(element, text) {
            if (element.innerText && element.innerText.includes(text)) {
              return true;
            }
            return false;
          }
          
          // Função para alterar o texto "Load more" para "Carregar mais"
          function changeLoadMoreText() {
            const loadMoreElements = document.querySelectorAll('.eapps-instagram-feed-posts-grid-load-more-text');
            loadMoreElements.forEach(element => {
              if (element.innerText && element.innerText.trim() === 'Load more') {
                element.innerText = 'Carregar mais';
              }
            });
          }
          
          // Procura por todos os links na página
          const allLinks = document.querySelectorAll('a');
          allLinks.forEach(link => {
            if (link.href && link.href.includes('elfsight.com')) {
              link.style.display = 'none';
              link.style.visibility = 'hidden';
              link.style.opacity = '0';
              link.style.height = '0';
              link.style.width = '0';
              link.style.overflow = 'hidden';
            }
            
            if (containsText(link, 'Free Instagram Feed')) {
              link.style.display = 'none';
              link.style.visibility = 'hidden';
            }
          });
          
          // Alterar o texto do botão "Load more"
          changeLoadMoreText();
          
          // Repetir a verificação para garantir que elementos dinâmicos sejam capturados
          setTimeout(() => {
            removeElfsightBranding();
            changeLoadMoreText();
          }, 2000);
        }
        
        // Executar inicialmente e depois de um tempo para garantir que pegue elementos carregados dinamicamente
        removeElfsightBranding();
        document.addEventListener('DOMContentLoaded', removeElfsightBranding);
        window.addEventListener('load', removeElfsightBranding);
      `;
      document.head.appendChild(script);
    } catch (error) {
      console.error('Erro ao adicionar script para remover branding:', error);
    }
  };
  
  useEffect(() => {
    // Executar a função para adicionar o script personalizado
    addContainsPseudoSelector();
    
    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    
    if (!existingScript) {
      // If not loaded, create and append the script
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If already loaded, we need to reinitialize the widgets
      // This is needed because Elfsight might not detect dynamically added widgets
      if (window.hasOwnProperty('elfsight')) {
        // @ts-ignore - Elfsight global object
        if (typeof window.elfsight?.reinstallWidgets === 'function') {
          // @ts-ignore
          window.elfsight.reinstallWidgets();
        }
      }
    }
    
    return () => {
      // No cleanup needed as we don't want to remove the script
      // when this component unmounts
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      {/* Aplicando estilos para remover elementos indesejados */}
      <style dangerouslySetInnerHTML={{ __html: elfsightStyles }} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acompanhe Nosso Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das novidades, atualizações jurídicas e conteúdos exclusivos.
          </p>
        </div>
        
        {/* Elfsight Instagram Feed Widget */}
        <div className="elfsight-app-bb6174cf-2a41-4804-bf3e-b7e7c816070a" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
