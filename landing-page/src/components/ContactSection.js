import React, { useState } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import myPhoto from '../assets/profilephoto.png';

function ContactSection() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const isIconHovered = (icon) => icon === hoveredIcon;

  return (
    <section className="container">
      <hr className="contact-separator" />
      <div className="contact-wrapper">
        <div className="contact-image">
          <img src={myPhoto} alt="My Photo" className="my-photo" />
        </div>
        <div className="contact-icons">
          <ul className="contact-icons-grid">
            <li className="contact-icon-item">
              <a href="mailto:matanryngler@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`contact-icon ${isIconHovered(faEnvelope) ? 'hovered' : ''}`}
                  onMouseEnter={() => handleIconHover(faEnvelope)}
                  onMouseLeave={handleIconLeave}
                />
              </a>
            </li>
            <li className="contact-icon-item">
              <a href="https://www.linkedin.com/in/matanryngler">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`contact-icon ${isIconHovered(faLinkedin) ? 'hovered' : ''}`}
                  onMouseEnter={() => handleIconHover(faLinkedin)}
                  onMouseLeave={handleIconLeave}
                />
              </a>
            </li>
            <li className="contact-icon-item">
              <a href="https://twitter.com/matanryngler">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={`contact-icon ${isIconHovered(faTwitter) ? 'hovered' : ''}`}
                  onMouseEnter={() => handleIconHover(faTwitter)}
                  onMouseLeave={handleIconLeave}
                />
              </a>
            </li>
            <li className="contact-icon-item">
              <a href="https://github.com/matanryngler">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`contact-icon ${isIconHovered(faGithub) ? 'hovered' : ''}`}
                  onMouseEnter={() => handleIconHover(faGithub)}
                  onMouseLeave={handleIconLeave}
                />
              </a>
            </li>
            <li className="contact-icon-item">
              <a href="https://www.instagram.com/matan.ry">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={`contact-icon ${isIconHovered(faInstagram) ? 'hovered' : ''}`}
                  onMouseEnter={() => handleIconHover(faInstagram)}
                  onMouseLeave={handleIconLeave}
                />
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
