import { Suspense } from "react";
import VarietyDetailPageClient from "./VarietyDetailPageClient";

export default function Page() {
    return (
        <Suspense
            fallback={
                <div className="py-20 text-center text-lg font-bold">
                    Loading variety detail...
                </div>
            }
        >
            <VarietyDetailPageClient />
        </Suspense>
    );
}