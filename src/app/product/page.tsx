import { Suspense } from "react";
import ProductPageClient from "./ProductPageClient";

export default function Page() {
    return (
        <Suspense
            fallback={
                <div className="py-20 text-center text-lg font-bold">
                    Loading products...
                </div>
            }
        >
            <ProductPageClient />
        </Suspense>
    );
}