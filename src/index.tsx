import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './presentation/App';

const rootContainer = document.getElementById('app');

if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Root container is null');
}
