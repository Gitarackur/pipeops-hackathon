"use client";

 
import { methodColor } from "@/lib/utils";
import { KeyRoundIcon, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

 
 
 


 

interface Props {
	params: { [index: string]: string };
	searchParams: { [index: string]: string };
}

interface Results {
	_id: string;
	_creationTime: number;
	projectId: string;
	request: {
		body: string | null;
		endpoint: string;
		headers: any;
		ip: string;
		method: string;
		params: string | null;
		query: string | null;
	};
	response: {
		status: number;
		body: string | null;
		headers: string | null;
	};
	server: {
		platform: string;
		arch: string;
	};
}

const ProjectRequests = (props: Props) => {
 

	 
	 

	 

	return (
		<>
			<section className="mt-[3rem] mb-[2rem] flex flex-col gap-2">
				<p className="font-poppins font-medium text-[18px]">Dashboard</p>
				<div className="flex h-5 items-center space-x-4 text-sm">
					<div>192020839392</div>
					<Separator orientation="vertical" />
					<div>https://demo.treblle.com/api/v1/</div>
				</div>
			</section>
 
			{/* <div className="h-16"></div> */}
		</>
	);
};

interface RequestCardProp {
	requestMethod: string;
	requestStatus: number;
	version: string;

	requestUrl: string;
	requestBody: string;
	requestId: string;

	createdAt: string;
}

 
 

export default ProjectRequests;
