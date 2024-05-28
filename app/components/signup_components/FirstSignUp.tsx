"use client";
import style from "../../../styles/Home.module.css";
type FormData = {
  firstName: string;
  storeName: string;
  storeAddress: string;
  phoneNumber: number | undefined;
  sellingItems: string[];
  goods: string[];
};

type FirstSignUpProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
export default function FirstSignUp({
  formData,
  setFormData,
}: FirstSignUpProps): JSX.Element {
  const handlePersonalForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="py-4">
        <h1
          className={`text-2xl lg:text-4xl text-primary-500 ${style.baskerville}`}
        >
          Store Information
        </h1>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 md:gap-x-[20px] gap-y-[20px]`}
      >
        <div className="md:col-start-1 md:col-end-2">
          <div>
            <label htmlFor="firstname" className="font-semibold">
              First Name
            </label>
          </div>
          <input
            type="text"
            name="firstName"
            id="firstname"
            placeholder="John"
            className="rounded-[10px] p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
            value={formData.firstName}
            onChange={handlePersonalForm}
          />
        </div>

        <div className="md:col-start-2 md:col-end-3">
          <div>
            <label htmlFor="storeName" className="font-semibold">
              Store Name
            </label>
          </div>
          <input
            type="text"
            name="storeName"
            id="storeName"
            className="rounded-[10px] p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
            value={formData.storeName}
            onChange={handlePersonalForm}
          />
        </div>

        <div>
          <div>
            <label htmlFor="storeAddress" className="font-semibold">
              Store Adddress
            </label>
          </div>
          <input
            type="text"
            name="storeAddress"
            id="storeAddress"
            className="rounded-[10px] p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
            value={formData.storeAddress}
            onChange={handlePersonalForm}
          />
        </div>

        <div>
          <div>
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
          </div>
          <input
            type="number"
            name="phoneNumber"
            id="phone"
            className="rounded-[10px] p-2 bg-[#EFF0F1] w-full focus:outline-none focus:border-none my-1"
            value={formData.phoneNumber}
            onChange={handlePersonalForm}
          />
        </div>
      </div>
    </>
  );
}
