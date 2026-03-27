"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({
	placeholder = "Search",
}) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const q = searchParams.get("q") ?? "";

	const handleChange = (event) => {
		const value = event.target.value;
		const params = new URLSearchParams(searchParams.toString());

		if (value) params.set("q", value);
		else params.delete("q");

		const nextQuery = params.toString();
		router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
			scroll: false,
		});
	};

	return (
		<div className="w-full max-w-md">
			<div className="relative">
				<Search className=" absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
				<input
					type="text"
					value={q}
					onChange={handleChange}
					placeholder={placeholder}
					className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
				/>
			</div>
		</div>
	);
}
