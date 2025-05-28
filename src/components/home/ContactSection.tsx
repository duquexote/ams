import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Fale Conosco"
            subtitle="Está com dúvidas ou precisa de uma orientação jurídica especializada? Nossa equipe está pronta para ajudar."
            center={true}
          />

          <div className="p-8 bg-white rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;