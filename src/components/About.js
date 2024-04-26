import React from 'react';

const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" name="true" /> {/* Updated name attribute */}
      <p>{about}</p>
    </aside>
  );
};

export default About;
