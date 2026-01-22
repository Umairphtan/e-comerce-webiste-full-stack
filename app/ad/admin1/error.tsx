"use client";
import { useEffect } from "react";


export default function Error({
error,
reset,
}: {
error: Error;
reset: () => void;
}) {
useEffect(() => {
console.error("Admin error:", error);
}, [error]);


return (
<div className="flex items-center justify-center h-screen bg-slate-100">
<div className="bg-white rounded-2xl p-8 shadow-lg text-center w-[360px]">
<h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
<p className="text-sm text-slate-600 mb-6">
Something went wrong in admin panel.
</p>
<button
onClick={reset}
className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
>
Try again
</button>
</div>
</div>
);
}