import React from 'react';
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';

function Video() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 mb-24 md:pb-20">
            <h2 className="h2 mb-4">Here's a video ...</h2>
            <p className="text-xl text-gray-600 mb-4">you should watch it ;)</p>
            <div className="mx-auto mb-10 flex justify-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Learn more</span>           
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
