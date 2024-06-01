import React, { useState } from "react";
import PricingCard from "./PricingCard";
interface Plan {
    name: string;
    desc: string;
    price: string;
}

interface Item {
    name: string;
    basic: JSX.Element | string;
    business: JSX.Element | string;
    enterprise: JSX.Element | string;
}

interface Table {
    label: string;
    label_icon: JSX.Element;
    items: Item[];
}

const PricingTable: React.FC = () => {
    const checkIcon = <svg className="w-5 h-5 mx-auto text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" /></svg>;
    const minusIcon = <svg className="w-5 h-5 mx-auto text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" /></svg>;

    const plans: Plan[] = [
        {
            name: "Basic",
            desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
            price: "15"
        },
        {
            name: "Business",
            desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
            price: "20"
        },
        {
            name: "Enterprise",
            desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
            price: "50"
        },
    ];

    const tables: Table[] = [
        {
            label: "Services",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            items: [
                {
                    name: "Number of Products",
                    basic: '50',
                    business: '500',
                    enterprise: 'unlimited'
                },
                {
                    name: "Priority Support ",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Create Discount",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Custom Domain",  
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Abandoned Cart Recovery",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Staff Account",
                    basic: minusIcon,
                    business: "2",
                    enterprise: "5"
                },
                {
                    name: "Verification Check",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Auction Feature ",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
              
            ]
        },
     
        {
            label: "Customer",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "Email Service",
                    basic: '50 custom emails monthly',
                    business: '500 custom emails monthly',
                    enterprise: "unlimited"
                },
                {
                    name: "Thanks for buying email",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Customer information",
                    basic: minusIcon,
                    business:   checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Delivery Information",
                    basic: minusIcon,
                    business:   checkIcon,
                    enterprise: checkIcon
                },  {
                    name: "Chat Box",
                    basic: minusIcon,
                    business:   checkIcon,
                    enterprise: checkIcon
                },
            ]
            
        },
        {
            label: "Fees",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            items: [
                {
                    name: "Transaction Fee",
                    basic: '₦100',
                    business: '₦100',
                    enterprise: '₦100'
                },
                {
                    name: "Commission",
                    basic: '₦50 + 3%',
                    business: '₦50 + 2%',
                    enterprise:'₦40 + 1%'
                },
            ]
        },
        {
            label: "Store Layout",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "Themes",
                    basic: '2',
                    business:'5',
                    enterprise: "10"
                },
                {
                    name: "Remove Cartle Watermark",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Pixel",
                    basic: checkIcon,
                    business:checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Store Window (Status Post)",
                    basic: "3",
                    business: "10",
                    enterprise: "Unlimited"
                },
            ]
            
        }
    ];

    const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

    return (
        <section className="py-20 text-gray-600">
            <div className="">
                <div className='relative max-w-xl mx-auto space-y-3 px-4 sm:text-center md:px-0'>
                    <h3 className="text-[#FF7600] text-3xl lg:text-4xl font-semibold">
                         Ready to grow?
                    </h3>
                    <p className='text-gray-400  '>
                         Choose a plan tailored to your needs
                    </p>
                </div>
                <div className="mt-16">

                    <PricingCard/>
                    <div className="mx-auto mt-5 items-center justify-center">
                        <p className="text-2xl lg:text-3xl text-center text-gray-500 font-bold">Compare Plans
                       
                        </p>
                    </div>
                    <div className="shadow-xl py-8 rounded-lg max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
                        {
                            tables.map((table, idx) => (
                                <table key={idx} className="w-full table-auto text-sm text-left">
                                    <thead className="text-gray-600 font-medium border-b">
                                        <tr>
                                            <th colSpan={4} className=" top-12 py-6 lg:sticky">
                                                <div className=" gap-x-3 p-2 rounded-md bg-gray-100">
                                                    <h4 className="text-gray-800 text-xl font-medium">
                                                        {table.label}
                                                    </h4>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 divide-y">
                                        {
                                            table.items.map((item, idx) => (
                                                <>
                                                    <tr key={idx}>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                                        {/* For large devices */}
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">{item.basic}</td>
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">{item.business}</td>
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">{item.enterprise}</td>
                                                        {/* For small devices */}
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden">
{/*                                                             {item[selectedPlan.toLowerCase()]} */}
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;
