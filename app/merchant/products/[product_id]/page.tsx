"use client";
import AddHeader from "@/app/components/merchant_components/AddHeader";
import Layout from "@/app/components/merchant_components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProduct } from "@/app/redux/feature/productSlice";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import PageLoading from "../../MerchantLoader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

type Params = {
  params: {
    product_id: string;
  };
};

const SingleProduct = ({ params: { product_id } }: Params) => {
  const [saveLoading, setSaveLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(true);
  const [stockUp, setStockUp] = useState(true);
  const dispatch = useDispatch();

  const path = useRouter();

  //ACCESSING ACTIVESTOREID INFORMATION
  const { activeStoreId } = useSelector((store: any) => store.merchantData);

  //GET TOKEN FROM AUTH STORE
  const { user } = useSelector((state: any) => state.auth);

  //API URL
  const url = `https://cartle-test.onrender.com/stores/${activeStoreId}/products/${product_id}`;

  //REQUESTS FOR PRODUCT INFORMATION
  const getProductInfo = async () => {
    const token = user.token;
    try {
      setPageLoading(true);
      const response = await axios.get(url, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setPageLoading(false);
        dispatch(addProduct(response.data.product));
      }
    } catch (error) {
      setPageLoading(false);
      toast.error("couldn't get product details, please try again later");
      path.push("/merchant/products");
    }
  };

  //RETRIVE PRODUCT INFORMATION FROM STORE
  const { product } = useSelector((store: any) => store.storeProduct);

  //GET PRODUCT IN DETAILS
  useEffect(() => {
    getProductInfo();
  }, []);

  //TEMPORARY STATE TO MANAGE THE PRODUCT DATA UPDATES
  const [productData, setProductData] = useState({
    barcode: product?.barcode,
    collections: product?.collections,
    compareAtPrice: product?.compareAtPrice,
    continueSellingWhenOutOfStock: product?.continueSellingWhenOutOfStock,
    costPerItem: product?.costPerItem,
    countryOfShipment: product?.countryOfShipment,
    description: product?.description,
    discountedPrice: product?.discountedPrice,
    hsCode: product?.hsCode,
    originalPrice: product?.originalPrice,
    price: product?.price,
    productImages: product?.productImages,
    productType: product?.productType,
    requiresShipping: product?.requiresShipping,
    sku: product?.sku,
    status: product?.status,
    tags: product?.tags,
    tax: product?.tax,
    title: product?.title,
    vendor: product?.vendor,
    weight: product?.weight,
    physicalProduct: true,
  });

  //HANDLES PRODUCT UPDATE ON CHANGE
  const handleProductChange = (e: any) => {
    if (
      e.target.name === "weight" ||
      e.target.name === "price" ||
      e.target.name === "costPerItem"
    ) {
      const value = parseInt(e.target.value);
      setProductData({
        ...productData,
        [e.target.name]: value,
      });
    } else if (e.target.name === "collections") {
      setProductData({
        ...productData,
        collections: [...productData.collections, e.target.value],
      });
    } else if (e.target.name === "productImages") {
      if (e.target.files && e.target.files.length > 0) {
        const fileList = e.target.files;
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
        [e.target.name]: e.target.value,
      });
    }
  };

  //UPDATES THE TEMPORARY STATE ONCE THE UPDATE IS SUCCESSFUL AND THE REDUX IS UPDATED
  useEffect(() => {
    setProductData({
      ...productData,
      barcode: product?.barcode,
      collections: product?.collections,
      compareAtPrice: product?.compareAtPrice,
      continueSellingWhenOutOfStock: product?.continueSellingWhenOutOfStock,
      costPerItem: product?.costPerItem,
      countryOfShipment: product?.countryOfShipment,
      description: product?.description,
      discountedPrice: product?.discountedPrice,
      hsCode: product?.hsCode,
      originalPrice: product?.originalPrice,
      price: product?.price,
      productImages: product?.productImages,
      productType: product?.productType,
      requiresShipping: product?.requiresShipping,
      sku: product?.sku,
      status: product?.status,
      tags: product?.tags,
      tax: product?.tax,
      title: product?.title,
      vendor: product?.vendor,
      weight: product?.weight,
      physicalProduct: true,
    });
  }, [product]);

  //SAVE FUNCTIONALITY
  const handleSave = async () => {
    const token = user.token;
    try {
      setSaveLoading(true);
      const response = await axios.put(url, productData, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      toast.success("Product Updated Successfully");
      if (response?.status === 200) {
        setSaveLoading(false);
        setEditProduct(true);

        getProductInfo();
      }
    } catch (error) {
      setSaveLoading(false);
      toast.error("Product Update Failed");
    }
  };

  // HANDLES PRODUCT IMAGE FILTER
  const removeImage = (index: number | string) => {
    if (productData.productImages.length < 2) {
      toast.error("You must have at least 1 image of this product");
    } else {
      const newImages = productData.productImages.filter(
        (_: any, ImgIndex: any) => ImgIndex !== index
      );
      setProductData({
        ...productData,
        productImages: newImages,
      });
    }
  };

  //DELETE PRODUCT FUNCTION
  const deleteProduct = async () => {
    const token = user.token;
    try {
      const response = await axios.delete(url, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.status === 204) {
        setSaveLoading(false);
        toast.success("Product Deleted Successfully");
        setTimeout(() => {
          path.push("/merchant/products");
        }, 1000);
      }
    } catch (error) {
      setSaveLoading(false);
      toast.error("Unable to delete this product");
    }
  };

  return (
    <Layout>
      {pageLoading ? (
        <PageLoading />
      ) : (
        <section className="pb-10">
          {/* ADD HEADER */}
          <ToastContainer />
          <div className="text-[#979DA0] md:flex-row flex-col gap-3 flex item-center h-auto md:h-20 w-full ">
            <div className="w-fit flex  items-center gap-2 order-2 md:order-1">
              <div className="flex items-center gap-2">
                <Link
                  href={"/merchant/products"}
                  className="hidden md:inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    fill="none"
                    className="h-10 w-10 cursor-pointer"
                  >
                    <path
                      d="M47.5 30H12.5"
                      stroke="#121212"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 47.5L12.5 30L30 12.5"
                      stroke="#121212"
                      stroke-width="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div>
                  <h1
                    className={`text-[#0B0B0B] text-2xl lg:text-3xl ${styles.baskerville}`}
                  >
                    {product?.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end order-1 md:order-2">
              <Link href={"/merchant/products"} className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                  fill="none"
                  className="h-10 w-10 cursor-pointer "
                >
                  <path
                    d="M47.5 30H12.5"
                    stroke="#121212"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 47.5L12.5 30L30 12.5"
                    stroke="#121212"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="w-[90%] xl:w-[70%] flex items-center justify-end gap-6">
                <button className="bg-[#979DA0] text-white px-3  py-2 rounded-md">
                  Discard
                </button>

                {editProduct ? (
                  <button
                    className="bg-[#DFE1E2] hover:bg-[#979DA0] text-white px-3  py-2 rounded-md flex items-center gap-2"
                    onClick={() => setEditProduct(!editProduct)}
                  >
                    <span>Edit</span>
                  </button>
                ) : (
                  <button
                    className="bg-[#DFE1E2] hover:bg-[#979DA0] text-white px-3  py-2 rounded-md flex items-center gap-2"
                    onClick={handleSave}
                  >
                    {saveLoading && <LoadingSpinner />} <span>Save</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid gird-cols-1 md:grid-cols-3 gap-4 my-6 mx-auto">
            <section className="md:col-start-1 md:col-span-2 flex flex-col gap-4">
              <div className="flex flex-row md:flex-col gap-2 mb-3 ">
                {/* PRODUCT NAME */}
                <div className="flex flex-col gap-2 mb-3 ">
                  <label
                    htmlFor="product_name"
                    className="text-black font-bold"
                  >
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="title"
                    disabled={editProduct}
                    onChange={handleProductChange}
                    value={productData.title}
                    className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                    id="product_name"
                  />
                </div>

                {/* PRODUCT STATUS */}
                <div className="flex flex-col gap-2 mb-3 md:hidden flex-1">
                  <label htmlFor="Status" className="text-black font-bold">
                    Status
                  </label>

                  <button
                    disabled={editProduct}
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
                  </button>
                </div>
              </div>

              {/* PRODUCT DESCRIPTION */}
              <div className="flex flex-col gap-2  mb-3">
                <label htmlFor="description" className="text-black font-bold">
                  Product Description
                </label>
                <textarea
                  name="description"
                  disabled={editProduct}
                  onChange={handleProductChange}
                  value={productData.description}
                  className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-40 md:45 p-2 rounded-md shadow-sm"
                  id="description"
                ></textarea>
              </div>

              {/* PRODUCT MEDIA */}

              {/* IMAGES PREVIEW */}
              <div className="border border-[#B6B6B6] rounded-md p-4">
                <div className="flex items-center justify-between mb-5">
                  <label
                    htmlFor="media"
                    className="text-black font-bold self-start"
                  >
                    Media
                  </label>

                  <button className="text-primary-500 font-bold text-xs relative w-20">
                    <input
                      type="file"
                      multiple
                      disabled={editProduct}
                      name="productImages"
                      onChange={handleProductChange}
                      accept="image/jpg, image/jpeg, image/png"
                      className=" focus:outline-none active:outline-none opacity-0 w-full"
                      id="product_name"
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 w-full ">
                      <span className="text-sm">add new</span>
                    </div>
                  </button>
                </div>

                {productData?.productImages?.length > 0 && (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {productData?.productImages?.map(
                      (imageUrl: string, index: number | string) => {
                        return (
                          <div
                            className="relative rounded-md overflow-hidden"
                            key={index}
                          >
                            <button
                              className="absolute top-2 right-2 cursor-pointer bg-white h-5 w-5 rounded-full flex items-center justify-center"
                              disabled={editProduct}
                              onClick={() => removeImage(index)}
                            >
                              <IoIosClose
                                fontSize={22}
                                className="text-primary-500"
                              />
                            </button>
                            <img
                              alt={imageUrl}
                              src={imageUrl}
                              key={index}
                              className="h-auto w-full"
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                )}
              </div>

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
                          disabled={editProduct}
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
                        onChange={handleProductChange}
                        disabled={editProduct}
                        value={productData.weight}
                        className="border border-[#B6B6B6] focus:outline-none active:outline-none w-56 h-10 px-2 rounded-md shadow-sm"
                        placeholder="0.00"
                        min="0"
                        max="5000"
                        step="0.01"
                      />
                      <select
                        name="weight"
                        id="weight"
                        className="border border-[#B6B6B6] focus:outline-none active:outline-none w-16 h-10 px-2 rounded-md shadow-sm"
                        disabled={editProduct}
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
                    <p className="text-[#FF7900] ">DHL shipping company</p>
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
                    <p className="text-[#FF7900]">Pink, White, Blue</p>
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
                <button
                  disabled={editProduct}
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
                </button>
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
                        disabled={editProduct}
                        onChange={handleProductChange}
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
                          disabled={editProduct}
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
                        onChange={handleProductChange}
                        value={productData.costPerItem}
                        className="my-2 border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* PRODUCT ORGANIZATION */}
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
                        disabled={editProduct}
                        className="border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm my-2"
                      >
                        <option value="Select Category">Select Category</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vendor">Vendor</label>
                      <input
                        type="text"
                        id="vendor"
                        disabled={editProduct}
                        name="vendor"
                        value={productData.vendor}
                        onChange={handleProductChange}
                        className="my-1 border border-[#B6B6B6] focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="collections">Collections</label>
                      <input
                        type="text"
                        id="collections"
                        name="collections"
                        onChange={handleProductChange}
                        disabled={editProduct}
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
                    <div className="flex items-center justify-between">
                      <p>11 Pieces left</p>
                      <span
                        className="text-xs text-orange-500 font-bold cursor-pointer"
                        onClick={() => setStockUp(!stockUp)}
                      >
                        {stockUp ? (
                          <span>Update Stock</span>
                        ) : (
                          <span>save</span>
                        )}
                      </span>
                    </div>
                    <div>
                      <input
                        type="number"
                        disabled={stockUp}
                        className={`my-1 border ${
                          stockUp ? " border-[#B6B6B6]" : "border-orange-500"
                        }  focus:outline-none active:outline-none w-full h-10 px-2 rounded-md shadow-sm`}
                      />
                    </div>

                    {/* <div className="flex items-center gap-2">
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
                </div> */}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* DELETE PRODUCT */}
          <article className="border rounded-md flex flex-col md:flex-row items-start md:items-center gap-2 justify-between  p-2">
            <div>
              <h1 className="text-sm md:text-base font-bold">
                Delete this product
              </h1>
              <p className="text-xs md:text-sm">
                Once you delete a Product, there is no going back. Please be
                certain.
              </p>
            </div>
            <button
              className="text-red-500 bg-gray-200 p-1 rounded-md inset-4 capitalize border-2 border-gray-600 text-xs md:text-sm flex items-center gap-1"
              disabled={editProduct}
              onClick={deleteProduct}
            >
              <RiDeleteBin6Line />
              <span>Delete this Product</span>
            </button>
          </article>
        </section>
      )}
    </Layout>
  );
};

export default SingleProduct;
