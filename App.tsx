
import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListenPage from './components/ListenPage';

const App: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <header className="p-4 bg-stone-900 border-b border-stone-800">
          <div className="container mx-auto">
            <nav aria-label="التنقل الرئيسي">
              <ul className="flex list-none p-0">
                <li>
                  <a href="#/" className="text-yellow-400 hover:underline font-bold text-lg p-2 block">
                    الصفحة الرئيسية
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content" className="flex-grow container mx-auto px-4 py-8" role="main">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onTextExtracted={(text, name) => {
                    setExtractedText(text);
                    setFileName(name);
                  }} 
                />
              } 
            />
            <Route 
              path="/listen" 
              element={
                <ListenPage 
                  text={extractedText} 
                  fileName={fileName} 
                />
              } 
            />
          </Routes>
        </main>

        <footer className="p-8 bg-stone-900 text-stone-400 text-center text-sm border-t border-stone-800">
          <p>© 2024 جميع الحقوق محفوظة لموقع الوصول الميسر</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
