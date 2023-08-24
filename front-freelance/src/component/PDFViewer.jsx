import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Document, Page } from 'react-pdf';

function PDFViewer({ file }) {
  return (
 
      <div style={{ height: '500px' }}>
        <Viewer fileUrl={URL.createObjectURL(file)} />
      </div>
 
  );
}

export default PDFViewer;