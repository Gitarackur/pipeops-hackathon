"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

let data = {
	_creationTime: 1710186391462.2485,
	_id: "jh702hmtnjffkk52y4bdfe670h6n2ww4",
	projectId: "1235",
	request: {
		body: null,
		endpoint: "/posts/123",
		headers: '{"Accept":"application/json","Content-Type": "application/json"}',
		ip: "192.100.0.0.1",
		method: "get",
		params: '{"id":"123"}',
		query: '{"slug":"best-phones-of-2024"}',
	},
	response: {
		body: '{"data":{"blogPost":"The best phone of the year are very descent.","date":"03-03-2024"},"message":"Blog post was fetched sucessfully."}',
		headers: '{"Content-Type":"application/json"}',
		status: 200,
	},
	server: { arch: "win32", platform: "windows" },
};

interface Request {
	_creationTime: number;
	_id: string;
	projectId: string;
	request: {
		body: string | null;
		endpoint: string;
		headers: string | null;
		ip: string;
		method: string;
		params: string;
		query: string;
	};
	response: {
		body: string | null;
		headers: string | null;
		status: number;
	};
	server: {
		arch: string;
		platform: string;
	};
}

interface Props {
	params: { [index: string]: string };
	searchParams: { [index: string]: string };
}

const RequestById = (props: Props) => {
	return (
		<div>
			<section className="mt-[3rem] mb-[2rem] flex flex-col gap-2">
				<p className="font-poppins font-medium text-[18px]">Request</p>
				<div className="flex h-5 items-center space-x-4 text-sm">
					<div>192020839392</div>
					{/* <Separator orientation="vertical" /> */}
					<div>https://demo.treblle.com/api/v1/</div>
				</div>
			</section>

			{/* Request meta data */}
			<RequestMetaCard
				request={data.request}
				response={data.response}
				createdAt="30 minutes ago"
			/>

			{/* Request details */}
			<RequestLogCard request={data.request} createdAt="30 minutes ago" />

			{/* Response details */}
			<ResponseLogCard response={data.response} createdAt="30 minutes ago" />
		</div>
	);
};

const RequestMetaCard = ({ request, createdAt }: any) => {
	let { body, headers } = request;

	return (
		<div className="border h-fit min-h-[155px] rounded-md mt-[3rem] mb-[5rem] border-dashed border-green-400">
			<div className="flex items-center text-sm p-[8px_20px] bg-[#e6eaf0]">
				<div className="w-1/2 gap-3 flex items-center text-sm">
					<span className="font-bold font-poppins">Request Details</span>
				</div>
				<div className="w-1/2 flex flex-row-reverse">
					<span>{createdAt}</span>
				</div>
			</div>
		</div>
	);
};

const RequestLogCard = ({ request, createdAt }: any) => {
	let { body, headers } = request;

	return (
		<div className="border h-fit min-h-[170px] rounded-md mt-[3rem] mb-[5rem] border-dashed border-green-400">
			<div className="flex items-center text-sm p-[8px_20px] bg-[#e6eaf0]">
				<div className="w-1/2 gap-3 flex items-center text-sm">
					<span className="font-bold font-poppins">Request Details</span>
				</div>
				<div className="w-1/2 flex flex-row-reverse">
					<span>{createdAt}</span>
				</div>
			</div>
		</div>
	);
};

const ResponseLogCard = ({ response, createdAt }: any) => {
	let { body, headers } = response;

	return (
		<div className="border h-fit min-h-[170px] rounded-md mt-4 mb-[10rem] border-dashed border-green-400">
			<div className="flex items-center text-sm p-[8px_20px] bg-[#e6eaf0]">
				<div className="w-1/2 gap-3 flex items-center text-sm">
					<span className="font-bold font-poppins">Response Details</span>
				</div>
				<div className="w-1/2 flex flex-row-reverse">
					<span>{createdAt}</span>
				</div>
			</div>
		</div>
	);
};

export default RequestById;
