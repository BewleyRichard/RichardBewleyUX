import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImagePreview.css';

const ImagePreview = ({ src, alt = 'Preview', isOpen, onClose }) => {
  // Effect to handle Escape key and prevent body scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  // Use a portal to render the modal at the end of `document.body`.
  // This escapes the stacking context of the parent component.
  return createPortal(
    <div className="image-preview" onClick={onClose} role="dialog" aria-modal="true">
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>,
    document.body
  );
};

export default ImagePreview;