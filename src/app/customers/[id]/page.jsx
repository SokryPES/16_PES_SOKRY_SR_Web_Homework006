import React from "react";
import CustomerDetail from "@/components/CustomerDetail";

export default async function page({ params }) {
	const { id } = await params;
	const res = await fetch(
		`https://homework-api.noevchanmakara.site/api/v1/customers/${id}`
	);
	const customer = await res.json();

	return (
		<div>
			<CustomerDetail customer={customer.payload} />
		</div>
	);
}
