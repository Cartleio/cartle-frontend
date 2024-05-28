import React from 'react'
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
    <section className="  bg-gradient-to-r from-[#FF7600]  to-[#D94719] text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-xl md:text-3xl lg:text-4xl tracking-tight font-extrabold leading-tight  ">
          A Community Just for You
          </h2>
          <p className="mb-6 text-gray-200 md:text-lg">
          Join the community of entrepreneurs using cartle to thrive and maybe you also will find new and better ways to win on a global scale.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto  items-center bg-[#f8f8fa] w-30 py-12 px-4 lg:px-20 ">
      <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-700 leading-tight  ">
            Frequently Asked Questions
            </h2>
          </div>


            <div className="mx-auto max-w-screen-md">
                <Accordion question="Can I get help if stuck?" answer={<p>Yes, your personal and financial information is secure with Cartle. We use advanced encryption technologies to protect your data.</p>} />

                <Accordion question="How do I use Cartle?" answer={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda impedit doloremque, cupiditate beatae ab recusandae sequi officia eveniet inventore ex tempore velit omnis vitae magni sed esse atque blanditiis?</p>} />

                <Accordion question="How do I add products to my store? " answer={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et doloribus earum veritatis esse accusamus vero voluptate minima necessitatibus. In aliquam obcaecati rem deserunt beatae voluptatibus saepe totam, molestias ipsa. </p>} />

                <Accordion question="How do I communicate with clients?" answer={<p>Signing up for Paymita is easy! download our app, click </p>} />

                <Accordion question="How do I communicate with clients?" answer={<p>Funds added to your wallet reflect instantly for swift transactions.</p>} />
            </div>
        </section>
    </>
  )
}

export default Faq