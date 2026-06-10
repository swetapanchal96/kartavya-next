"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/Partnership-banner.webp";

import {
  FaCheckCircle,
  FaEnvelope,
  FaLeaf,
  FaPhoneAlt,
  FaSeedling,
  FaUserTie,
} from "react-icons/fa";
import axios from "axios";
import { apiUrl } from "@/config";

type RegistrationType = "1" | "2";

// const partnershipTabs = [
//   {
//     id: "partners",
//     title: "International Partners",
//   },
//   {
//     id: "distributor",
//     title: "Become Distributor",
//   },
// ];

interface FormDataType {
  full_name: string;
  phone_number: string;
  email_address: string;
  business_name: string;
  city_name: string;
  state_name: string;
  country_name: string;
  Distribution_Network: string;
  message: string;
}

const initialFormData: FormDataType = {
  full_name: "",
  phone_number: "",
  email_address: "",
  city_name: "",
  state_name: "",
  country_name: "",
  business_name: "",
  Distribution_Network: "",
  message: "",
};

export default function PartnershipPage() {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] =
    useState<FormDataType>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        registration_type: activeTab,
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        email_address: formData.email_address,
        city_name: formData.city_name,
        state_name: formData.state_name,
        business_name: formData.business_name,
        Distribution_Network: formData.Distribution_Network,
        message: formData.message,
      };

      const response = await axios.post(
        `${apiUrl}/partnership-submit`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setFormData(initialFormData);
      } else {
        setErrorMessage("Something went wrong.");
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
        "Failed to submit partnership form."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb
        title="Partnership"
        // subtitle="Growing Trust Since Years"
        backgroundImage={header.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partnership" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#f8f8f8] py-15 md:py-20">
        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-12">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <span className="mb-2 inline-block text-md md:text-lg font-semibold uppercase tracking-[6px] text-primary">
              Grow With Us
            </span>

            <h2 className="text-3xl font-black uppercase  text-primary sm:text-5xl md:text-6xl">
              Become Our
              <span className="block text-secondary">
                Trusted Partner
              </span>
            </h2>
          </div>

          {/* Main Layout */}
          <div className="grid overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)] xl:grid-cols-[42%_58%]">
            {/* LEFT SIDE */}
            <div className="relative overflow-hidden bg-primary p-6 lg:p-14">
              {/* Decorative */}
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border-40 border-secondary/10" />

              <div className="relative z-10">
                {/* Small Label */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-0.5 w-14 bg-secondary" />

                  <span className="text-sm font-bold uppercase tracking-[5px] text-secondary">
                    Partnership Program
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-black uppercase  text-white md:text-5xl">
                  Let’s Grow
                  <span className="block text-secondary">
                    Together
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-4 text-md md:text-lg  text-white/70">
                  Partner with Kartavya Seeds and become part of a trusted
                  agricultural network focused on innovation, quality and
                  sustainable farming growth.
                </p>

                {/* Benefits */}
                <div className="mt-7 space-y-3">
                  {[
                    "Premium Quality Seed Portfolio",
                    "Strong Market Support",
                    "Reliable Supply Chain",
                    "Long-Term Business Growth",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="mt-1 text-secondary">
                        <FaCheckCircle />
                      </div>

                      <p className="text-md md:text-lg text-white/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Box */}
                {/* <div className="mt-14 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-dark-grey">
                      <FaPhoneAlt className="text-xl" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm uppercase tracking-[3px] text-white/50">
                        Need Assistance?
                      </span>

                      <a href="tel:+917046777222" className="mt-2 text-2xl font-black text-white hover:text-secondary">
                        +91 7046 777 222
                      </a>
                    </div>
                  </div>
                </div> */}

                <div className="mt-5 rounded-2xl md:rounded-[30px] border border-white/10 bg-white/5 p-3 md:p-6 backdrop-blur-md">
                  <div className="space-y-5">

                    {/* Phone */}
                    <div className="flex items-start gap-3 md:gap-5">

                      <div className="flex w-10 h-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-secondary text-dark-grey">
                        <FaPhoneAlt className="text-md md:text-xl" />
                      </div>

                      <div>
                        {/* <span className="text-sm uppercase tracking-[3px] text-white/50">
                          Export Inquiry
                        </span> */}

                        <a
                          href="tel:+917046777222"
                          className="mt-2 block text-lg md:text-xl font-black text-white hover:text-secondary"
                        >
                         +91 7046 777 222
                        </a>
                      </div>

                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 md:gap-5">

                      <div className="flex w-10 h-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-secondary text-dark-grey">
                        <FaEnvelope className="text-md md:text-xl" />
                      </div>

                      <div>
                        {/* <span className="text-sm uppercase tracking-[3px] text-white/50">
                          Export Inquiry
                        </span> */}

                        <a
                          href="mailto:info@kartavyaseeds.com"
                          className="mt-2 block text-lg font-bold text-white hover:text-secondary break-all"
                        >
                          info@kartavyaseeds.com
                        </a>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Export Inquiry */}
                <div className="mt-5 rounded-2xl md:rounded-[30px] border border-white/10 bg-white/5 p-3 md:p-6 backdrop-blur-md">
                  <div className="space-y-5">

                    {/* Phone */}
                    <div className="flex items-center md:items-start gap-3 md:gap-5">

                      <div className="flex w-10 h-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-secondary text-dark-grey">
                        <FaPhoneAlt className="text-md md:text-xl" />
                      </div>

                      <div>
                        <span className="text-sm uppercase tracking-[3px] text-white/50">
                          Export Inquiry
                        </span>

                        <a
                          href="tel:+917990189941"
                          className="mt-0 md:mt-2 block text-lg md:text-xl font-black text-white hover:text-secondary"
                        >
                          +91 79901 89941
                        </a>
                      </div>

                    </div>

                    {/* Email */}
                    <div className="flex items-center md:items-start gap-3 md:gap-5">

                      <div className="flex w-10 h-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-secondary text-dark-grey">
                        <FaEnvelope className="text-xl" />
                      </div>

                      <div>
                        <span className="text-sm uppercase tracking-[3px] text-white/50">
                          Export Inquiry
                        </span>

                        <a
                          href="mailto:export@kartavyaseeds.com"
                          className="mt-0 md:mt-2 block text-lg font-bold text-white hover:text-secondary break-all"
                        >
                          export@kartavyaseeds.com
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-8 lg:p-10">
              {/* Tabs */}
              <div className="mb-3 flex flex-wrap gap-4">
                {/* {partnershipTabs.map((tab) => ( */}
                <button
                  onClick={() => setActiveTab(1)}
                  className={`rounded-full px-4 py-4 text-sm font-bold uppercase tracking-[3px] transition duration-300 ${activeTab === 1
                    ? "bg-secondary text-dark-grey shadow-[0_10px_30px_rgba(180,211,66,0.35)]"
                    : "border border-[#e5e5e5] bg-white text-[#666] hover:border-secondary/30"
                    }`}
                >
                  Become International Partner
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`rounded-full px-4 py-4 text-sm font-bold uppercase tracking-[3px] transition duration-300 ${activeTab === 2
                    ? "bg-secondary text-dark-grey shadow-[0_10px_30px_rgba(180,211,66,0.35)]"
                    : "border border-[#e5e5e5] bg-white text-[#666] hover:border-secondary/30"
                    }`}
                >
                  Become Distributor
                </button>
                {/* // ))} */}
              </div>

              {/* Form Heading */}
              <div className="mb-3">
                <div className="mb-2 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    {activeTab === 1 ? (
                      <FaUserTie className="text-xl" />
                    ) : (
                      <FaSeedling className="text-xl" />
                    )}
                  </div>

                  <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                    {activeTab === 1
                      ? "International Registration"
                      : "Distributor Registration"}
                  </span>
                </div>

                {/* <h3 className="text-4xl font-black uppercase leading-tight text-dark-grey">
                  {activeTab === "dealer"
                    ? "Become A Dealer"
                    : "Become A Distributor"}
                </h3> */}
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row */}
                <div className="grid gap-6 md:grid-cols-2 mb-3">
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="full_name"
                      placeholder="Enter your name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      Phone Number
                    </label>

                    <PhoneInput
                      country={"in"}
                      value={formData.phone_number}
                      onChange={(phone) =>
                        setFormData({
                          ...formData,
                          phone_number: phone,
                        })
                      }
                      inputProps={{
                        name: "phone_number",
                        required: true,
                      }}
                      containerClass="w-full"
                      inputClass="!w-full !h-13 !rounded-2xl !border !border-[#ddd] !bg-[#fafafa] !pl-16 !text-dark-grey focus:!border-secondary"
                      buttonClass="!rounded-l-2xl !border-[#ddd] !bg-[#fafafa]"
                      dropdownClass="!text-dark-grey"
                    />
                  </div>
                </div>

                {/* Row */}
                <div className="grid gap-4 md:grid-cols-2 mb-3">

                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      Business Name
                    </label>

                    <input
                      type="text"
                      name="business_name"
                      placeholder="Enter business name"
                      value={formData.business_name}
                      onChange={handleChange}
                      className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email_address"
                      value={formData.email_address}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                    />
                  </div>



                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      City
                    </label>

                    <input
                      type="text"
                      name="city_name"
                      placeholder="Enter city"
                      value={formData.city_name}
                      onChange={handleChange}
                      className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      State
                    </label>

                    <input
                      type="text"
                      name="state_name"
                      placeholder="Enter state"
                      value={formData.state_name}
                      onChange={handleChange}
                      className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                    />
                  </div>


                </div>

                {activeTab === 1 && (
                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                      Country
                    </label>

                    <input
                      type="text"
                      name="country_name"
                      placeholder="Enter country"
                      value={formData.country_name}
                      onChange={handleChange}
                      className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                    />
                  </div>
                )}
                {/* Dynamic Field */}
                {/* <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                    {activeTab === "1"
                      ? "Business Name"
                      : "Distribution Network"}
                  </label>

                  <input
                    type="text"
                    name={
                      activeTab === "1"
                        ? "business_name"
                        : "Distribution_Network"
                    }
                    value={
                      activeTab === "1"
                        ? formData.business_name
                        : formData.Distribution_Network
                    }
                    onChange={handleChange}
                    placeholder={
                      activeTab === "1"
                        ? "Enter business name"
                        : "Enter distribution details"
                    }
                    className="h-13 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                  />
                </div> */}

                {/* Message */}
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full rounded-2xl border border-[#ddd] bg-[#fafafa] p-6 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-primary cursor-pointer px-8 py-5 text-sm font-bold uppercase tracking-[3px] text-white transition duration-300 hover:bg-secondary hover:text-dark-grey"
                >
                  {loading ? "Submitting..." : "Register"}
                </button>

                {successMessage && (
                  <p className="text-green-600 font-medium">
                    {successMessage}
                  </p>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <p className="mt-4 text-red-600 font-medium">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>


      
    </>
  );
}