import React from "react";
import Link from "next/link";
import {
	ArrowLeft,
	Calendar,
	CreditCard,
	DollarSign,
	User,
	UserRound,
} from "lucide-react";

export default function CustomerDetail({ customer }) {

	return (
		<section className="w-full p-20 flex justify-center">
			<div className="w-full  rounded-[2rem] border border-[#e7eaee] bg-[#f9fbfd] shadow-xl flex">
				<div className="flex flex-col items-center justify-center gap-4 border-b border-[#e7eaee] bg-[#f3f5f7] p-8 ">
					<div className="grid size-38 place-content-center rounded-full border-4 border-white bg-[#d8dce1] ">
						<UserRound className="size-18 text-[#7a8088]" />
					</div>
					<h2 className="text-center text-4xl font-black tracking-tight text-[#0f1730]">
						{customer.firstName} {customer.lastName}
					</h2>
				</div>

				<div className="p-6 md:p-10">
					<Link
						href="/customers"
						className="inline-flex items-center gap-2 text-[11px] font-bold text-[#8ca0bb] uppercase transition hover:text-[#607998]"
					>
						<ArrowLeft className="size-3.5" />
						Back to customer table
					</Link>

					<div className="mt-8 grid gap-6 md:grid-cols-2">
						<div>
							<p className="text-[11px] font-bold tracking-[0.18em] text-[#90a2ba] uppercase">
								Full Name
							</p>
							<p className="mt-2 inline-flex items-center gap-2 text-3xl font-extrabold text-[#233350]">
								<User className="size-5 text-[#f59e0b]" />
								{customer.firstName} {customer.lastName}
							</p>
						</div>

						<div>
							<p className="text-[11px] font-bold tracking-[0.18em] text-[#90a2ba] uppercase">
								Total Spent
							</p>
							<p className="mt-2 inline-flex items-center gap-2 text-4xl font-black text-[#162345]">
								<span className="grid size-8 place-content-center rounded-lg bg-emerald-100">
									<DollarSign className="size-6 text-emerald-600" />
								</span>
								${customer.moneySpent ?? 0}
							</p>
						</div>

						<div>
							<p className="text-[11px] font-bold text-[#90a2ba] uppercase">
								Birthdate
							</p>
							<p className="mt-2 inline-flex items-center gap-2 text-xl font-bold text-[#233350]">
								<Calendar className="size-4 text-[#f59e0b]" />
								{customer.birthDate ?? "N/A"}
							</p>
						</div>

						<div>
							<p className="text-[11px] font-bold text-[#90a2ba] uppercase">
								Account ID
							</p>
							<p className="mt-2 inline-flex max-w-full items-center gap-2 border border-[#9aacbf] rounded-xl px-2 py-2 text-sm font-medium text-[#7287a5]">
								<CreditCard className="size-4 " />
								<span>{customer.customerId ?? "N/A"}</span>
							</p>
						</div>
					</div>

					<div className="mt-10 flex gap-3 ">
						<button
							type="button"
							className="w-full cursor-pointer inline-flex h-12 items-center justify-center rounded-2xl bg-[#0e183b] px-10 text-sm font-extrabold text-white shadow-xl transition hover:bg-[#152b69]"
						>
							Edit Profile
						</button>
						<button
							type="button"
							className="w-full cursor-pointer inline-flex h-12 items-center justify-center rounded-2xl border border-red-200 bg-red-50/20 px-10 text-sm font-extrabold text-[#48566f] transition hover:bg-red-50"
						>
							Delete This User
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
