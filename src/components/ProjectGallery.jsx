import { useState, useRef } from 'react';
import './ProjectGallery.css';

const ProjectGallery = ({ project }) => {
  const [viewMode, setViewMode] = useState('base');
  const [activeAsset, setActiveAsset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageRef = useRef(null);

  const currentAsset = project.assets[activeAsset];

  const hasMedia = (project.videos && project.videos.length > 0) || project.gameplay || project.youtubeId;

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 200);
  };

  const handleAssetChange = (index) => {
    if (index === activeAsset) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveAsset(index);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="pgallery" id={`project-${project.id}`}>
      {/* Header */}
      <div className="pgallery__header">
        <div className="pgallery__meta">
          <span className="pgallery__category">{project.category}</span>
          {project.tags?.map(tag => (
            <span key={tag} className="pgallery__tag">{tag}</span>
          ))}
        </div>
        <h3 className="pgallery__title">{project.title}</h3>
        {project.subtitle && (
          <p className="pgallery__subtitle">{project.subtitle}</p>
        )}
      </div>

      {/* Body — Two column: info + image */}
      <div className="pgallery__body">
        {/* Left — Info panel */}
        <div className="pgallery__info">
          <p className="pgallery__description">{project.description}</p>

          {project.highlights && (
            <ul className="pgallery__highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          {/* View Mode Toggle */}
          <div className="pgallery__toggle-section">
            <label className="pgallery__label">View Mode</label>
            <div className="pgallery__toggles">
              <button
                className={`pgallery__toggle ${viewMode === 'base' ? 'active' : ''}`}
                onClick={() => handleViewChange('base')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                Base Color
              </button>
              <button
                className={`pgallery__toggle ${viewMode === 'wireframe' ? 'active' : ''}`}
                onClick={() => handleViewChange('wireframe')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="8.5" x2="22" y2="8.5"/><line x1="2" y1="15.5" x2="22" y2="15.5"/></svg>
                Wireframe
              </button>
            </div>
          </div>

          {/* Asset Selector */}
          {project.assets.length > 1 && (
            <div className="pgallery__selector-section">
              <label className="pgallery__label">3D Model ({activeAsset + 1}/{project.assets.length})</label>
              <div className="pgallery__chips">
                {project.assets.map((asset, idx) => (
                  <button
                    key={asset.name}
                    className={`pgallery__chip ${activeAsset === idx ? 'active' : ''}`}
                    onClick={() => handleAssetChange(idx)}
                  >
                    {asset.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>


        {/* Right — Main image ONLY */}
        <div className="pgallery__display">
          <div className="pgallery__image-frame">
            <div className="pgallery__image-status">
              <span className={`pgallery__mode-indicator ${viewMode}`}>
                {viewMode === 'base' ? '◉ Render' : '△ Topology'}
              </span>
              <span className="pgallery__asset-name">{currentAsset.name}</span>
            </div>
            <img
              ref={imageRef}
              src={viewMode === 'base' ? currentAsset.base : currentAsset.wireframe}
              alt={`${project.title} — ${currentAsset.name} (${viewMode})`}
              className={`pgallery__image ${isTransitioning ? 'fade' : ''}`}
            />
          </div>
        </div>
      </div>

      {/* Media footer — full width below the two-column layout */}
      {hasMedia && (
        <div className="pgallery__media-footer">
          <div className="pgallery__media-divider"></div>

          {/* YouTube embed */}
          {project.youtubeId && (
            <div className="pgallery__media-section">
              <label className="pgallery__label">Gameplay Video</label>
              <div className="pgallery__youtube-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={`${project.title} — Gameplay`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="pgallery__youtube"
                />
              </div>
            </div>
          )}

          {/* Video previews (Magic Circle etc.) */}
          {project.videos && project.videos.length > 0 && (
            <div className="pgallery__media-section">
              <label className="pgallery__label">Video Previews</label>
              <div className="pgallery__video-grid">
                {project.videos.map(v => (
                  <div key={v.name} className="pgallery__video-card">
                    <video src={v.src} controls playsInline className="pgallery__video" />
                    <span className="pgallery__video-name">{v.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gameplay video */}
          {project.gameplay && (
            <div className="pgallery__media-section">
              <label className="pgallery__label">Gameplay Video</label>
              <video
                src={project.gameplay}
                controls
                playsInline
                className="pgallery__video pgallery__video--full"
                poster={project.assets[0]?.base}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
