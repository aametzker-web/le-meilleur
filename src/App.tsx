import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Home/HomePage';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/le-meilleur">
        <Routes>
  <Route element={<Layout />}>
    <Route path="*" element={<HomePage />} />
  </Route>
</Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;