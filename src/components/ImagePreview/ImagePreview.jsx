import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImagePreview.css';

const ImagePreview = ({ src, alt = 'Preview', caption, isOpen, onClose }) => {
  // Effect to handle Escape key and prevent body scrolling
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

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  // Use a portal to render the modal at the end of `document.body`.
  return createPortal(
    <div className="image-preview" onClick={onClose} role="dialog" aria-modal="true">
      <figure className="image-preview__figure" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        {caption && <figcaption className="image-preview__caption">{caption}</figcaption>}
      </figure>
    </div>,
    document.body
  );
};

export default ImagePreview;