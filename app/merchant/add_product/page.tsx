"use client";
import Header from "@/app/components/merchant_components/Header";
import Layout from "@/app/components/merchant_components/Layout";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getProducts } from "@/app/redux/feature/productSlice";
import { AppDispatch } from "../../redux/store";

//PRODUCT TYPE DEFIFNITION
type ProductData = {
  title: string;
  description: string | any;
  tax: boolean;
  price: Number | null | any;
  compareAtPrice: Number | null;
  costPerItem: Number | null | any;
  continueSellingWhenOutOfStock: boolean;
  requiresShipping: boolean;
  weight: Number | null | any;
  countryOfShipment: string;
  hsCode: string;
  physicalProduct: boolean;
  trackQuantity: boolean;
  sku: string;
  barcode: string;
  status: boolean;
  productType: string;
  vendor: string;
  collections: string[];
  tags: string[];
  productImages: string[];
  originalPrice: Number | null;
  discountedPrice: Number | null;
};

function AddProduct(): JSX.Element {
  //USE ROUTER INSTANCE
  const path = useRouter();

  //GET ACTIVE STORE ID FROM REDUX STORE
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  //FILE NUMBER COUNT STATE
  const [fileNumber, setFileNumber] = useState("");

  //LOADING STATE STATE
  const [loading, setLoading] = useState(false);

  //REDUX USE DISPATCH
  const dispatch = useDispatch<AppDispatch>();

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  //TEMPORARY STATE FOR MANAGING PRODUCT UPDATE
  const [productData, setProductData] = useState<ProductData>({
    title: "",
    description: "",
    tax: false,
    price: undefined,
    // physicalProduct: true,
    trackQuantity: false,
    compareAtPrice: 2444.0,
    costPerItem: undefined,
    continueSellingWhenOutOfStock: false,
    requiresShipping: true,
    weight: undefined,
    countryOfShipment: "Nigeria",
    hsCode: "234567",
    sku: "sku",
    barcode: "barcode",
    status: true,
    productType: "shoes",
    vendor: "",
    collections: [],
    tags: ["modern shoes"],
    productImages: [],
    originalPrice: 5000.0,
    discountedPrice: 2444.0,
  });

  //HANDLES PRODUCT INFORMATION UPDATE
  const handleProductchange = (event: any) => {
    event.preventDefault();
    if (
      event.target.name === "weight" ||
      event.target.name === "price" ||
      event.target.name === "costPerItem"
    ) {
      const value = parseInt(event.target.value);
      setProductData({
        ...productData,
        [event.target.name]: value,
      });
    } else if (event.target.name === "collections") {
      setProductData({
        ...productData,
        collections: [...productData.collections, event.target.value],
      });
    } else if (event.target.name === "productImages") {
      if (event.target.files && event.target.files.length > 0) {
        setFileNumber(event.target.files.length);
        const maxFileSizeKB = 100;
        const fileList = event.target.files;

        //CHECK THE FILE SIZE BEFORE PROCESSING
        const isFileSizeValid = Array.from(fileList).every(
          (file: any) => file.size <= maxFileSizeKB * 1024
        );

        if (!isFileSizeValid) {
          // HANDLE INVALID FILE SIZE (greater than 100KB)
          toast.error(
            "One of the Files size exceeds the maximum limit of 100KB"
          );
          return;
        }

        let pictureArray: string[] = [];

        const loadImages = async () => {
          const loadImage = (file: any) => {
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = () => {
                resolve(reader.result as string);
              };
              reader.readAsDataURL(file);
            });
          };

          const imagePromises = Array.from(fileList).map((file) =>
            loadImage(file)
          );

          Promise.all(imagePromises)
            .then((results: any) => {
              pictureArray = results;
              setProductData((prevProductData) => ({
                ...prevProductData,
                productImages: [
                  ...prevProductData.productImages,
                  ...pictureArray,
                ],
              }));
            })
            .catch((error) => console.error(error));
        };

        loadImages();
      }
    } else {
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
      });
    }
  };

  //HANDLE PRODUCT UPDATE TO THE DATABASE
  const handleSave = async () => {
    try {
      const token = user.token;
      setLoading(true);
      const response = await axios.post(
        `https://cartle-backend-800v.onrender.com/stores/${activeStoreId}/product`,
        productData,
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 201) {
        setLoading(false);
        toast.success("Product Created Successfully");
        dispatch(getProducts());
        setTimeout(() => {
          path.push("/merchant/products");
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      toast.error("product creation failed");
    }
  };

  //PROPS PASSED FOR THE PRODUCT HEADER
  const addHeaderData = {
    title: "Create Product",
    text: "Add products to your store",
    return_arrow_url: "/merchant/products",
    loading: loading,
    saveFn: handleSave,
  };

  //HANDLES PRODUCT FILTER DURING PREVIEW
  const removeImage = (index: number) => {
    const newImages = productData.productImages.filter(
      (_, ImgIndex) => ImgIndex !== index
    );
    setProductData({
      ...productData,
      productImages: newImages,
    });
  };

  return (
    <>
      <Layout>
        <AddHeader {...addHeaderData} />
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4 my-6 mx-auto">
          <section className="md:col-start-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex flex-row md:flex-col gap-2 mb-3 ">
              {/* PRODUCT NAME */}
              <div className="flex flex-col gap-2 mb-3 ">
                <label htmlFor="product_name" className="text-black font-bold">
                  Product Name
                </label>

                <input
                  onChange={handleProductchange}
                  type="text"
                  name="title"
                  value={productData.title}
                  className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                  id="product_name"
                  placeholder="Short sleeve shirt"
                />
              </div>

              {/* PRODUCT STATUS */}
              <div className="flex flex-col gap-2 mb-3 md:hidden flex-1">
                <label htmlFor="Status" className="text-black font-bold">
                  Status
                </label>

                <div
                  onClick={() =>
                    setProductData({
                      ...productData,
                      status: !productData.status,
                    })
                  }
                  className="flex items-center cursor-pointer border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                >
                  {productData.status ? (
                    <span>Active</span>
                  ) : (
                    <span>In Active</span>
                  )}
                </div>
              </div>
            </div>

            {/* PRODUCT DESCRIPTION */}
            <div className="flex flex-col gap-2  mb-3">
              <label htmlFor="description" className="text-black font-bold">
                Product Description
              </label>
              <textarea
                name="description"
                onChange={handleProductchange}
                value={productData.description}
                className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-40 md:45 p-2 rounded-md shadow-sm"
                id="description"
              ></textarea>
            </div>

            {/* PRODUCT MEDIA */}
            {productData.productImages.length > 0 && (
              <p className="text-green-500">
                {productData.productImages.length} images added Successfully
              </p>
            )}

            <div className="flex flex-col gap-2 mb-3">
              <p className="text-[#717678] text-xs lg:text-base">
                Upload an image not more than 50KB
              </p>
              <div className="border border-[#B6B6B6] h-40 w-full rounded-md flex flex-col justify-center items-center relative p-2 shadow-sm">
                <label
                  htmlFor="product_name"
                  className="text-black font-bold self-start"
                >
                  Media
                </label>
                <input
                  type="file"
                  multiple
                  name="productImages"
                  onChange={handleProductchange}
                  accept="image/jpg, image/jpeg, image/png"
                  className=" focus:outline-none active:outline-none px-2 opacity-0 rounded-md w-full h-full"
                  id="product_name"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <button className="border border-black p-2 rounded-md text-xs lg:text-base">
                      Upload new
                    </button>
                    <p className="text-[#717678] text-center text-xs lg:text-base">
                      Accepts Photos, Videos & 3D Models
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGES PREVIEW */}
            {productData.productImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 border border-[#B6B6B6] rounded-md p-4">
                {productData.productImages.map((imageUrl, index) => {
                  return (
                    <div className="relative" key={index}>
                      <div
                        className="absolute top-2 right-2 cursor-pointer bg-white h-5 w-5 rounded-full flex items-center justify-center"
                        onClick={() => removeImage(index)}
                      >
                        <IoIosClose
                          fontSize={22}
                          className="text-primary-500"
                        />
                      </div>
                      <img
                        alt={imageUrl}
                        src={imageUrl}
                        key={index}
                        className="h-auto"
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* SHIPPING DETIALS */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="border border-[#B6B6B6] w-full rounded-md flex flex-col shadow-sm">
                <div className="flex flex-col gap-3 p-3">
                  <label
                    htmlFor="product_name"
                    className="text-black font-bold self-start"
                  >
                    Shipping
                  </label>
                  {/* PHYSICAL PRODUCT */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 cursor-pointer border ${
                        productData.physicalProduct
                          ? "border-orange-500 bg-orange-500"
                          : "border-black"
                      }  rounded-sm relative `}
                    >
                      <FaCheck
                        className={`text-xs absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-white`}
                      />
                      <input
                        type="checkbox"
                        name="physical_product"
                        id="physical_product"
                        checked={productData.physicalProduct}
                        onChange={() =>
                          setProductData({
                            ...productData,
                            physicalProduct: !productData.physicalProduct,
                          })
                        }
                        className="h-full w-full opacity-0"
                      />
                    </div>
                    <p
                      className="text-xs lg:text-base cursor-pointer "
                      onClick={() =>
                        setProductData({
                          ...productData,
                          physicalProduct: !productData.physicalProduct,
                        })
                      }
                    >
                      This is a physical Product
                    </p>
                  </div>

                  {/* PRODUCT WEIGHT */}
                  <h1>Weight</h1>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      name="weight"
                      onChange={handleProductchange}
                      value={productData.weight}
                      className="border border-[#B6B6B6] focus:outline-none active:outline-none w-56 h-10 px-2 rounded-md shadow-sm"
                      placeholder="0.00"
                    />
                    <select
                      name="weight"
                      id="weight"
                      className="border border-[#B6B6B6] focus:outline-none active:outline-none w-16 h-10 px-2 rounded-md shadow-sm"
                    >
                      <option value="kg" className="py-2">
                        kg
                      </option>
                      <option value="lbs">ibs</option>
                      <option value="g">g</option>
                      <option value="tons">tons</option>
                    </select>
                  </div>
                </div>
                <div className="border-t border-[#B6B6B6] p-3">
                  <p className="text-[#FF7900] ">+ Add customs information</p>
                </div>
              </div>
            </div>

            {/* PRODUCT VARIANTS */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="border border-[#B6B6B6] w-full rounded-md flex flex-col shadow-sm">
                <div className="flex flex-col gap-3 p-3">
                  <h1>Variants</h1>
                </div>
                <div className="border-t border-[#B6B6B6] p-3">
                  <p className="text-[#FF7900]">
                    + Add options like size and colour
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="md:col-start-3 md:col-span-1">
            {/* PRODUCT STATUS */}
            <div className="md:flex flex-col gap-2 mb-3 hidden ">
              <label htmlFor="Status" className="text-black font-bold">
                Status
              </label>
              <div
                onClick={() =>
                  setProductData({
                    ...productData,
                    status: !productData.status,
                  })
                }
                className="flex items-center cursor-pointer border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
              >
                {productData.status ? (
                  <span>Active</span>
                ) : (
                  <span>In Active</span>
                )}
              </div>
            </div>

            {/* PRICING */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="border border-[#B6B6B6] w-full rounded-md flex flex-col shadow-sm">
                <div className="flex flex-col gap-3 p-3">
                  <h1 className="font-bold">Pricing</h1>
                  <div>
                    <label htmlFor="price">price</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      onChange={handleProductchange}
                      value={productData.price}
                      className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 cursor-pointer border ${
                        productData.tax
                          ? "border-orange-500 bg-orange-500"
                          : "border-black"
                      }  rounded-sm relative `}
                    >
                      <FaCheck
                        className={`text-xs absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-white`}
                      />
                      <input
                        type="checkbox"
                        name="tax"
                        id="tax"
                        checked={productData.tax}
                        onChange={() =>
                          setProductData({
                            ...productData,
                            tax: !productData.tax,
                          })
                        }
                        className="h-full w-full opacity-0"
                      />
                    </div>
                    <label htmlFor="tax" className="text-xs lg:text-base">
                      Add tax on this product
                    </label>
                  </div>
                  <div>
                    <label htmlFor="costPerItem">Cost per item</label>
                    <input
                      type="number"
                      id="costPerItem"
                      name="costPerItem"
                      onChange={handleProductchange}
                      value={productData.costPerItem}
                      className="my-2 border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT ORGANISATION */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="border border-[#B6B6B6] w-full rounded-md flex flex-col shadow-sm">
                <div className="flex flex-col gap-3 p-3">
                  <h1 className="font-bold">Product Organization</h1>
                  <div>
                    <label
                      htmlFor="product_category"
                      className="text-sm lg:text-base"
                    >
                      Product Category
                    </label>

                    <select
                      name="product_category"
                      id="product_category"
                      className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm my-2"
                    >
                      <option value="Select Category">Select Category</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Jewellery">Jewellery</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vendor">Vendor</label>
                    <input
                      type="text"
                      id="vendor"
                      name="vendor"
                      value={productData.vendor}
                      onChange={handleProductchange}
                      className="my-1 border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="collections">Collections</label>
                    <input
                      type="text"
                      id="collections"
                      name="collections"
                      onChange={handleProductchange}
                      className="my-1 border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT INVENTORY */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="border border-[#B6B6B6] w-full rounded-md flex flex-col shadow-sm">
                <div className="flex flex-col gap-3 p-3">
                  <h1 className="font-bold">Inventory</h1>

                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 cursor-pointer border ${
                        productData.trackQuantity
                          ? "border-orange-500 bg-orange-500"
                          : "border-black"
                      }  rounded-sm relative `}
                    >
                      <FaCheck
                        className={`text-xs absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-white`}
                      />
                      <input
                        type="checkbox"
                        name="track_quantity"
                        id="track_quantity"
                        checked={productData.trackQuantity}
                        className="h-full w-full opacity-0"
                        onChange={() =>
                          setProductData({
                            ...productData,
                            trackQuantity: !productData.trackQuantity,
                          })
                        }
                      />
                    </div>
                    <label htmlFor="track_quantity">Track quantity</label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default AddProduct;
