import React from 'react'

function Form() {
  return (
    <section className="max-w-3xl mx-auto p-5 m-5 bg-cyan-50 text-gray-300" id="contact">
      <div className="mb-5">
        <div>
          <p className="font-semibold text-2xl">GET IN TOUCH</p>
        </div>

        <h2>Please fill out the form below and we will contact you within 24 hours.</h2>
      </div>

      <div className="sm:flex flex-grow">
        <div>
          <form
            className="flex flex-col max-w-2xl mx-auto mb-10"
            //onSubmit={submitForm}
          >
            <fieldset>
              <div className="mb-5">
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  //value={name}
                  size="35"
                  // id="contactName"
                  // name="contactName"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactName">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  //value={name}
                  size="35"
                  // id="contactName"
                  // name="contactName"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  //value={email}
                  size="35"
                  // id="contactEmail"
                  // name="contactEmail"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactSubject">Estimated Guest Count</label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  // value={subject}
                  size="35"
                  // id="contactSubject"
                  // name="contactSubject"
                  // onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactName">
                  Date of Event <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  //value={name}
                  size="35"
                  // id="contactName"
                  // name="contactName"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactName">
                  Location of Event <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  //value={name}
                  size="35"
                  // id="contactName"
                  // name="contactName"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  cols="50"
                  rows="15"
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
    </section>
  )
}

export default Form