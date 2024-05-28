import React from "react";

const Payments = () => {
  return (
    <>
      <section className="flex flex-col gap-8">
        {/* CARD DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Card details</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-md font-bold my-3">Card Number</label>
              <input
                type="number"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Card Name</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Expiration date</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Contact Address</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>
          </div>
        </article>

        {/* BILLING DETAILS*/}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Billing Information</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-2 gap-4">
            <div>
              <label className="text-md font-bold my-3">Currency</label>
              <input
                type="number"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">Billing Address</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Payments;
