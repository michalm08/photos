import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import './sass/main.min.css';
import { Route, BrowserRouter } from 'react-router-dom';
import PhotosPage from './pages/PhotosPage';

function App() {
  const [photoName, setPhotoName] = useState('');
  return (
    <div className='App'>
      {/* <LandingPage /> */}
      {/* <Photos /> */}
      <section>
        <BrowserRouter>
          <section>
            <Route path='/' exact>
              <LandingPage setPhotoName={setPhotoName} />
            </Route>

            <Route path='/photos'>
              <PhotosPage photoName={photoName} setPhotoName={setPhotoName} />
            </Route>
          </section>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
