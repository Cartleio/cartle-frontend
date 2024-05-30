"use client";
import LayoutEffect from "./LayoutEffect";
import { UserCircleIcon,CurrencyDollarIcon,BuildingStorefrontIcon,CalendarDaysIcon,AcademicCapIcon ,LinkIcon} from "@heroicons/react/24/outline";
import { useId } from "react";



const Services = (): JSX.Element => {
    const services = [
        {
            id: useId(),
            icon: (
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6063 11.8112C21.6064 10.51 21.3476 9.22169 20.8446 8.02161C20.3415 6.82155 19.6047 5.73371 18.6768 4.82145C17.7489 3.90921 16.6486 3.19089 15.4401 2.70839C14.2318 2.22588 12.9393 1.9889 11.6383 2.01121C9.14071 2.08548 6.76264 3.09763 4.97769 4.84623C3.19276 6.59485 2.13189 8.95162 2.00629 11.4472C1.9466 13.1125 2.3125 14.7655 3.06945 16.25C3.8264 17.7344 4.9494 19.0014 6.33228 19.9312C6.72202 20.1846 7.04254 20.5309 7.26496 20.939C7.48738 21.3473 7.6047 21.8044 7.60629 22.2692V24.4112H16.0063V22.2692C16.0063 21.8056 16.1215 21.3494 16.3415 20.9413C16.5614 20.5332 16.8792 20.1861 17.2663 19.9312C18.5994 19.0367 19.6925 17.8284 20.4492 16.4126C21.206 14.9967 21.6034 13.4166 21.6063 11.8112Z" stroke="#FF6B3A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.0094 28.625C14.7977 29.5337 13.324 30.025 11.8094 30.025C10.2947 30.025 8.82105 29.5337 7.60938 28.625" stroke="#FF6B3A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            ),
            header: "Think of a business idea",
            cardBody: "Think of a new way to make money and select the best one for you.",
            buttonText: "Get started",
        },
        {
            id: useId(),
            icon: (
                <svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.8029 0.0964355C31.448 0.0964355 32.7816 1.45905 32.7816 3.13991V18.3573C34.0154 18.3573 35.0156 19.3793 35.0156 20.6399C35.0156 21.9006 34.0154 22.9225 32.7816 22.9225H2.24966C1.01583 22.9225 0.015625 21.9006 0.015625 20.6399C0.015625 19.3793 1.01583 18.3573 2.24966 18.3573V3.13991C2.24966 1.45905 3.5833 0.0964355 5.2284 0.0964355H29.8029ZM32.7816 19.879H2.24966C1.83838 19.879 1.505 20.2197 1.505 20.6399C1.505 21.0601 1.83838 21.4008 2.24966 21.4008H32.7816C33.1929 21.4008 33.5263 21.0601 33.5263 20.6399C33.5263 20.2197 33.1929 19.879 32.7816 19.879ZM29.8029 1.61817H5.2284C4.40585 1.61817 3.73903 2.29948 3.73903 3.13991V18.3573H31.2922V3.13991C31.2922 2.29948 30.6254 1.61817 29.8029 1.61817ZM17.5402 3.90078C25.6229 4.04299 25.6238 15.9302 17.5404 16.0734C11.6223 16.1903 9.15374 8.21889 13.9992 5.0132C14.5031 4.7054 14.2599 4.84009 14.5898 4.66692C14.9117 4.49797 14.5192 4.69666 15.2539 4.33704C15.9611 4.05587 16.7327 3.90078 17.5402 3.90078ZM15.6343 12.6898L14.5825 13.7305C15.2312 14.2334 16.0133 14.5748 16.8668 14.6938V13.2169C16.4161 13.1251 15.9988 12.9422 15.6343 12.6898ZM19.4461 12.6898C19.0816 12.9422 18.6644 13.1251 18.2137 13.2169V14.6938C19.0671 14.5748 19.8493 14.2334 20.4979 13.7305L19.4461 12.6898ZM22.3131 10.5279H20.8272C20.7549 10.9598 20.5976 11.3636 20.3727 11.7218L21.4324 12.7703C21.9048 12.1252 22.2175 11.3588 22.3131 10.5279ZM14.2532 10.5279H12.7674C12.8629 11.3588 13.1757 12.1252 13.6481 12.7703L14.7077 11.7218C14.4828 11.3635 14.3256 10.9598 14.2532 10.5279ZM17.5403 8.02245C14.9312 8.06835 14.9308 11.9056 17.5402 11.9518C20.1493 11.9059 20.1497 8.06875 17.5403 8.02245ZM13.7571 7.06055C13.2742 7.67043 12.9386 8.39955 12.8031 9.19508H14.3055C14.4051 8.79716 14.5779 8.42779 14.8089 8.10126L13.7571 7.06055ZM21.3234 7.06055L20.2716 8.10126C20.5026 8.42779 20.6754 8.79716 20.775 9.19508H22.2773C22.1419 8.39955 21.8063 7.67043 21.3234 7.06055ZM16.8668 5.28049C16.076 5.39075 15.3464 5.69218 14.7276 6.13591L15.7872 7.1844C16.114 6.98355 16.4779 6.83662 16.8668 6.75737V5.28049ZM18.2137 5.28053V6.75741C18.6025 6.83667 18.9665 6.9836 19.2933 7.18445L20.3529 6.136C19.734 5.69218 19.0045 5.3908 18.2137 5.28053Z" fill="#FF6B3A"/>
                </svg>

            ),
            header: "Take this business online ",
            cardBody: "Introduce this business to your social media platforms and tell your friends.",
            buttonText: "Create Portfolio",
        },
        {
            id: useId(),
            icon: (
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.96875 23.2598C11.1769 23.2598 12.1563 24.2392 12.1563 25.4473C12.1563 26.6553 11.1769 27.6348 9.96875 27.6348C8.76062 27.6348 7.78125 26.6553 7.78125 25.4473C7.78125 24.2392 8.76062 23.2598 9.96875 23.2598Z" stroke="#FF6B3A" stroke-width="3"/>
                    <path d="M23.0938 23.2598C24.3018 23.2598 25.2813 24.239 25.2813 25.4473C25.2813 26.6553 24.3018 27.6348 23.0938 27.6348C21.8857 27.6348 20.9062 26.6553 20.9062 25.4473C20.9062 24.239 21.8857 23.2598 23.0938 23.2598Z" stroke="#FF6B3A" stroke-width="3"/>
                    <path d="M2.30838 0.353231C1.73851 0.15287 1.11412 0.452427 0.913777 1.02228C0.713417 1.59216 1.01297 2.21654 1.58283 2.41689L2.30838 0.353231ZM29.1549 11.4224L30.226 11.6433L30.2275 11.6366L29.1549 11.4224ZM7.35322 11.2434V7.27433H5.16572V11.2434H7.35322ZM2.68931 0.487149L2.30838 0.353231L1.58283 2.41689L1.96376 2.55082L2.68931 0.487149ZM14.9795 20.708H22.7129V18.5205H14.9795V20.708ZM7.35322 7.27433C7.35322 6.24306 7.35471 5.3825 7.27901 4.68318C7.20065 3.9593 7.03089 3.29908 6.61967 2.69731L4.81358 3.9315C4.94521 4.12413 5.04685 4.3887 5.10421 4.91859C5.16424 5.47306 5.16572 6.19524 5.16572 7.27433H7.35322ZM1.96376 2.55082C2.93736 2.89312 3.5772 3.11997 4.04803 3.35098C4.49022 3.56795 4.68516 3.74358 4.81358 3.9315L6.61967 2.69731C6.20524 2.09085 5.65421 1.70244 5.01162 1.38715C4.39763 1.08588 3.61387 0.812212 2.68931 0.487149L1.96376 2.55082ZM5.16572 11.2434C5.16572 13.3616 5.1856 14.8891 5.38547 16.056C5.59885 17.3019 6.02489 18.194 6.82147 19.0341L8.40891 17.5291C7.94201 17.0366 7.69017 16.5544 7.54157 15.6868C7.37946 14.7402 7.35322 13.4149 7.35322 11.2434H5.16572ZM14.9795 18.5205C12.9133 18.5205 11.4797 18.5179 10.3995 18.3647C9.35708 18.2169 8.80637 17.9482 8.40891 17.5291L6.82147 19.0341C7.68752 19.9476 8.78537 20.3453 10.0924 20.5305C11.3617 20.7106 12.9784 20.708 14.9795 20.708V18.5205ZM6.25947 7.02881H23.9501V4.84131H6.25947V7.02881ZM28.0836 11.2016L27.3549 14.7377L29.4973 15.1793L30.226 11.6433L28.0836 11.2016ZM23.9501 7.02881C25.199 7.02881 26.2982 7.03027 27.1656 7.12723C27.5967 7.17542 27.9193 7.24235 28.1459 7.32201C28.3813 7.40471 28.4187 7.46816 28.3999 7.44355L30.1337 6.10974C29.791 5.66433 29.3092 5.41217 28.8711 5.2582C28.4241 5.10116 27.9187 5.01029 27.4087 4.95328C26.394 4.83985 25.1585 4.84131 23.9501 4.84131V7.02881ZM30.2275 11.6366C30.4743 10.4 30.6838 9.36249 30.7351 8.53145C30.7878 7.67657 30.6905 6.83364 30.1337 6.10974L28.3999 7.44355C28.4903 7.56122 28.5902 7.7731 28.5517 8.39668C28.5118 9.0441 28.3417 9.9087 28.0823 11.2083L30.2275 11.6366ZM22.7129 20.708C23.8237 20.708 24.7558 20.7099 25.5073 20.6179C26.2885 20.5223 27.0011 20.3134 27.6231 19.8064L26.2411 18.1107C26.0586 18.2594 25.7997 18.3783 25.2416 18.4467C24.6536 18.5186 23.8785 18.5205 22.7129 18.5205V20.708ZM27.3549 14.7377C27.1195 15.8793 26.9611 16.6382 26.772 17.1995C26.5925 17.7322 26.4237 17.9619 26.2411 18.1107L27.6231 19.8064C28.245 19.2995 28.5936 18.6439 28.845 17.8981C29.0868 17.1806 29.273 16.2672 29.4973 15.1793L27.3549 14.7377Z" fill="#FF6B3A"/>
                    </svg>

            ),
            header: "Bring your business to Cartle",
            cardBody: "Bring your business to cartle no matter what platform you had been using previously.",
            buttonText: "Build Storefront",
        },
        {
            id: useId(),
            icon: (
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.3724 30.0934H28.6224C29.0092 30.0934 29.3801 29.9398 29.6536 29.6663C29.9271 29.3928 30.0807 29.0219 30.0807 28.6351V2.38509C30.0807 1.99832 29.9271 1.62738 29.6536 1.35389C29.3801 1.0804 29.0092 0.926758 28.6224 0.926758H2.3724C1.98562 0.926758 1.61469 1.0804 1.3412 1.35389C1.06771 1.62738 0.914063 1.99832 0.914062 2.38509V28.6351C0.914063 29.0219 1.06771 29.3928 1.3412 29.6663C1.61469 29.9398 1.98562 30.0934 2.3724 30.0934ZM3.83073 12.5934H6.7474V27.1768H3.83073V12.5934ZM27.1641 27.1768H9.66406V12.5934H27.1641V27.1768ZM3.83073 3.84342H27.1641V9.67676H3.83073V3.84342Z" fill="#FF6B3A"/>
                    </svg>

            ),
            header: "Create a website for your business",
            cardBody: "Setup your events and add paid or free tickets on your profile, help your customers reserve seats for your trainings with ease.",
            buttonText: "Join Waitlist",
            isScrollTrigger: true
        },
        {
            id: useId(),
            icon: (
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.4323 5.84277H19.849V7.00944H33.849V33.8428H1.18229V7.00944H15.1823V5.84277H0.598958C0.248958 5.84277 0.015625 6.07611 0.015625 6.42611V34.4261C0.015625 34.7761 0.248958 35.0094 0.598958 35.0094H34.4323C34.7823 35.0094 35.0156 34.7761 35.0156 34.4261V6.42611C35.0156 6.07611 34.7823 5.84277 34.4323 5.84277Z" fill="#FF6B3A"/>
                    <path d="M0.015625 0.00976562V1.17643H16.9323V9.3431H4.09896C3.74896 9.3431 3.51562 9.57643 3.51562 9.92643V20.4264C3.51562 20.7764 3.74896 21.0098 4.09896 21.0098H30.9323C31.2823 21.0098 31.5156 20.7764 31.5156 20.4264V9.92643C31.5156 9.57643 31.2823 9.3431 30.9323 9.3431H18.099V1.17643H35.0156V0.00976562H0.015625ZM30.349 19.8431H4.68229V10.5098H30.349V19.8431Z" fill="#FF6B3A"/>
                    <path d="M22.7682 18.0931H23.9349C24.6349 18.0931 25.1016 17.6264 25.1016 16.9264V15.7598C25.1016 15.0598 24.6349 14.5931 23.9349 14.5931H22.7682V13.4264H23.9349V14.0098H25.1016V13.4264C25.1016 12.7264 24.6349 12.2598 23.9349 12.2598H22.7682C22.0682 12.2598 21.6016 12.7264 21.6016 13.4264V14.5931C21.6016 15.2931 22.0682 15.7598 22.7682 15.7598H23.9349V16.9264H22.7682V16.3431H21.6016V16.9264C21.6016 17.6264 22.0682 18.0931 22.7682 18.0931Z" fill="#FF6B3A"/>
                    <path d="M16.349 18.0931H18.6823C19.3823 18.0931 19.849 17.6264 19.849 16.9264V13.4264C19.849 12.7264 19.3823 12.2598 18.6823 12.2598H16.349C15.999 12.2598 15.7656 12.4931 15.7656 12.8431V17.5098C15.7656 17.8598 15.999 18.0931 16.349 18.0931ZM16.9323 13.4264H18.6823L18.7406 16.9264H18.6823H16.9323V13.4264Z" fill="#FF6B3A"/>
                    <path d="M11.0964 16.3431H12.8464V18.0931H14.013V12.8431C14.013 12.4931 13.7797 12.2598 13.4297 12.2598H10.513C10.163 12.2598 9.92969 12.4931 9.92969 12.8431V18.0931H11.0964V16.3431ZM12.8464 13.4264V15.1764H11.0964V13.4264H12.8464Z" fill="#FF6B3A"/>
                    <path d="M28.0182 14.5928H26.8516V15.7594H28.0182V14.5928Z" fill="#FF6B3A"/>
                    <path d="M8.18229 14.5928H7.01562V15.7594H8.18229V14.5928Z" fill="#FF6B3A"/>
                    <path d="M31.5156 23.3431C31.5156 22.9931 31.2823 22.7598 30.9323 22.7598H4.09896C3.74896 22.7598 3.51562 22.9931 3.51562 23.3431V28.0098C3.51562 28.3598 3.74896 28.5931 4.09896 28.5931H30.9323C31.2823 28.5931 31.5156 28.3598 31.5156 28.0098V23.3431ZM30.349 27.4264H4.68229V23.9264H30.349V27.4264Z" fill="#FF6B3A"/>
                    <path d="M4.68229 30.9268H3.51562V32.0934H4.68229V30.9268Z" fill="#FF6B3A"/>
                    <path d="M7.01823 30.9268H5.85156V32.0934H7.01823V30.9268Z" fill="#FF6B3A"/>
                    <path d="M9.34635 30.9268H8.17969V32.0934H9.34635V30.9268Z" fill="#FF6B3A"/>
                    <path d="M26.8464 30.9268H25.6797V32.0934H26.8464V30.9268Z" fill="#FF6B3A"/>
                    <path d="M24.5156 30.9268H10.5156V32.0934H24.5156V30.9268Z" fill="#FF6B3A"/>
                    <path d="M29.1823 30.9268H28.0156V32.0934H29.1823V30.9268Z" fill="#FF6B3A"/>
                    <path d="M31.5182 30.9268H30.3516V32.0934H31.5182V30.9268Z" fill="#FF6B3A"/>
                    </svg>

            ),
            header: "Advertise your store",
            cardBody: "Explore our list of templates, post your business link on all social platforms. Boost your sales by telling people about it and design a website for your business of your dreams.",
            buttonText: "Join Waitlist",
        },
        {   
            id: useId(),
            icon: (
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7817 5.02856V7.01099H19.2803V0.759521H13.0322V3.25806H15.0146L10.3696 7.89966L6.62012 5.40112L0.898438 11.1262L2.66553 12.8933L6.94141 8.61743L10.6909 11.1194L16.7817 5.02856ZM1.78027 15.761H10.5303V18.2595H1.78027V15.761Z" fill="#FF6B3A"/>
                    </svg>

            ),
            header: "Manage your sales and orders ",
            cardBody: "Monitor which products sell out faster and who has ordered what very easily.",
            buttonText: "Join Waitlist",
        },
    ];

    return (
        <>
        <LayoutEffect
     className="duration-1000 delay-300"
     isInviewState={{
         trueState: "opacity-1",
         falseState: "opacity-0 translate-y-6"
     }}
>

<section className="grid gap-16 pt-6 pb-8 bg-[transparent] px-3 lg:px-20">
            <div className="grid gap-4 lg:text-center">
                <h2 className="text-3xl sm:text-2xl font-bold leading-[120%] text-black  lg:text-5xl lg:leading-[120%]">
               How to Grow Your Business with<span className="text-[#FF7600]"> Cartle</span>
                </h2>

                <p className="text-gray-500">
                Cartle is designed to help you grow your business at every stage. Whether you are just started or you are looking to scale. We have tools to help you every step of the way</p>
            </div>

        
            <div className="grid gap-4 lg:grid-cols-3">
                {services.map((service): JSX.Element => (
                    <div className="cursor-pointer border border-gray-50 rounded-2xl bg-white p-8 grid gap-10 shadow-sm transition-colors duration-300 ease-in-out group/card hover:bg-[#FF7600] hover:text-gray-300" key={service.id}>
                        <div className="grid gap-4">
                            <div className="w-12 rounded-full text-[#FF7600]" >
                                {service.icon}
                            </div>

                            <h3 className="text-black font-semibold text-xl group-hover/card:text-white lg:text-2xl">
                                {service.header}
                            </h3>

                            <p className="leading-[140%] text-sm group-hover/card:text-[#f8f8fa] text-gray-500 hover:text-gray-300">
                                {service.cardBody}
                            </p>
                        </div>

                      {/**
                       *   <div className="inline-block w-auto">
                            {service.isScrollTrigger ? (
                                <button className="rounded-[2.75rem] border border-[rgba(42,_44,_96,_0.40)] inline-flex py-3 px-4 items-center gap-4 font-medium text-sm text-brand-dark-purple w-auto hover:bg-brand-dark-purple hover:text-white duration-300 ease-in-out transition-colors group group-hover/card:border-[#f8f8fa] group-hover/card:text-[#f8f8fa] hover:group-hover/card:bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-gray-500 hover:text-gray-30" type="button" onClick={() => {
                                    document.querySelector("#virtual-card")?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }}>
                                    {service.buttonText}

                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-white group-hover/card:fill-[#f8f8fa] transition-colors duration-300 ease-in-out" d="M8.00016 1.33333C4.32683 1.33333 1.3335 4.32667 1.3335 8C1.3335 11.6733 4.32683 14.6667 8.00016 14.6667C11.6735 14.6667 14.6668 11.6733 14.6668 8C14.6668 4.32667 11.6735 1.33333 8.00016 1.33333ZM9.86016 8.35333L7.50683 10.7067C7.40683 10.8067 7.28016 10.8533 7.1535 10.8533C7.02683 10.8533 6.90016 10.8067 6.80016 10.7067C6.60683 10.5133 6.60683 10.1933 6.80016 10L8.80016 8L6.80016 6C6.60683 5.80667 6.60683 5.48667 6.80016 5.29333C6.9935 5.1 7.3135 5.1 7.50683 5.29333L9.86016 7.64667C10.0602 7.84 10.0602 8.16 9.86016 8.35333Z" fill="#2a2c60" />
                                    </svg>
                                </button>
                            ) : (
                                <Link className="rounded-[2.75rem] border border-[rgba(42,_44,_96,_0.40)] inline-flex py-3 px-4 items-center gap-4 font-medium text-sm text-brand-dark-purple w-auto hover:bg-brand-dark-purple hover:text-white duration-300 ease-in-out transition-colors group group-hover/card:border-[#f8f8fa] group-hover/card:text-[#f8f8fa] hover:group-hover/card:bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)]" href="#">
                                    {service.buttonText}

                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-white group-hover/card:fill-[#f8f8fa] transition-colors duration-300 ease-in-out" d="M8.00016 1.33333C4.32683 1.33333 1.3335 4.32667 1.3335 8C1.3335 11.6733 4.32683 14.6667 8.00016 14.6667C11.6735 14.6667 14.6668 11.6733 14.6668 8C14.6668 4.32667 11.6735 1.33333 8.00016 1.33333ZM9.86016 8.35333L7.50683 10.7067C7.40683 10.8067 7.28016 10.8533 7.1535 10.8533C7.02683 10.8533 6.90016 10.8067 6.80016 10.7067C6.60683 10.5133 6.60683 10.1933 6.80016 10L8.80016 8L6.80016 6C6.60683 5.80667 6.60683 5.48667 6.80016 5.29333C6.9935 5.1 7.3135 5.1 7.50683 5.29333L9.86016 7.64667C10.0602 7.84 10.0602 8.16 9.86016 8.35333Z" fill="#2a2c60" />
                                    </svg>
                                </Link>
                            )}
                        </div>
                       */}
                    </div>
                ))}
            </div>
        </section>
</LayoutEffect>
        </>
        
    );
};

export default Services;
