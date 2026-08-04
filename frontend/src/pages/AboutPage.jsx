import React from 'react';
import AboutConference from '../components/AboutConference';
import AboutDepartment from '../components/AboutDepartment';
import AboutCIT from '../components/AboutCIT';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <AboutConference />
      <AboutDepartment />
      <AboutCIT />
    </div>
  );
};

export default AboutPage;
