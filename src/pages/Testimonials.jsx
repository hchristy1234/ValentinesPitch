import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Testimonial1 from '../images/BearFace.jpg';
import Testimonial2 from '../images/unicorn.jpg';
import Testimonial3 from '../images/greenthing.jpg';

function Testimonials() {
  return (
    <section className="relative">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-48">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Read testimonials from past interviewees ;)</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-12" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-red-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src={Testimonial1} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Wow. Christy is such a cool interviewer. Would highly recommend!"
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Floof Bear</cite>
              </div>

            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-red-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src={Testimonial2} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “I just read my favorite Valentine's Day HOMSJ ever! I think the animal kingdom has been saved!"
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Magical Unicorn</cite>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-red-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src={Testimonial3} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “I am amazed by Christy's professionalism while interviewing us, how she made us feel so comfortable, and how the questions were so fun to answer!"
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Cute Green Animal</cite>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Testimonials;