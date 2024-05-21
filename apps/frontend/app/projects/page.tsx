"use client";

 
import { platformLogoUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "react-timeago";

 
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
 
 
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
 

interface Project {
	_id: string;
	_creationTime: number;
	invites?: string[] | undefined;
	platform: string;
	author: string;
	baseUrl: string;
	projectId: string;
	projectName: string;
}

const Projects = () => {
	 

	 
 

	 

	return (
		<>
			<section className="mt-[3rem] mb-[2rem] flex flex-col gap-2">
				<p className="font-poppins font-medium text-[18px]">Dashboard</p>
			</section>

			<Tabs defaultValue="projects">
				<TabsList className="relative">
					<TabsTrigger value="projects">Projects</TabsTrigger>
					<span className="absolute right-0 translate-x-20">192,100</span>
				</TabsList>
				<TabsContent value="projects">
					{/* Projects */}
 
				</TabsContent>
			</Tabs>

			{/* <section className="h-40 bg-red-400 mt-[3rem]"></section> */}
		</>
	);
};

const ProjectsCard = ({ data }: { data: Project }) => {
	let {
		_id,
		author,
		baseUrl,
		projectId,
		projectName,
		invites,
		platform,
		_creationTime,
	} = data;
	return (
		<div className="border h-fit min-h-[187px] rounded-md mt-[1.5rem] border-dashed border-green-400">
			<div className="flex items-center text-sm p-[8px_20px] bg-[#e6eaf0]">
				<div className="w-1/2 gap-3 flex items-center text-sm">
					<div className="relative align-middle w-auto max-h-[15px] h-[15px]">
						 
					</div>

					{/* <span>env: {environment}</span>
					<span>version: {version}</span> */}
				</div>
				<div className="w-1/2 flex flex-row-reverse">
					{/* <TimeAgo date={_creationTime} /> */}
				</div>
			</div>
			 
		</div>
	);
};

 

export default Projects;
