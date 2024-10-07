import React from 'react';
import { CONTACT } from '../constants/index.js'; 

const Contact = () => {
  return (
    <div className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto border border-stone-700 rounded-lg p-8 md:p-12 lg:p-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center border-b-2 border-stone-700 pb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <p className="text-lg md:text-xl">
                <strong className="text-white">Email:</strong> {CONTACT.email}
              </p>
              <p className="text-lg md:text-xl mt-4">
                <strong className="text-white">Phone:</strong> {CONTACT.phoneNo}
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl">
                <strong className="text-white">Address:</strong> {CONTACT.address}
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={`mailto:arnavgpt123@gmail.com`}
              className="inline-block bg-white text-black px-6 py-2 rounded-lg shadow-md hover:bg-stone-900 hover:text-white transition"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
