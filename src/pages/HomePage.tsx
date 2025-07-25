import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ValuesSection from '../components/home/ValuesSection';
import PracticeAreasSection from '../components/home/PracticeAreasSection';
import TeamSection from '../components/home/TeamSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import InstagramFeedSection from '../components/home/InstagramFeedSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <PracticeAreasSection />
      <TeamSection />
      <InstagramFeedSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default HomePage;