import React from 'react';
import { ScoringCriteria } from './footer/ScoringCriteria';
import { FooterLinks } from './footer/FooterLinks';

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-muted pt-8">
      <ScoringCriteria />
      <FooterLinks />
    </footer>
  );
};