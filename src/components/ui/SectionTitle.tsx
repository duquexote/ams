import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  subtitleAlign?: 'left' | 'center' | 'inherit';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  subtitleAlign = 'inherit',
  className = '',
}) => {
  const getSubtitleClass = () => {
    if (subtitleAlign === 'left') return 'section-subtitle !mx-0 text-left';
    if (subtitleAlign === 'center') return 'section-subtitle text-center';
    return `section-subtitle ${center ? '' : 'text-left !mx-0'}`;
  };

  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={getSubtitleClass()}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;