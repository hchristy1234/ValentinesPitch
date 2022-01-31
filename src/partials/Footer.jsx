import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-center py-4 md:py-8 border-t border-gray-200">
          {/* End */}
          <div className="text-sm text-gray-600 mr-4">Made by Christy ♡ Source code <a className="text-blue-600 hover:underline" href="https://github.com/hchristy1234/ValentinesPitch">here</a>.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
