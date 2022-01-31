import React from 'react';

import Header from '../partials/Header';
import MainHome from '../partials/MainHome';
import Video from '../partials/Video';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <MainHome />
        <Video />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;