import React from "react";

import Image from "next/image";

function Form() {
  return (
    <div className="w-full h-screen relative">
      <Image
        className=""
        src={"/autumn-setup.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full text-center ">
        <div className="max-w-3xl mx-auto p-5 m-5 bg-white text-gray-800 flex flex-col justify-center" id="contact">
          <div className="mb-5">
            <div>
              <p className="font-semibold text-2xl">GET IN TOUCH</p>
            </div>

            <h2>
              Please fill out the form below and we will contact you within 24
              hours.
            </h2>
          </div>

          <div className="sm:flex flex-grow justify-center">
            <div>
              <form
                className="flex flex-col max-w-2xl mx-auto mb-10 justify-center"
                //onSubmit={submitForm}
              >
                <fieldset>
                  <div className="mb-5">
                    <input
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      type="text"
                      defaultValue=""
                      placeholder="Name"
                      //value={name}
                      size="35"
                      // id="contactName"
                      // name="contactName"
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      type="text"
                      defaultValue=""
                      //value={name}
                      size="35"
                      placeholder="Phone Number"
                      // id="contactName"
                      // name="contactName"
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      type="text"
                      defaultValue=""
                      //value={email}
                      size="35"
                      placeholder="Email"
                      // id="contactEmail"
                      // name="contactEmail"
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      type="text"
                      defaultValue=""
                      // value={subject}
                      size="35"
                      placeholder="Estimated Guest Count"
                      // id="contactSubject"
                      // name="contactSubject"
                      // onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      type="text"
                      defaultValue=""
                      //value={name}
                      size="35"
                      placeholder="Date of Event"
                      // id="contactName"
                      // name="contactName"
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      type="text"
                      defaultValue=""
                      //value={name}
                      size="35"
                      placeholder="Location of Event"
                      // id="contactName"
                      // name="contactName"
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <textarea
                      className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                      cols="50"
                      rows="15"
                      placeholder="Message"
                      //value={message}
                      // onChange={(e) => setMessage(e.target.value)}
                      // id="contactMessage"
                      // name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      //onClick={submitForm}
                      type="submit"
                      className="bg-cyan-700 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
