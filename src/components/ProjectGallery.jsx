import { useState, useRef } from 'react';
import './ProjectGallery.css';

const ProjectGallery = ({ project }) => {
  const [viewMode, setViewMode] = useState('base');
  const [activeAsset, setActiveAsset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageRef = useRef(null);

  const assets = project.assets ?? [];
  const currentAsset = assets[activeAsset];
  const supportsWireframe = assets.some((asset) => Boolean(asset.wireframe));

  const hasMedia =
    (project.videos && project.videos.length > 0) ||
    project.gameplay ||
    project.youtubeId;

  if (!currentAsset) {
    return null;
  }

  const currentImage =
    viewMode === 'wireframe' && currentAsset.wireframe
      ? currentAsset.wireframe
      : currentAsset.base;

  const handleViewChange = (mode) => {
    if (mode === viewMode) {
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 200);
  };

  const handleAssetChange = (index) => {
    if (index === activeAsset) {
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveAsset(index);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="pgallery" id={`project-${project.id}`}>
      <div className="pgallery__header">
        <div className="pgallery__meta">
          <span className="pgallery__category">{project.category}</span>
          {project.tags?.map((tag) => (
            <span key={tag} className="pgallery__tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="pgallery__title">{project.title}</h3>
        {project.subtitle && <p className="pgallery__subtitle">{project.subtitle}</p>}
      </div>

      <div className="pgallery__body">
        <div className="pgallery__info">
          <p className="pgallery__description">{project.description}</p>

          {project.highlights && (
            <ul className="pgallery__highlights">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}

          {project.links && project.links.length > 0 && (
            <div className="pgallery__links-section">
              <label className="pgallery__label">Project Link</label>
              <div className="pgallery__links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pgallery__link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {supportsWireframe && (
            <div className="pgallery__toggle-section">
              <label className="pgallery__label">View Mode</label>
              <div className="pgallery__toggles">
                <button
                  className={`pgallery__toggle ${viewMode === 'base' ? 'active' : ''}`}
                  onClick={() => handleViewChange('base')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Base Color
                </button>
                <button
                  className={`pgallery__toggle ${viewMode === 'wireframe' ? 'active' : ''}`}
                  onClick={() => handleViewChange('wireframe')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="8.5" x2="22" y2="8.5" />
                    <line x1="2" y1="15.5" x2="22" y2="15.5" />
                  </svg>
                  Wireframe
                </button>
              </div>
            </div>
          )}

          {assets.length > 1 && (
            <div className="pgallery__selector-section">
              <label className="pgallery__label">
                {supportsWireframe ? '3D Model' : 'Screenshot'} ({activeAsset + 1}/{assets.length})
              </label>
              <div className="pgallery__chips">
                {assets.map((asset, index) => (
                  <button
                    key={asset.name}
                    className={`pgallery__chip ${activeAsset === index ? 'active' : ''}`}
                    onClick={() => handleAssetChange(index)}
                  >
                    {asset.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pgallery__display">
          <div className="pgallery__image-frame">
            <div className="pgallery__image-status">
              <span
                className={`pgallery__mode-indicator ${
                  supportsWireframe ? viewMode : 'preview'
                }`}
              >
                {supportsWireframe
                  ? viewMode === 'base'
                    ? 'Render View'
                    : 'Topology View'
                  : 'Web Preview'}
              </span>
              <span className="pgallery__asset-name">{currentAsset.name}</span>
            </div>
            <img
              ref={imageRef}
              src={currentImage}
              alt={`${project.title} - ${currentAsset.name}`}
              className={`pgallery__image ${isTransitioning ? 'fade' : ''}`}
            />
          </div>
        </div>
      </div>

      {hasMedia && (
        <div className="pgallery__media-footer">
          <div className="pgallery__media-divider"></div>

          {project.youtubeId && (
            <div className="pgallery__media-section">
              <label className="pgallery__label">Gameplay Video</label>
              <div className="pgallery__youtube-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={`${project.title} - Gameplay`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="pgallery__youtube"
                />
              </div>
            </div>
          )}

          {project.videos && project.videos.length > 0 && (
            <div className="pgallery__media-section">
              <label className="pgallery__label">Video Previews</label>
              <div className="pgallery__video-grid">
                {project.videos.map((video) => (
                  <div key={video.name} className="pgallery__video-card">
                    <video src={video.src} controls playsInline className="pgallery__video" />
                    <span className="pgallery__video-name">{video.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.gameplay && (
            <div className="pgallery__media-section">
              <label className="pgallery__label">Gameplay Video</label>
              <video
                src={project.gameplay}
                controls
                playsInline
                className="pgallery__video pgallery__video--full"
                poster={assets[0]?.base}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
