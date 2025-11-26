import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImagePreview.css';

const ImagePreview = ({ src, alt = 'Preview', caption, image, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="image-preview" onClick={onClose} role="dialog" aria-modal="true">
      <figure className="image-preview__figure" onClick={(e) => e.stopPropagation()}>
        <img 
          src={src} 
          alt={alt || caption || "Preview"} 
          style={{ backgroundColor: image?.background || 'transparent' }}
        />
        {caption && <figcaption className="image-preview__caption">{caption}</figcaption>}
      </figure>
    </div>,
    document.body
  );
};

export default ImagePreview;