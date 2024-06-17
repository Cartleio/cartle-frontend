import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { LiaTagSolid } from "react-icons/lia";
import { BsClipboard2Check, BsGraphUpArrow } from "react-icons/bs";
import { TbUsers, TbMessageCircle2, TbMoneybag } from "react-icons/tb";
import { BiSolidDiscount } from "react-icons/bi";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { AiOutlineQuestionCircle } from "react-icons/ai";

type Navigation = {
  path: string;
  subPath: string[];
  icon: JSX.Element;
  label: string;
};

export const orders = [
  {
    id: 1,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 2,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 3,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 4,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A.",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "london",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 5,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A.",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "New york",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 6,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 7,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 8,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 9,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 10,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
  {
    id: 11,
    text: "2022-05-17T03:24:00",
    order_price: "$435.50",
    date: "27 Nov 2023",
    billing_name: "Shirley A. Lape",
    invoice_no: "202378690",
    current_order_status: "Paid",
    email: "Johndoe@yahoo.com",
    country: "Nigeria",
    state: "Rivers",
    city: "Port Harcourt",
    Address: "123 Peace Street",
    customInformation: "Along The Road",
    customer_id: "23143",
    productsOrdered: [
      {
        title: "Perfume",
        productInvoice: "202378690",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "iPhone 15 plus",
        productInvoice: "202378691",
        product_price: "20,000",
        product_status: "In Stock",
      },
      {
        title: "HP Laptop",
        productInvoice: "202378692",
        product_price: "20,000",
        product_status: "In Stock",
      },
    ],
  },
];

export const NAVIGATION_LINK: Navigation[] = [
  {
    path: "/merchant/home",
    subPath: [""],
    icon: <IoHomeOutline />,
    label: "Home",
  },
  {
    path: "/merchant/dashboard",
    subPath: [""],
    icon: <MdOutlineDashboard />,
    label: "Dashboard",
  },
  {
    path: "/merchant/sales",
    subPath: [""],
    icon: <BsGraphUpArrow />,
    label: "Sales",
  },
  {
    path: "/merchant/products",
    subPath: [
      "/merchant/new_product",
      "/merchant/products_window",
      "/merchant/add_product",
      "/merchant/products_categories",
      "/merchant/products-home",
    ],
    icon: <LiaTagSolid />,
    label: "Products",
  },
  {
    path: "/merchant/orders",
    subPath: ["/merchant/orders/order"],
    icon: <BsClipboard2Check />,
    label: "Orders",
  },
  {
    path: "/merchant/customers",
    subPath: ["/merchant/add_customers", "/merchant/customers_list"],
    icon: <TbUsers />,
    label: "Customers",
  },
  {
    path: "/merchant/discount",
    subPath: ["/merchant/discount_auction", "/merchant/voucher_codes"],
    icon: <BiSolidDiscount />,
    label: "Discount",
  },
  {
    path: "/merchant/messages",
    subPath: [""],
    icon: <TbMessageCircle2 />,
    label: "Messages",
  },
  {
    path: "/merchant/marketing",
    subPath: [
      "/merchant/marketing/email-status",
      "/merchant/marketing/automate-email",
      "/merchant/marketing/segment",
      "/merchant/marketing/campaign",
      "/merchant/marketing/automate-email/newsletter",
      "/merchant/marketing/automate-email/welcome-new-customers",
      "/merchant/marketing/automate-email/newsletter",
      "/merchant/marketing/campaign/add_campaign",
    ],
    icon: <BsGraphUpArrow />,
    label: "Marketing",
  },
  {
    path: "/merchant/app",
    subPath: [""],
    icon: <MdOutlineDashboardCustomize />,
    label: "App",
  },
  {
    path: "/merchant/help",
    subPath: [""],
    icon: <AiOutlineQuestionCircle />,
    label: "Help",
  },
];

type SideBarTags = {
  icon: JSX.Element;
  label: string;
  price: String;
  quote: String;
  bgColor: string;
};

export const SIDEBAR_TAGS_DATA: SideBarTags[] = [
  {
    icon: <TbMoneybag />,
    label: "Sales",
    price: "$5,000",
    quote: "(+19%)",
    bgColor: "#FFF1E6",
  },
  {
    icon: <GoPeople />,
    label: "Visitors",
    price: "5,000",
    quote: "(+19%)",
    bgColor: "#E7E7E7",
  },
  {
    icon: <PiHandbagSimpleLight />,
    label: "Orders",
    price: "4,000",
    quote: "(+19%)",
    bgColor: "#FFF1E6",
  },
];

export const SIDEBAR_TAGS_DATA2: SideBarTags[] = [
  {
    icon: <TbMoneybag />,
    label: "Pending Transactions",
    price: "0",
    quote: "(+19%)",
    bgColor: "#FFF1E6",
  },
  {
    icon: <GoPeople />,
    label: "Available Balance",
    price: "0",
    quote: "(+19%)",
    bgColor: "#E7E7E7",
  },
  {
    icon: <PiHandbagSimpleLight />,
    label: "Total Balance",
    price: "0",
    quote: "(+19%)",
    bgColor: "#FFF1E6",
  },
];

export function getOrderStatus(status: string) {
  switch (status) {
    case "PENDING":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-red-600">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "PAID":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "DELIVERED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-blue-600 ">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "IN_STOCK":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 ">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "OUT_OF_STOCK":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-red-600 ">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 ">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}

export const CUSTOMERS = [
  {
    id: "1",
    customer_id: "2244631",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "2",
    customer_id: "2244632",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "3",
    customer_id: "2244633",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "4",
    customer_id: "2244634",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "5",
    customer_id: "2244635",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "6",
    customer_id: "2244636",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },

  {
    id: "7",
    customer_id: "2244637",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "8",
    customer_id: "2244638",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },

  {
    id: "9",
    customer_id: "2244639",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },

  {
    id: "10",
    customer_id: "22446310",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "11",
    customer_id: "22446311",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "12",
    customer_id: "22446312",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },

  {
    id: "13",
    customer_id: "22446313",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "14",
    customer_id: "22446314",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "15",
    customer_id: "22446315",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
  {
    id: "16",
    customer_id: "22446316",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
  },
];

export const CUSTOMERS_EMAIL_DATA = [
  {
    id: "1",
    customer_id: "2244631",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "2",
    customer_id: "2244632",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "3",
    customer_id: "2244633",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "seen",
  },
  {
    id: "4",
    customer_id: "2244634",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "5",
    customer_id: "2244635",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "6",
    customer_id: "2244636",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "delivered",
  },

  {
    id: "7",
    customer_id: "2244637",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "8",
    customer_id: "2244638",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },

  {
    id: "9",
    customer_id: "2244639",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "delivered",
  },

  {
    id: "10",
    customer_id: "22446310",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "11",
    customer_id: "22446311",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "12",
    customer_id: "22446312",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "seen",
  },

  {
    id: "13",
    customer_id: "22446313",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "14",
    customer_id: "22446314",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
  {
    id: "15",
    customer_id: "22446315",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "delivered",
  },
  {
    id: "16",
    customer_id: "22446316",
    customer_name: "Amadi Precious",
    customer_email: "amadiprecious20@gmail.com",
    customer_phone: "+234-905-749-864",
    customer_orders: 201,
    email_status: "sent",
  },
];

export function getEmailStatus(status: string) {
  switch (status) {
    case "SENT":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "SEEN":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "DELIVERED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-blue-600 ">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 ">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}

export const getPlanName = (planID: number) => {
  if (planID === 1) return "basic ";
  if (planID === 2) return "pro ";
  if (planID === 3) return "prime ";
  if (planID === 4) return "temp ";
};

export const EMAIL_OVERLAY_NAV_LINKS = [
  {
    id: 1,
    link: "/merchant/marketing/campaign",
    label: "Campaign",
    text: "Create a marketing campaign to attract customers",
  },
  {
    id: 2,
    link: "/merchant/marketing/automate-email",
    label: "Automate Email",
    text: "Create automated emails to be sent out periodically",
  },

  {
    id: 4,
    link: "/merchant/marketing/email-status",
    label: "Email Status",
    text: "Create an email according to customer",
  },
  {
    id: 5,
    link: "/merchant/marketing/segment",
    label: "Segmentation",
    text: "Create segments for customers",
  },
];

export const CAMPAIGN_DATA = [
  {
    id: "1",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "2",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "3",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "4",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "5",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "6",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "7",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
  {
    id: "8",
    date_created: "27 Nov 2023",
    campaign_name: "Trending Nike shoes to get in 2024",
    campaign_reach: "600 views",
  },
];

export const formatPriceInDollar = (price: number) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return dollarsAmount;
};

export const formatPriceInNaira = (price: number) => {
  const nairaAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);
  return nairaAmount;
};
