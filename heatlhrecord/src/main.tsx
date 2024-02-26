
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

type RootOptions = {
  /**
   * Prefix for `useId`.
   */
  identifierPrefix?: string;
  onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

type ErrorInfo = {
  digest?: string;
  componentStack?: string;
}

type Root = {
  render(children: React.ReactNode): void;
  unmount(): void;
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)