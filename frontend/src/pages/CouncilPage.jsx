import React from 'react';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import Committee from '../components/Committee';

const CouncilPage = () => {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <KeynoteSpeakers />
      <Committee />
    </div>
  );
};

export default CouncilPage;
