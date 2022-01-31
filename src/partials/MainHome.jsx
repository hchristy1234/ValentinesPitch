import React, { useState } from 'react';
import Modal from '../utils/Modal';

function MainHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-red-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-44 pb-12 md:pt-56 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-18 md:pb-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">I <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600">love</span> the <em>Smoke Signal</em>.</h1>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">I <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600">love</span> web. <span className="text-sm font-medium">(so much that my pitch is a website.)</span></h1>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Valentine's Day is about <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600">love.</span></h1>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MainHome;