import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold text-red-500 mb-4">Contact Details</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <div>
              <h4 className="font-bold">Helpline</h4>
              <p>456456465</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold">Email</h4>
              <p>gau@ja</p>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">Pune Address</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, debitis voluptate? Beatae laudantium itaque minima quae fuga! Accusantium repell</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold">Other City Address</h4>
              <ol className="list-decimal pl-6">
                <li className="mt-2">lum sunt non similique placeat aspernatur, exercitationem molestias dicta deleniti ad odio</li>
                <li className="mt-2">lum sunt non similique placeat aspernatur, exercitationem molestias dicta deleniti ad odio</li>
                <li className="mt-2">lum sunt non similique placeat aspernatur, exercitationem molestias dicta deleniti ad odio</li>
                <li className="mt-2">lum sunt non similique placeat aspernatur, exercitationem molestias dicta deleniti ad odio</li>
              </ol>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
              </div>
              <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile" />
              </div>
              <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                <textarea className="shadow appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
