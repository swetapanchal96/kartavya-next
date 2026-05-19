import { Suspense } from "react";
import VarietyPageClient from "./VarietyPageClient";

export default function Page() {
    return (
        <Suspense
            fallback={
                <div className="py-20 text-center text-lg font-bold">
                    Loading varieties...
                </div>
            }
        >
            <VarietyPageClient />
        </Suspense>
    );
}