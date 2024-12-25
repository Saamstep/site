// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExternalRedirect from './components/ExternalLink.tsx';

import Home from './pages/Home.tsx';
import Error from "./pages/404.tsx";
import Color from './pages/Color.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />        
        <Route path="/qr" element={<Home />} />
        <Route path="/youtube" element={<ExternalRedirect url="https://youtube.com/@Samstep" />} />
        <Route path="/twitter" element={<ExternalRedirect url="https://twitter.com/Saamstep" />} />
        <Route path="/twitch" element={<ExternalRedirect url="https://twitch.tv/Samstep" />} />
        <Route path="/youtube" element={<ExternalRedirect url="https://youtube.com/@Samstep" />} />
        <Route path="/color" element={<Color />} />
        <Route path="/github" element={<ExternalRedirect url="https://github.com/saamstep" />} />
        <Route path="/subscribe" element={<ExternalRedirect url="https://youtube.com/@Samstep" />} />
      </Routes>
    </div>
  );
};

export default App;
