// "use client";

// import Breadcrumb from "@/app/Components/Breadcrumb";
// import header from "@/app/assets/page-header-bg.jpg";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import Image from "next/image";
// import Link from "next/link";

// import {
//     FaArrowRight,
//     FaCheckCircle,
//     FaDownload,
//     FaLeaf,
//     FaEye
// } from "react-icons/fa";
// import AnimatedHeading from "../Components/AnimatedHeading";
// import variety1 from '@/app/assets/JUMBO.png';
// import variety2 from '@/app/assets/Kartavya-101.png';
// import variety3 from '@/app/assets/Kailash.png';
// import variety4 from '@/app/assets/KAMINI.png';

// const categories = [
//     {
//         name: "Vegetable Crops",
//         slug: "vegetable-crops",
//     },
//     {
//         name: "Field Crops",
//         slug: "field-crops",
//     },
// ];

// const galleryImages = [
//     variety1.src,
//     variety2.src,
//     // variety3.src,
//     // variety4.src,
// ];

// const specifications = [
//     "High yielding hybrid variety",
//     "Excellent fruit firmness and color",
//     "Strong disease resistance",
//     "Uniform fruit size and shape",
//     "Better shelf life and transportation quality",
//     "Suitable for all seasonal cultivation",
//     "High market demand variety",
//     "Early maturity and vigorous growth",
// ];

// export default function VarietyDetailPage() {
//     return (
//         <>
//             <Breadcrumb
//                 title="Jumbo"
//                 subtitle="Premium Tomato Variety"
//                 backgroundImage={header.src}
//                 breadcrumbs={[
//                     { label: "Home", href: "/" },
//                     {
//                         label: "Vegetable Crops",
//                         href: "/product",
//                     },
//                     {
//                         label: "Tomato Varieties",
//                         href: "/variety",
//                     },
//                     { label: "Jumbo" },
//                 ]}
//             />

//             <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
//                 {/* Background Blur */}
//                 <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
//                 <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

//                 <div className="container relative z-10 mx-auto px-4 md:px-12">
//                     <div className="grid gap-5 xl:grid-cols-[70%_30%]">
//                         {/* LEFT CONTENT */}
//                         <div>
//                             {/* Heading */}
//                             {/* <div className="mb-7">
//                                 <span className="mb-1 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
//                                     Tomato Variety
//                                 </span>

//                                 <AnimatedHeading className="text-4xl font-black uppercase leading-tight text-primary sm:text-5xl md:text-6xl">
//                                     Jumbo
//                                 </AnimatedHeading>
//                             </div> */}



//                             {/* IMAGE SHOWCASE */}
//                             <div className="mt-10 overflow-hidden">
//                                 <Swiper
//                                     // modules={[Autoplay]}
//                                     // autoplay={{
//                                     //   delay: 2500,
//                                     //   disableOnInteraction: false,
//                                     // }}
//                                     speed={1000}
//                                     loop={galleryImages.length > 2}
//                                     centeredSlides={false}
//                                     breakpoints={{
//                                         0: {
//                                             slidesPerView: 1,
//                                             spaceBetween: 20,
//                                         },
//                                         640: {
//                                             slidesPerView: 1.5,
//                                             spaceBetween: 25,
//                                         },
//                                         1024: {
//                                             slidesPerView: 2,
//                                             spaceBetween: 20,
//                                         },
//                                     }}
//                                     className="w-full"
//                                 >
//                                     {galleryImages.map((image, index) => (
//                                         <SwiperSlide key={index}>
//                                             <div className="flex justify-center py-6">
//                                                 <div className="group relative">
//                                                     {/* Glow */}
//                                                     <div className="absolute inset-0 rounded-full blur-2xl transition duration-500 "></div>

//                                                     {/* Image */}
//                                                     <div className="relative h-75 w-75 overflow-hidden rounded-full border-[6px] border-primary/20 bg-white  transition duration-500 group-hover:-translate-y-2 group-hover:border-secondary">
//                                                         <Image
//                                                             src={image}
//                                                             alt="Gallery"
//                                                             fill
//                                                             className="object-contain transition duration-700 group-hover:scale-110"
//                                                         />

//                                                         {/* Overlay */}
//                                                         {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" /> */}

//                                                         {/* Content */}
//                                                         {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
//                                                             <h3 className="text-3xl font-black uppercase text-white">
//                                                                 Jumbo
//                                                             </h3>

//                                                             <div className="mx-auto mt-2 h-0.75 w-20 rounded-full bg-secondary transition-all duration-300 group-hover:w-28" />
//                                                         </div> */}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
//                             </div>

//                             {/* Description */}
//                             <div className="mt-10">
//                                 <div className="mb-5 flex items-center gap-5">
//                                     <div className="h-0.5 w-15 bg-secondary" />

//                                     <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
//                                         Product Information
//                                     </span>
//                                 </div>

//                                 <h3 className="mb-4 text-4xl font-black uppercase text-dark-grey">
//                                     Variety Details
//                                 </h3>

//                                 <p className="max-w-5xl text-lg text-[#666]">
//                                     Jumbo is a premium hybrid tomato variety developed for
//                                     high productivity, superior fruit quality and excellent
//                                     adaptability. This variety offers strong plant vigor, better
//                                     disease tolerance and outstanding market acceptance.
//                                 </p>
//                             </div>

//                             {/* Specifications */}
//                             <div className="mt-5">

//                                 {/* Features */}
//                                 <div className="grid gap-x-5 gap-y-3 md:grid-cols-2">
//                                     {specifications.map((item, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex items-center gap-4"
//                                         >
//                                             {/* Icon */}
//                                             <div className="mt-1 text-primary">
//                                                 <FaCheckCircle className="text-lg" />
//                                             </div>

//                                             {/* Text */}
//                                             <p className="text-lg leading-[1.9] text-[#555]">
//                                                 {item}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* RIGHT SIDEBAR */}
//                         <div>
//                             <div className="flex flex-col items-start gap-4">
//                                 {/* Categories */}
//                                 <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
//                                     <div className="mb-4 flex items-center gap-4">
//                                         {/* <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
//                                             <FaLeaf className="text-xl" />
//                                         </div> */}

//                                         <div>
//                                             {/* <span className="text-xs font-bold uppercase tracking-[4px] text-primary">
//                                                 Categories
//                                             </span> */}

//                                             <h3 className=" text-2xl font-black text-dark-grey">
//                                                 Product Categories
//                                             </h3>
//                                         </div>
//                                     </div>

//                                     <div className="space-y-4">
//                                         {categories.map((category, index) => (
//                                             <Link
//                                                 key={index}
//                                                 href={`#`}
//                                                 className={`group flex gap-10 items-center justify-between rounded-2xl border px-3 py-3 transition duration-300 ${category.slug === "vegetable-crops"
//                                                     ? "border-secondary bg-secondary text-white"
//                                                     : "border-[#eee] hover:border-secondary/30 hover:bg-[#fafafa]"
//                                                     }`}
//                                             >
//                                                 <span className="font-bold uppercase tracking-[2px]">
//                                                     {category.name}
//                                                 </span>

//                                                 <FaArrowRight
//                                                     className={`transition duration-300 group-hover:translate-x-1 ${category.slug === "vegetable-crops"
//                                                         ? "text-white"
//                                                         : "text-primary"
//                                                         }`}
//                                                 />
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Catalog */}
//                                 <div className="relative overflow-hidden rounded-[35px] bg-white p-7 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
//                                     {/* Background Circle */}
//                                     <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

//                                     {/* <span className="text-xs font-bold uppercase tracking-[4px] text-secondary">
//                                         Download
//                                     </span> */}

//                                     <h3 className=" text-2xl font-black text-dark-grey">
//                                         Product
//                                         <span className="pl-2 ">
//                                             Catalogue
//                                         </span>
//                                     </h3>

//                                     {/* <p className="mt-2  text-white/70">
//                                         Download our latest catalog and explore premium agricultural
//                                         seed varieties.
//                                     </p> */}

//                                     <div className="mt-5 flex flex-col justify-start items-center gap-4">
//                                         <button className="flex items-center w-65 cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase   transition duration-300 hover:bg-primary whitespace-nowrap">
//                                             <FaEye className="text-md" />

//                                             <span>View Catalogue</span>
//                                         </button>

//                                         <button className="flex items-center cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase   transition duration-300 hover:bg-primary whitespace-nowrap">
//                                             <FaDownload className="text-md" />

//                                             <span>Download Catalogue</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// "use client";

// import Breadcrumb from "@/app/Components/Breadcrumb";
// import header from "@/app/assets/page-header-bg.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// import {
//     FaArrowRight,
//     FaCheckCircle,
//     FaDownload,
//     FaEye
// } from "react-icons/fa";
// import { apiUrl } from "@/config";

// const categories = [
//     {
//         name: "Vegetable Crops",
//         slug: "vegetables",
//         type: 1,
//     },
//     {
//         name: "Field Crops",
//         slug: "filed",
//         type: 2,
//     },
// ];

// type GalleryImageType = {
//     id: number;
//     image: string;
// };

// type SubVegetableType = {
//     id: number;
//     sub_vegetable_name: string;
//     master_image: string;
//     description: string;
//     sub_veg_slug: string;
//     gallery_images?: GalleryImageType[];
// };

// type ProductType = {
//     id: number;
//     title: string;
//     image: string;
//     veg_slug: string;
//     sub_vegetables?: SubVegetableType[];
// };

// export default function VarietyDetailPage() {
//     const searchParams = useSearchParams();

//     const slug = searchParams.get("slug") || "";
//     const type = searchParams.get("type") || "1";

//     const [detail, setDetail] = useState<SubVegetableType | null>(null);
//     const [parentProduct, setParentProduct] = useState<ProductType | null>(null);
//     const [loading, setLoading] = useState(false);

//     const getVarietyDetail = async () => {
//         try {
//             setLoading(true);

//             const res = await axios.post(
//                 `${apiUrl}/product-list`,
//                 {
//                     type: Number(type),
//                 }
//             );

//             if (res.data?.success) {
//                 const products: ProductType[] = res.data?.data || [];

//                 let foundDetail: SubVegetableType | null = null;
//                 let foundParent: ProductType | null = null;

//                 products.forEach((product) => {
//                     const match = product.sub_vegetables?.find(
//                         (subItem) => subItem.sub_veg_slug === slug
//                     );

//                     if (match) {
//                         foundDetail = match;
//                         foundParent = product;
//                     }
//                 });

//                 setDetail(foundDetail);
//                 setParentProduct(foundParent);
//             } else {
//                 setDetail(null);
//                 setParentProduct(null);
//             }
//         } catch (error) {
//             console.log("Variety Detail API Error:", error);
//             setDetail(null);
//             setParentProduct(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (slug) {
//             getVarietyDetail();
//         }
//     }, [slug, type]);

//     const galleryImages = [
//         ...(detail?.master_image ? [{ id: 0, image: detail.master_image }] : []),
//         ...(detail?.gallery_images || []),
//     ];

//     return (
//         <>
//             <Breadcrumb
//                 title={detail?.sub_vegetable_name || "Variety Detail"}
//                 subtitle={parentProduct?.title ? `Premium ${parentProduct.title} Variety` : "Premium Variety"}
//                 backgroundImage={header.src}
//                 breadcrumbs={[
//                     { label: "Home", href: "/" },
//                     {
//                         label: Number(type) === 2 ? "Field Crops" : "Vegetable Crops",
//                         href: `/product?slug=${Number(type) === 2 ? "filed" : "vegetables"}`,
//                     },
//                     {
//                         label: parentProduct?.title
//                             ? `${parentProduct.title} Varieties`
//                             : "Varieties",
//                         href: parentProduct?.veg_slug
//                             ? `/variety?slug=${parentProduct.veg_slug}&type=${type}`
//                             : `/variety?type=${type}`,
//                     },
//                     { label: detail?.sub_vegetable_name || "Detail" },
//                 ]}
//             />

//             <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
//                 {/* Background Blur */}
//                 <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
//                 <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

//                 <div className="container relative z-10 mx-auto px-4 md:px-12">
//                     <div className="grid gap-5 xl:grid-cols-[70%_30%]">
//                         {/* LEFT CONTENT */}
//                         <div>
//                             {loading ? (
//                                 <div className="py-20 text-center text-lg font-bold text-dark-grey">
//                                     Loading variety detail...
//                                 </div>
//                             ) : detail ? (
//                                 <>
//                                     {/* IMAGE SHOWCASE */}
//                                     <div className="mt-10 overflow-hidden">
//                                         <Swiper
//                                             speed={1000}
//                                             loop={galleryImages.length > 2}
//                                             centeredSlides={false}
//                                             breakpoints={{
//                                                 0: {
//                                                     slidesPerView: 1,
//                                                     spaceBetween: 20,
//                                                 },
//                                                 640: {
//                                                     slidesPerView: 1.5,
//                                                     spaceBetween: 25,
//                                                 },
//                                                 1024: {
//                                                     slidesPerView: 2,
//                                                     spaceBetween: 20,
//                                                 },
//                                             }}
//                                             className="w-full"
//                                         >
//                                             {galleryImages.map((item, index) => (
//                                                 <SwiperSlide key={item.id || index}>
//                                                     <div className="flex justify-center py-6">
//                                                         <div className="group relative">
//                                                             {/* Glow */}
//                                                             <div className="absolute inset-0 rounded-full blur-2xl transition duration-500"></div>

//                                                             {/* Image */}
//                                                             <div className="relative h-75 w-75 overflow-hidden rounded-full border-[6px] border-primary/20 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-secondary">
//                                                                 <img
//                                                                     src={item.image}
//                                                                     alt={detail.sub_vegetable_name}
//                                                                     className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </SwiperSlide>
//                                             ))}
//                                         </Swiper>
//                                     </div>

//                                     {/* Description */}
//                                     <div className="mt-10">
//                                         <div className="mb-5 flex items-center gap-5">
//                                             <div className="h-0.5 w-15 bg-secondary" />

//                                             <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
//                                                 Product Information
//                                             </span>
//                                         </div>

//                                         <h3 className="mb-4 text-4xl font-black uppercase text-dark-grey">
//                                             {detail.sub_vegetable_name}
//                                         </h3>

//                                         <p className="max-w-5xl text-lg text-[#666]">
//                                             {detail.description || "No description available."}
//                                         </p>
//                                     </div>

//                                     {/* Specifications */}
//                                     <div className="mt-5">
//                                         <div className="grid gap-x-5 gap-y-3 md:grid-cols-2">
//                                             {parentProduct?.title && (
//                                                 <div className="flex items-center gap-4">
//                                                     <div className="mt-1 text-primary">
//                                                         <FaCheckCircle className="text-lg" />
//                                                     </div>

//                                                     <p className="text-lg leading-[1.9] text-[#555]">
//                                                         Product: {parentProduct.title}
//                                                     </p>
//                                                 </div>
//                                             )}

//                                             <div className="flex items-center gap-4">
//                                                 <div className="mt-1 text-primary">
//                                                     <FaCheckCircle className="text-lg" />
//                                                 </div>

//                                                 <p className="text-lg leading-[1.9] text-[#555]">
//                                                     Variety: {detail.sub_vegetable_name}
//                                                 </p>
//                                             </div>

//                                             <div className="flex items-center gap-4">
//                                                 <div className="mt-1 text-primary">
//                                                     <FaCheckCircle className="text-lg" />
//                                                 </div>

//                                                 <p className="text-lg leading-[1.9] text-[#555]">
//                                                     Slug: {detail.sub_veg_slug}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div className="py-20 text-center text-lg font-bold text-dark-grey">
//                                     No variety detail found.
//                                 </div>
//                             )}
//                         </div>

//                         {/* RIGHT SIDEBAR */}
//                         <div>
//                             <div className="flex flex-col items-start gap-4">
//                                 {/* Categories */}
//                                 <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
//                                     <div className="mb-4 flex items-center gap-4">
//                                         <div>
//                                             <h3 className="text-2xl font-black text-dark-grey">
//                                                 Product Categories
//                                             </h3>
//                                         </div>
//                                     </div>

//                                     <div className="space-y-4">
//                                         {categories.map((category) => (
//                                             <Link
//                                                 key={category.slug}
//                                                 href={`/product?slug=${category.slug}`}
//                                                 className={`group flex gap-10 items-center justify-between rounded-2xl border px-3 py-3 transition duration-300 ${
//                                                     Number(type) === category.type
//                                                         ? "border-secondary bg-secondary text-white"
//                                                         : "border-[#eee] hover:border-secondary/30 hover:bg-[#fafafa]"
//                                                 }`}
//                                             >
//                                                 <span className="font-bold uppercase tracking-[2px]">
//                                                     {category.name}
//                                                 </span>

//                                                 <FaArrowRight
//                                                     className={`transition duration-300 group-hover:translate-x-1 ${
//                                                         Number(type) === category.type
//                                                             ? "text-white"
//                                                             : "text-primary"
//                                                     }`}
//                                                 />
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Catalog */}
//                                 <div className="relative overflow-hidden rounded-[35px] bg-white p-7 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
//                                     <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

//                                     <h3 className="text-2xl font-black text-dark-grey">
//                                         Product
//                                         <span className="pl-2">
//                                             Catalogue
//                                         </span>
//                                     </h3>

//                                     <div className="mt-5 flex flex-col justify-start items-center gap-4">
//                                         <button className="flex items-center w-65 cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap">
//                                             <FaEye className="text-md" />
//                                             <span>View Catalogue</span>
//                                         </button>

//                                         <button className="flex items-center cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap">
//                                             <FaDownload className="text-md" />
//                                             <span>Download Catalogue</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// "use client";

// import Breadcrumb from "@/app/Components/Breadcrumb";
// import header from "@/app/assets/page-header-bg.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";
// import { apiUrl } from "@/config";

// import {
//     FaArrowRight,
//     FaCheckCircle,
//     FaDownload,
//     FaEye
// } from "react-icons/fa";

// const categories = [
//     {
//         name: "Vegetable Crops",
//         slug: "vegetables",
//         type: 1,
//     },
//     {
//         name: "Field Crops",
//         slug: "field",
//         type: 2,
//     },
//     {
//         name: "Fruit Crops",
//         slug: "fruit",
//         type: 3,
//     },
// ];

// type GalleryImageType = {
//     id: number;
//     image: string;
// };

// type SubProductType = {
//     id: number;

//     // Vegetable fields
//     sub_vegetable_name?: string;
//     sub_veg_slug?: string;

//     // Field crop fields
//     sub_field_crop_name?: string;
//     sub_field_name?: string;
//     sub_field_slug?: string;

//     // Fruit crop fields
//     sub_foot_crop_name?: string;
//     sub_foot_name?: string;
//     sub_foot_slug?: string;

//     master_image?: string;
//     description?: string | null;

//     gallery_images?: GalleryImageType[];
// };

// type ProductType = {
//     id: number;
//     title: string;
//     image: string;

//     // Vegetable / field crop parent slug
//     veg_slug?: string;
//     field_slug?: string;
//     foot_slug?: string;
//     // Child arrays
//     sub_vegetables?: SubProductType[];
//     sub_field_crops?: SubProductType[];
//     sub_foot_crops?: SubProductType[];
// };

// export default function VarietyDetailPage() {
//     const searchParams = useSearchParams();

//     const slug = searchParams.get("slug") || "";
//     const type = Number(searchParams.get("type") || 1);

//     const [detail, setDetail] = useState<SubProductType | null>(null);
//     const [parentProduct, setParentProduct] = useState<ProductType | null>(null);
//     const [loading, setLoading] = useState(false);

//     const getVarietyDetail = async () => {
//         try {
//             setLoading(true);

//             const res = await axios.post(`${apiUrl}/product-list`, {
//                 type: type,
//             });

//             if (res.data?.success) {
//                 const products: ProductType[] = res.data?.data || [];

//                 let foundDetail: SubProductType | null = null;
//                 let foundParent: ProductType | null = null;

//                 products.forEach((product) => {
//                     let match: SubProductType | undefined;

//                     // Vegetable detail match
//                     if (type === 1) {
//                         match = product.sub_vegetables?.find(
//                             (subItem) => subItem.sub_veg_slug === slug
//                         );
//                     }

//                     // Field crop detail match
//                     if (type === 2) {
//                         match = product.sub_field_crops?.find(
//                             (subItem) => subItem.sub_field_slug === slug
//                         );
//                     }

//                     // Field crop detail match
//                     if (type === 3) {
//                         match = product.sub_foot_crops?.find(
//                             (subItem) => subItem.sub_foot_slug === slug
//                         );
//                     }

//                     if (match) {
//                         foundDetail = match;
//                         foundParent = product;
//                     }
//                 });

//                 setDetail(foundDetail);
//                 setParentProduct(foundParent);
//             } else {
//                 setDetail(null);
//                 setParentProduct(null);
//             }
//         } catch (error) {
//             console.log("Variety Detail API Error:", error);
//             setDetail(null);
//             setParentProduct(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (slug && type) {
//             getVarietyDetail();
//         }
//     }, [slug, type]);

//     const detailName =
//         type === 2
//             ? detail?.sub_field_crop_name || detail?.sub_field_name
//             : type === 3
//                 ? detail?.sub_foot_crop_name
//                 : detail?.sub_vegetable_name;

//     const detailSlug =
//         type === 2
//             ? detail?.sub_field_slug
//             : type === 3
//                 ? detail?.sub_foot_slug
//                 : detail?.sub_veg_slug;

//     const parentSlug =
//         type === 2
//             ? parentProduct?.field_slug
//             : type === 3
//                 ? parentProduct?.foot_slug
//                 : parentProduct?.veg_slug;

//     const galleryImages = [
//         ...(detail?.master_image ? [{ id: 0, image: detail.master_image }] : []),
//         ...(detail?.gallery_images || []),
//     ];

//     return (
//         <>
//             <Breadcrumb
//                 title={detailName || "Variety Detail"}
//                 subtitle={
//                     parentProduct?.title
//                         ? `Premium ${parentProduct.title} Variety`
//                         : "Premium Variety"
//                 }
//                 backgroundImage={header.src}
//                 breadcrumbs={[
//                     { label: "Home", href: "/" },
//                     {
//                         label: type === 2
//                             ? "Field Crops"
//                             : type === 3
//                                 ? "Fruit Crops"
//                                 : "Vegetable Crops",
//                         href: `/product?slug=${type === 2
//                             ? "field"
//                             : type === 3
//                                 ? "fruits"
//                                 : "vegetables"}`,
//                     },
//                     {
//                         label: parentProduct?.title
//                             ? `${parentProduct.title} Varieties`
//                             : "Varieties",
//                         href: parentSlug
//                             ? `/variety?slug=${parentSlug}&type=${type}`
//                             : `/variety?type=${type}`,
//                     },
//                     { label: detailName || "Detail" },
//                 ]}
//             />

//             <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
//                 {/* Background Blur */}
//                 <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
//                 <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

//                 <div className="container relative z-10 mx-auto px-4 md:px-12">
//                     <div className="grid gap-5 xl:grid-cols-[70%_30%]">
//                         {/* LEFT CONTENT */}
//                         <div>
//                             {loading ? (
//                                 <div className="py-20 text-center text-lg font-bold text-dark-grey">
//                                     Loading variety detail...
//                                 </div>
//                             ) : detail ? (
//                                 <>
//                                     {/* IMAGE SHOWCASE */}
//                                     <div className="mt-10 overflow-hidden">
//                                         {galleryImages.length > 0 ? (
//                                             <Swiper
//                                                 speed={1000}
//                                                 loop={galleryImages.length > 2}
//                                                 centeredSlides={false}
//                                                 breakpoints={{
//                                                     0: {
//                                                         slidesPerView: 1,
//                                                         spaceBetween: 20,
//                                                     },
//                                                     640: {
//                                                         slidesPerView: 1.5,
//                                                         spaceBetween: 25,
//                                                     },
//                                                     1024: {
//                                                         slidesPerView: 2,
//                                                         spaceBetween: 20,
//                                                     },
//                                                 }}
//                                                 className="w-full"
//                                             >
//                                                 {galleryImages.map((item, index) => (
//                                                     <SwiperSlide key={item.id || index}>
//                                                         <div className="flex justify-center py-6">
//                                                             <div className="group relative">
//                                                                 {/* Glow */}
//                                                                 <div className="absolute inset-0 rounded-full blur-2xl transition duration-500"></div>

//                                                                 {/* Image */}
//                                                                 <div className="relative h-75 w-75 overflow-hidden rounded-full border-[6px] border-primary/20 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-secondary">
//                                                                     <img
//                                                                         src={item.image}
//                                                                         alt={detailName || "Variety Detail"}
//                                                                         className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </SwiperSlide>
//                                                 ))}
//                                             </Swiper>
//                                         ) : (
//                                             <div className="py-10 text-center text-lg font-bold text-dark-grey">
//                                                 No images found.
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* Description */}
//                                     <div className="mt-10">
//                                         <div className="mb-5 flex items-center gap-5">
//                                             <div className="h-0.5 w-15 bg-secondary" />

//                                             <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
//                                                 Product Information
//                                             </span>
//                                         </div>

//                                         <h3 className="mb-4 text-4xl font-black uppercase text-dark-grey">
//                                             {detailName}
//                                         </h3>

//                                         <p className="max-w-5xl text-lg text-[#666]">
//                                             {detail.description || "No description available."}
//                                         </p>
//                                     </div>

//                                     {/* Specifications */}
//                                     <div className="mt-5">
//                                         <div className="grid gap-x-5 gap-y-3 md:grid-cols-2">
//                                             {parentProduct?.title && (
//                                                 <div className="flex items-center gap-4">
//                                                     <div className="mt-1 text-primary">
//                                                         <FaCheckCircle className="text-lg" />
//                                                     </div>

//                                                     <p className="text-lg leading-[1.9] text-[#555]">
//                                                         Product: {parentProduct.title}
//                                                     </p>
//                                                 </div>
//                                             )}

//                                             <div className="flex items-center gap-4">
//                                                 <div className="mt-1 text-primary">
//                                                     <FaCheckCircle className="text-lg" />
//                                                 </div>

//                                                 <p className="text-lg leading-[1.9] text-[#555]">
//                                                     Variety: {detailName}
//                                                 </p>
//                                             </div>

//                                             {/* <div className="flex items-center gap-4">
//                                                 <div className="mt-1 text-primary">
//                                                     <FaCheckCircle className="text-lg" />
//                                                 </div>

//                                                 <p className="text-lg leading-[1.9] text-[#555]">
//                                                     Slug: {detailSlug}
//                                                 </p>
//                                             </div> */}
//                                         </div>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div className="py-20 text-center text-lg font-bold text-dark-grey">
//                                     No variety detail found.
//                                 </div>
//                             )}
//                         </div>

//                         {/* RIGHT SIDEBAR */}
//                         <div>
//                             <div className="flex flex-col items-start gap-4">
//                                 {/* Categories */}
//                                 <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
//                                     <div className="mb-4 flex items-center gap-4">
//                                         <div>
//                                             <h3 className="text-2xl font-black text-dark-grey">
//                                                 Product Categories
//                                             </h3>
//                                         </div>
//                                     </div>

//                                     <div className="space-y-4">
//                                         {categories.map((category) => (
//                                             <Link
//                                                 key={category.slug}
//                                                 href={`/product?slug=${category.slug}`}
//                                                 className={`group flex gap-10 items-center justify-between rounded-2xl border px-3 py-3 transition duration-300 ${type === category.type
//                                                     ? "border-secondary bg-secondary text-white"
//                                                     : "border-[#eee] hover:border-secondary/30 hover:bg-[#fafafa]"
//                                                     }`}
//                                             >
//                                                 <span className="font-bold uppercase tracking-[2px]">
//                                                     {category.name}
//                                                 </span>

//                                                 <FaArrowRight
//                                                     className={`transition duration-300 group-hover:translate-x-1 ${type === category.type
//                                                         ? "text-white"
//                                                         : "text-primary"
//                                                         }`}
//                                                 />
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Catalog */}
//                                 <div className="relative overflow-hidden rounded-[35px] bg-white p-7 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
//                                     <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

//                                     <h3 className="text-2xl font-black text-dark-grey">
//                                         Product
//                                         <span className="pl-2">Catalogue</span>
//                                     </h3>

//                                     <div className="mt-5 flex flex-col justify-start items-center gap-4">
//                                         <Link href="https://heyzine.com/flip-book/e4f3d3f75f.html" target="_blank"
//                                             className="flex items-center w-65 cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap">
//                                             <FaEye className="text-md" />
//                                             <span>View Catalogue</span>
//                                         </Link>

//                                         <button className="flex items-center cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap">
//                                             <FaDownload className="text-md" />
//                                             <span>Download Catalogue</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

















// design change

"use client";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/config";

import {
    FaArrowRight,
    FaCheckCircle,
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
        slug: "field",
        type: 2,
    },
    {
        name: "Fruit Crops",
        slug: "fruit",
        type: 3,
    },
];

type GalleryImageType = {
    id: number;
    image: string;
};

type SubProductType = {
    id: number;

    // Vegetable fields
    sub_vegetable_name?: string;
    sub_veg_slug?: string;

    // Field crop fields
    sub_field_crop_name?: string;
    sub_field_name?: string;
    sub_field_slug?: string;

    // Fruit crop fields
    sub_foot_crop_name?: string;
    sub_foot_name?: string;
    sub_foot_slug?: string;

    master_image?: string;
    description?: string | null;

    gallery_images?: GalleryImageType[];
};

type ProductType = {
    id: number;
    title: string;
    image: string;
    headerimage?: string;
    // Vegetable / field crop parent slug
    veg_slug?: string;
    field_slug?: string;
    foot_slug?: string;
    // Child arrays
    sub_vegetables?: SubProductType[];
    sub_field_crops?: SubProductType[];
    sub_foot_crops?: SubProductType[];
};

export default function VarietyDetailPage() {
    const searchParams = useSearchParams();

    const slug = searchParams.get("slug") || "";
    const type = Number(searchParams.get("type") || 1);
    const [products, setProducts] = useState<ProductType[]>([]);

    const [detail, setDetail] = useState<SubProductType | null>(null);
    const [parentProduct, setParentProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState(false);
    const [catalogueLink, setCatalogueLink] = useState("");
    const [catalogueFile, setCatalogueFile] = useState("");
    const [headerImage, setHeaderImage] = useState(header.src);

    const getVarietyDetail = async () => {
        try {
            setLoading(true);

            const res = await axios.post(`${apiUrl}/product-list`, {
                type: type,
            });

            if (res.data?.success) {
                const products: ProductType[] = res.data?.data || [];
                setProducts(products);
                let foundDetail: SubProductType | null = null;
                let foundParent: ProductType | null = null;

                products.forEach((product) => {
                    let match: SubProductType | undefined;

                    // Vegetable detail match
                    if (type === 1) {
                        match = product.sub_vegetables?.find(
                            (subItem) => subItem.sub_veg_slug === slug
                        );
                    }

                    // Field crop detail match
                    if (type === 2) {
                        match = product.sub_field_crops?.find(
                            (subItem) => subItem.sub_field_slug === slug
                        );
                    }

                    // Field crop detail match
                    if (type === 3) {
                        match = product.sub_foot_crops?.find(
                            (subItem) => subItem.sub_foot_slug === slug
                        );
                    }

                    if (match) {
                        foundDetail = match;
                        foundParent = product;

                        setHeaderImage(
                            product.headerimage || header.src
                        );
                    }
                });

                setDetail(foundDetail);
                setParentProduct(foundParent);
            } else {
                setDetail(null);
                setParentProduct(null);
                setHeaderImage(header.src);
            }
        } catch (error) {
            console.log("Variety Detail API Error:", error);
            setDetail(null);
            setParentProduct(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (slug && type) {
            getVarietyDetail();
        }
    }, [slug, type]);

    const detailName =
        type === 2
            ? detail?.sub_field_crop_name || detail?.sub_field_name
            : type === 3
                ? detail?.sub_foot_crop_name
                : detail?.sub_vegetable_name;

    const detailSlug =
        type === 2
            ? detail?.sub_field_slug
            : type === 3
                ? detail?.sub_foot_slug
                : detail?.sub_veg_slug;

    const parentSlug =
        type === 2
            ? parentProduct?.field_slug
            : type === 3
                ? parentProduct?.foot_slug
                : parentProduct?.veg_slug;

    const galleryImages = [
        ...(detail?.master_image ? [{ id: 0, image: detail.master_image }] : []),
        ...(detail?.gallery_images || []),
    ];

    const toTitleCase = (text?: string) =>
        text
            ?.toLowerCase()
            .split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
            )
            .join(" ");

     useEffect(() => {
            const getCatalogueLink = async () => {
                try {
                    const res = await axios.post(
                        `${apiUrl}/catalogue/link`
                    );
    
                    if (res.data?.status) {
                        setCatalogueLink(res.data.data.catalogue_link);
                    }
                } catch (error) {
                    console.log("Catalogue API Error:", error);
                }
            };
    
            getCatalogueLink();
        }, [slug])

        useEffect(() => {
        const getCatalogueFile = async () => {
            try {
                const res = await axios.post(
                    "https://admin.kartavyaseeds.com/api/catalogue/file"
                );

                if (res.data?.status) {
                    setCatalogueFile(res.data.data.file_url);
                }
            } catch (error) {
                console.log("Catalogue File API Error:", error);
            }
        };

        getCatalogueFile();
    }, [slug])

    return (
        <>
            <Breadcrumb
                title={detailName || "Variety Detail"}
                // subtitle={
                //     parentProduct?.title
                //         ? `Premium ${parentProduct.title} Variety`
                //         : "Premium Variety"
                // }
                backgroundImage={headerImage}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: type === 2
                            ? "Field Crops"
                            : type === 3
                                ? "Fruit Crops"
                                : "Vegetable Crops",
                        href: `/product?slug=${type === 2
                            ? "field"
                            : type === 3
                                ? "fruits"
                                : "vegetables"}`,
                    },
                    {
                        label: parentProduct?.title
                            ? `${parentProduct.title} Varieties`
                            : "Varieties",
                        href: parentSlug
                            ? `/variety?slug=${parentSlug}&type=${type}`
                            : `/variety?type=${type}`,
                    },
                    { label: detailName || "Detail" },
                ]}
            />

            <section className="relative overflow-hidden bg-[#f8f8f8] py-15 md:py-20">
                {/* Background Blur */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    <div className="">
                        {/* LEFT CONTENT */}
                        <div>
                            {loading ? (
                                <div className="py-20 text-center text-lg font-bold text-dark-grey">
                                    Loading variety detail...
                                </div>
                            ) : detail ? (
                                <>
                                    {/* TOP SECTION */}
                                    <div className="grid items-start gap-5 xl:grid-cols-[40%_60%]">

                                        {/* IMAGE SHOWCASE */}
                                        <div className=" overflow-hidden">

                                            {galleryImages.length > 0 ? (
                                                <Swiper
                                                    modules={[Autoplay, Pagination]}
                                                    speed={1000}
                                                    loop={galleryImages.length > 1}
                                                    slidesPerView={1}
                                                    autoplay={{
                                                        delay: 7000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    className="w-full"
                                                >
                                                    {galleryImages.map((item, index) => (
                                                        <SwiperSlide key={item.id || index}>

                                                            <div className="flex justify-center py-6">

                                                                <div className="group relative">

                                                                    {/* Glow */}
                                                                    <div className="absolute inset-0 rounded-full blur-2xl transition duration-500"></div>

                                                                    {/* Rounded Image */}
                                                                    <div className="relative h-70 w-70 md:h-90 md:w-90 overflow-hidden rounded-full   bg-white transition duration-500 group-hover:-translate-y-2 ">

                                                                        <img
                                                                            src={item.image}
                                                                            alt={detailName || "Variety Detail"}
                                                                            className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                                                                        />

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            ) : (
                                                <div className="py-10 text-center text-lg font-bold text-dark-grey">
                                                    No images found.
                                                </div>
                                            )}
                                        </div>

                                        {/* DESCRIPTION + INFO */}
                                        <div className="">

                                            {/* Description */}
                                            <div>
                                                {/* <div className="mb-5 flex items-center gap-5">
                                                    <div className="h-0.5 w-15 bg-secondary" />

                                                    <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
                                                        Product Information
                                                    </span>
                                                </div> */}

                                                <h3 className="mb-4 text-3xl md:text-4xl font-black  text-dark-grey">
                                                    {toTitleCase(detailName)}
                                                </h3>

                                                <div
                                                    className="custom-description max-w-5xl text-md md:text-lg leading-loose text-[#666]"
                                                    dangerouslySetInnerHTML={{
                                                        __html: detail?.description || "No description available.",
                                                    }}
                                                />
                                            </div>

                                            {/* Specifications */}
                                            <div className="mt-8">
                                                <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">

                                                    {/* {parentProduct?.title && (

                                                        <div className="flex items-center gap-4 rounded-2xl">

                                                            <div className="mt-1 text-primary">
                                                                <FaCheckCircle className="text-lg" />
                                                            </div>
                                                            <div>
                                                                <p className="text-lg font-normal text-light-grey">
                                                                    Product:  {parentProduct.title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )} */}

                                                    {/* <div className="flex items-center gap-4 rounded-2xl">

                                                        <div className="mt-1 text-primary">
                                                            <FaCheckCircle className="text-lg" />
                                                        </div>

                                                        <div>
                                                            

                                                            <p className="text-lg font-normal text-light-grey">
                                                                Variety: {detailName}
                                                            </p>
                                                        </div>

                                                    </div> */}

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    {/* SECOND SECTION */}
                                    <div className="mt-16 block xl:grid gap-8 xl:grid-cols-[70%_30%]">

                                        {/* RELATED PRODUCTS */}
                                        <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

                                            <div className="mb-6">
                                                <h3 className="text-3xl font-black text-dark-grey">
                                                    Related Products
                                                </h3>
                                            </div>

                                            <div className="relative">

                                                {/* CUSTOM NAVIGATION */}
                                                <button className="related-prev cursor-pointer  absolute -left-8 top-27 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full  text-primary  transition duration-300 ">
                                                    ❮
                                                </button>

                                                <button className="related-next cursor-pointer absolute -right-8 top-27 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full  text-primary  transition duration-300 ">
                                                    ❯
                                                </button>

                                                <Swiper
                                                    modules={[Navigation, Pagination]}
                                                    speed={1000}
                                                    loop={true}
                                                    centeredSlides={false}
                                                    navigation={{
                                                        prevEl: ".related-prev",
                                                        nextEl: ".related-next",
                                                    }}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    breakpoints={{
                                                        0: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 20,
                                                        },
                                                        768: {
                                                            slidesPerView: 2,
                                                            spaceBetween: 20,
                                                        },
                                                        1024: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 20,
                                                        },
                                                        1200: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 20,
                                                        },
                                                    }}
                                                    className="related-swiper px-10 pb-14"
                                                >

                                                    {products.map((product) => (
                                                        <SwiperSlide key={product.id}>

                                                            <Link
                                                                href={`/variety?slug=${type === 1
                                                                    ? product.veg_slug
                                                                    : type === 3
                                                                        ? product.foot_slug
                                                                        : product.field_slug
                                                                    }&type=${type}`}
                                                                className="group flex flex-col items-center text-center"
                                                            >

                                                                <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 bg-white transition duration-500 group-hover:border-secondary">

                                                                    <img
                                                                        src={product.image}
                                                                        alt={product.title}
                                                                        className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                                                                    />

                                                                </div>

                                                                <div className="mt-4">
                                                                    <h3 className="text-xl font-black  text-dark-grey transition duration-300 group-hover:text-secondary">
                                                                        {toTitleCase(product.title)}
                                                                    </h3>
                                                                </div>

                                                            </Link>

                                                        </SwiperSlide>
                                                    ))}

                                                </Swiper>

                                            </div>

                                        </div>

                                        {/* CATALOGUE */}
                                        <div>

                                            <div className="relative overflow-hidden rounded-[35px] bg-white w-98 xl:w-auto p-7 mt-5 xl:mt-0 text-white ">

                                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

                                                <h3 className="text-2xl font-black text-dark-grey">
                                                    Product
                                                    <span className="pl-2">Catalogue</span>
                                                </h3>

                                                <div className="mt-5 flex flex-col justify-start  gap-4">

                                                    <Link
                                                        href={catalogueLink}
                                                        target="_blank"
                                                        className={`flex items-center w-65 justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap ${!catalogueLink ? "pointer-events-none opacity-50" : ""}`}
                                                    >
                                                        <FaEye className="text-md" />
                                                        <span>View Catalogue</span>
                                                    </Link>

                                                    <Link 
                                                   href={catalogueFile}
                                                   target="_blank"
                                                     className={`flex items-center cursor-pointer justify-start gap-3 rounded-xl bg-secondary px-5 py-3 text-md text-white font-bold uppercase transition duration-300 hover:bg-primary whitespace-nowrap ${!catalogueFile ? "pointer-events-none opacity-50" : ""}`}>

                                                        <FaDownload className="text-md" />
                                                        <span>Download Catalogue</span>

                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </>
                            ) : (
                                <div className="py-20 text-center text-lg font-bold text-dark-grey">
                                    No variety detail found.
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </section>


            
        </>
    );
}
