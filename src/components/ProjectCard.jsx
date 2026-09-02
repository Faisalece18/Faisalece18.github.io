import React, { useState } from 'react';
import '../styles/projectcard.css';

const ProjectCard = ({ title, description, image, buttonLabel, buttonLink }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const previewLength = 140;

  const trimmedDescription = description.length > previewLength && !isReadMoreOpen
    ? `${description.slice(0, previewLength).trim()}...`
    : description;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content-container">
        <div>
          <h4 className="project-card-title">{title}</h4>
          <p className="project-card-description">
            {trimmedDescription}
          </p>
          {description.length > previewLength && (
            <button
              type="button"
              className="project-card-read-more"
              onClick={() => setIsReadMoreOpen((prev) => !prev)}
              aria-expanded={isReadMoreOpen}
            >
              {isReadMoreOpen ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="project-card-actions">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="project-card-button">{buttonLabel}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
