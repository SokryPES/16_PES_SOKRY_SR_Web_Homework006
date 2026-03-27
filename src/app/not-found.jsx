import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
	return (
		<section className="relative flex items-center justify-center px-6 py-16">
			<div className=" absolute " />

			<div className="relative z-10 mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/90 p-10 text-center shadow-2xl backdrop-blur-sm">
				<p className="text-7xl font-black  text-slate-200">404</p>
				<h1 className="mt-2 text-4xl font-black text-slate-900">Oops! Page not found.</h1>
				<p className="mx-auto mt-4 max-w-xl text-slate-500">
					The page you requested does not exist. This can happen when a sidebar link points to a route that has not been created yet.
				</p>

				<div className="mt-8 flex items-center justify-center gap-3 ">
					<Link
						href="/"
						className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
					>
						<Home className="h-4 w-4" />
						Back to Homepage
					</Link>
					<Link
						href="/products"
						className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
					>
						<Search className="h-4 w-4" />
						Browse Products
					</Link>
				</div>
			</div>
		</section>
	);
}
