  // "use client";

  // import Breadcrumb from "@/app/Components/Breadcrumb";
  // import header from "@/app/assets/page-header-bg.jpg";
  // import variety1 from '@/app/assets/JUMBO.png';
  // import variety2 from '@/app/assets/KABUL.png';
  // import variety3 from '@/app/assets/Kailash.png';
  // import variety4 from '@/app/assets/KAMINI.png';
  // import variety5 from '@/app/assets/Karishma.png';
  // import variety6 from '@/app/assets/Keshav.png';

  // import Image from "next/image";
  // import Link from "next/link";

  // import {
  //   FaArrowRight,
  //   FaDownload,
  //   FaLeaf,
  //   FaEye
  // } from "react-icons/fa";
  // import AnimatedHeading from "../Components/AnimatedHeading";

  // const categories = [
  //   {
  //     name: "Vegetable Crops",
  //     slug: "vegetable-crops",
  //   },
  //   {
  //     name: "Field Crops",
  //     slug: "field-crops",
  //   },
  // ];

  // const varieties = [
  //   {
  //     name: "Jumbo",
  //     image: variety1.src,
  //     slug: "jumbo",
  //   },
  //   {
  //     name: "Kabul",
  //     image:
  //       variety2.src,
  //     slug: "kabul",
  //   },
  //   {
  //     name: "Kailash",
  //     image:
  //       variety3.src,
  //     slug: "kailash",
  //   },
  //   {
  //     name: "Kamini",
  //     image:
  //       variety4.src,
  //     slug: "kamini",
  //   },
  //   {
  //     name: "Karishma",
  //     image:
  //       variety5.src,
  //     slug: "karishma",
  //   },
  //   {
  //     name: "Keshav",
  //     image:
  //       variety6.src,
  //     slug: "keshav",
  //   },
  // ];

  // export default function VarietyPage() {
  //   return (
  //     <>
  //       <Breadcrumb
  //         title="Tomato Varieties"
  //         subtitle="Growing Trust Since Years"
  //         backgroundImage={header.src}
  //         breadcrumbs={[
  //           { label: "Home", href: "/" },
  //           {
  //             label: "Vegetable Crops",
  //             href: "/products/vegetable-crops",
  //           },
  //           { label: "Tomato Varieties" },
  //         ]}
  //       />

  //       <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
  //         {/* Background Blur */}
  //         <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
  //         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

  //         <div className="container relative z-10 mx-auto px-4 md:px-12">
  //           <div className="grid gap-5 xl:grid-cols-[70%_30%]">
  //             {/* LEFT SIDE */}
  //             <div>
  //               {/* Heading */}
  //               {/* <div className="mb-8">
  //                 <span className="mb-2 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
  //                   Tomato Collection
  //                 </span>

  //                 <AnimatedHeading className="text-4xl font-black uppercase  text-dark-grey sm:text-5xl md:text-6xl">
  //                   Premium Tomato
  //                   <span className="block text-secondary">
  //                     Seed Varieties
  //                   </span>
  //                 </AnimatedHeading>
  //               </div> */}

  //               {/* Variety Grid */}
  //               <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
  //                 {varieties.map((variety, index) => (
  //                   <Link
  //                     key={index}
  //                     href={`/variety-detail`}
  //                     className="group relative flex flex-col items-center text-center"
  //                   >
  //                     {/* Circle Image */}
  //                     <div className="relative">
  //                       {/* Outer Ring */}
  //                       <div className="absolute inset-0 scale-110 rounded-full  transition duration-500 group-hover:scale-[1.18] group-hover:border-secondary" />

  //                       {/* Image */}
  //                       <div className="relative h-45 w-45 overflow-hidden rounded-full  bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
  //                         <Image
  //                           src={variety.image}
  //                           alt={variety.name}
  //                           fill
  //                           className="object-cover transition duration-700 group-hover:scale-110"
  //                         />
  //                       </div>

  //                     </div>

  //                     {/* Name */}
  //                     <div className="mt-4">
  //                       <h3 className="text-xl font-black uppercase tracking-[1px] text-dark-grey transition duration-300 group-hover:text-secondary">
  //                         {variety.name}
  //                       </h3>

  //                       {/* Bottom Line */}
  //                       <div className="mx-auto mt-1 h-0.75 w-16 rounded-full bg-secondary transition-all duration-500 group-hover:w-28" />
  //                     </div>
  //                   </Link>
  //                 ))}
  //               </div>
  //             </div>

  //             {/* RIGHT SIDEBAR */}
  //             <div className="flex flex-col items-start gap-4">
  //               {/* Categories */}
  //               <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
  //                 <div className="mb-4 flex items-center gap-4">
  //                   {/* <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
  //                     <FaLeaf />
  //                   </div> */}

  //                   <div>
  //                     {/* <span className="text-xs font-bold uppercase tracking-[4px] text-primary">
  //                       Categories
  //                     </span> */}

  //                     <h3 className=" text-2xl font-black text-dark-grey">
  //                       Product Categories
  //                     </h3>
  //                   </div>
  //                 </div>

  //                 <div className="space-y-4">
  //                   {categories.map((category, index) => (
  //                     <Link
  //                       key={index}
  //                       href={`#`}
  //                       className={`group flex gap-10 items-center justify-between rounded-2xl border px-3 py-3 transition duration-300 ${category.slug === "vegetable-crops"
  //                           ? "border-secondary bg-secondary text-white"
  //                           : "border-[#eee] hover:border-secondary/30 hover:bg-[#fafafa]"
  //                         }`}
  //                     >
  //                       <span className="font-bold uppercase tracking-[2px]">
  //                         {category.name}
  //                       </span>

  //                       <FaArrowRight
  //                         className={`transition duration-300 group-hover:translate-x-1 ${category.slug === "vegetable-crops"
  //                             ? "text-white"
  //                             : "text-primary"
  //                           }`}
  //                       />
  //                     </Link>
  //                   ))}
  //                 </div>
  //               </div>

  //               {/* Catalog */}
  //               <div className="relative overflow-hidden rounded-[35px] bg-white p-6 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
  //                 {/* Background Circle */}
  //                 <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

  //                 {/* <span className="text-xs font-bold uppercase tracking-[4px] text-secondary">
  //                   Download
  //                 </span> */}

  //                 <h3 className="text-2xl font-black text-dark-grey">
  //                   Product
  //                   <span className="pl-2 ">
  //                     Catalogue
  //                   </span>
  //                 </h3>

  //                 {/* <p className="mt-2 text-white/70">
  //                   Download our latest variety catalog and explore premium seed
  //                   varieties.
  //                 </p> */}

  //                 <div className="mt-5 flex flex-col justify-start items-start gap-4">
  //                   <button className="flex items-center w-65 cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase   transition duration-300 hover:bg-primary whitespace-nowrap">
  //                     <FaEye className="text-md" />

  //                     <span>View Catalogue</span>
  //                   </button>

  //                   <button className="flex items-center cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase   transition duration-300 hover:bg-primary whitespace-nowrap">
  //                     <FaDownload className="text-sm" />

  //                     <span>Download Catalogue</span>
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </>
  //   );
  // }

 "use client";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/config";

import {
  FaArrowRight,
  FaDownload,
  FaEye
} from "react-icons/fa";

const categories = [
  {
    name: "Vegetable Crops",
    slug: "vegetables",
    type: 1,
  },
  {
    name: "Field Crops",
    slug: "filed",
    type: 2,
  },
];

type SubVegetableType = {
  id: number;
  sub_vegetable_name?: string;
  sub_field_crop_name?: string;
  master_image: string;
  description: string;
  sub_veg_slug?: string;
  sub_field_slug?: string;
  gallery_images?: {
    id: number;
    image: string;
  }[];
};

type ProductType = {
  id: number;
  title: string;
  image: string;
  veg_slug?: string;
  field_slug?: string;
  sub_vegetables?: SubVegetableType[];
  sub_field_crops?: SubVegetableType[];

};

export default function VarietyPage() {
  const searchParams = useSearchParams();

  const slug = searchParams.get("slug") || "";
  const type = Number(searchParams.get("type") || 1);

  const [varieties, setVarieties] = useState<SubVegetableType[]>([]);
  const [productTitle, setProductTitle] = useState("Varieties");
  const [loading, setLoading] = useState(false);

  const getVarieties = async () => {
    try {
      setLoading(true);

      const res = await axios.post(`${apiUrl}/product-list`, {
        type: type,
      });

      if (res.data?.success) {
        const products: ProductType[] = res.data?.data || [];

        const currentProduct = products.find((item) => {
          if (type === 1) {
            return item.veg_slug === slug;
          }

          if (type === 2) {
            return item.field_slug === slug;
          }

          return false;
        });

        if (currentProduct) {
          setProductTitle(currentProduct.title);

          if (type === 1) {
            setVarieties(currentProduct.sub_vegetables || []);
          }

          if (type === 2) {
            setVarieties(
              currentProduct.sub_field_crops ||
              currentProduct.sub_vegetables ||
              []
            );
          }
        } else {
          setVarieties([]);
          setProductTitle("Varieties");
        }
      } else {
        setVarieties([]);
      }
    } catch (error) {
      console.log("Variety API Error:", error);
      setVarieties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug && type) {
      getVarieties();
    }
  }, [slug, type]);

  return (
    <>
      <Breadcrumb
        title={`${productTitle} Varieties`}
        subtitle="Growing Trust Since Years"
        backgroundImage={header.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: type === 2 ? "Field Crops" : "Vegetable Crops",
            href: `/product?slug=${type === 2 ? "field" : "vegetables"}`,
          },
          { label: `${productTitle} Varieties` },
        ]}
      />

      <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-12">
          <div className="grid gap-5 xl:grid-cols-[70%_30%]">
            {/* LEFT SIDE */}
            <div>
              {loading ? (
                <div className="py-20 text-center text-lg font-bold text-dark-grey">
                  Loading varieties...
                </div>
              ) : varieties.length > 0 ? (
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
                  {varieties.map((variety) => {
                    const varietyName =
                      type === 2
                        ? variety.sub_field_crop_name || variety.sub_vegetable_name
                        : variety.sub_vegetable_name;

                    const varietySlug =
                      type === 2
                        ? variety.sub_field_slug || variety.sub_veg_slug
                        : variety.sub_veg_slug;

                    return (
                      <Link
                        key={variety.id}
                        href={`/variety-detail?slug=${varietySlug}&type=${type}`}
                        className="group relative flex flex-col items-center text-center"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 scale-110 rounded-full transition duration-500 group-hover:scale-[1.18] group-hover:border-secondary" />

                          <div className="relative h-45 w-45 overflow-hidden rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                            <img
                              src={variety.master_image}
                              alt={varietyName || "Variety"}
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <h3 className="text-xl font-black uppercase tracking-[1px] text-dark-grey transition duration-300 group-hover:text-secondary">
                            {varietyName}
                          </h3>

                          <div className="mx-auto mt-1 h-0.75 w-16 rounded-full bg-secondary transition-all duration-500 group-hover:w-28" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="py-20 text-center text-lg font-bold text-dark-grey">
                  No varieties found.
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-dark-grey">
                      Product Categories
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/product?slug=${category.slug}`}
                      className={`group flex gap-10 items-center justify-between rounded-2xl border px-3 py-3 transition duration-300 ${
                        type === category.type
                          ? "border-secondary bg-secondary text-white"
                          : "border-[#eee] hover:border-secondary/30 hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className="font-bold uppercase tracking-[2px]">
                        {category.name}
                      </span>

                      <FaArrowRight
                        className={`transition duration-300 group-hover:translate-x-1 ${
                          type === category.type ? "text-white" : "text-primary"
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[35px] bg-white p-6 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

                <h3 className="text-2xl font-black text-dark-grey">
                  Product
                  <span className="pl-2">Catalogue</span>
                </h3>

                <div className="mt-5 flex flex-col justify-start items-start gap-4">
                  <button className="flex items-center w-65 cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap">
                    <FaEye className="text-md" />
                    <span>View Catalogue</span>
                  </button>

                  <button className="flex items-center cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap">
                    <FaDownload className="text-sm" />
                    <span>Download Catalogue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}