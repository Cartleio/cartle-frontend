import React from "react";

const delivery: string[] = ["DHL", "FedX", "ITC", "Others"];

const Shipping = () => {
  return (
    <>
      <section className="flex flex-col gap-8">
        {/* STORE DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Store Profile</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-md font-bold my-3">Store Name</label>
              <input
                type="text"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">
                Store Contact Email
              </label>
              <input
                type="email"
                className="focus:outline-none border focus:border focus:border-orange-500 rounded-md h-10 w-full px-3 my-2"
              />
            </div>

            <div>
              <label className="text-md font-bold my-3">
                Store Contact Number
              </label>
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

        {/* SHIPPINGS DETAILS */}
        <article className="border rounded-md">
          <div className="p-3 flex items-center justify-between border-b">
            <h1 className="text-lg font-bold">Delivery Details</h1>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="p-3 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-md font-bold my-3">
                How do you deliver to customers
              </label>
              <div className="flex flex-col gap-1">
                {delivery.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <input
                      type="checkbox"
                      name={item}
                      id=""
                      className="h-5 w-5"
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-md font-bold my-3">
                How do you ship products
              </label>
              <div className="flex flex-col gap-1">
                {delivery.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <input
                      type="checkbox"
                      name={item}
                      id=""
                      className="h-5 w-5"
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Shipping;
