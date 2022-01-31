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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Here's a video ...</h2>
            <p className="text-xl text-gray-600 mb-4">you should watch it :)</p>
            <div className="mx-auto mb-10 flex justify-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=EchIU4f1--s"
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Link to="/why" className="btn-sm text-white bg-red-400 hover:bg-red-500 ml-3 rounded-2xl">
                  <span>Read about why</span>           
                </Link>
              </div>
              <p className="text-xl text-gray-600 mb-4 mt-12">here's another video you should watch haha ... ;)</p>
              <div className="mx-auto mb-10 flex justify-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
