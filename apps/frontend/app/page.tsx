import { Button } from "@/components/ui/button";
import {
	LoginLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

import React from "react";

interface Tabs {
	title: string;
	features: {
		title: string;
	}[];
}

let features: Tabs[] = [
	{
		title: "API Observability",
		features: [
			{
				title:
					"All data is consolidated and presented in one accessible location",
			},
			{
				title: "Uncover hidden, dead or zombie endpoints in real time",
			},
			{
				title: "Improved customer support and error tracking",
			},
		],
	},
	{
		title: "API Analytics",
		features: [
			{
				title: "It's like google Analytics for rest apis",
			},
			{
				title:
					"The only platform where you can find all the relevant API information at a glance.",
			},
			{
				title: "Improve engineering and production management.",
			},
		],
	},
];

export default async function Home() {
	const { isAuthenticated } = getKindeServerSession();

	if (await isAuthenticated()) {
		redirect("/dashboard");
	}

	return (
		<main className="flex min-h-screen flex-col items-center bg-[#01041a]">
			<nav className="flex flex-row h-14 w-full px-3 py-6 items-center border-b-[1px] border-gray-50">
				<div className="relative font-semibold text-gray-50">
					<span>APILogger</span>
				</div>
				<div className="flex w-full justify-end gap-2">
					<Button
						size={"sm"}
						variant={"outline"}
						className="bg-transparent text-white"
					>
						<LoginLink postLoginRedirectURL="/projects">Sign in</LoginLink>
					</Button>
					<Button size={"sm"}>
						<RegisterLink postLoginRedirectURL="/projects/create">
							Sign up
						</RegisterLink>
					</Button>
				</div>
			</nav>
			<section className="w-[650px] mx-auto mt-14">
				<div className="flex flex-col text-center item-center ">
					<h1 className="text-[60px] font-poppins leading-[1.1] text-white font-bold mb-[20px]">
						<span className="text-blue-500 font-extrabold">Unleash</span> the
						Power of Your
						<span className="text-fuchsia-500"> APIs</span>
					</h1>
					<p className="font-inter text-[18px] leading-[1.3] mb-[30px] text-[#8a8f98]">
						See what your APIs are really doing - Gain complete control with our
						comprehensive observability solution. Its like{" "}
						<span className="underline underline-offset-2">devtools</span> for
						rest APIs
					</p>
					<div>
						<Button
							variant={"default"}
							className="relative rounded-2xl font-inter pl-8 pr-6 text-center mb-2 hover:bg-[#206eff]"
						>
							Get Started for Free <ArrowRight className="ml-4 w-4" />
						</Button>
					</div>
					<p>*No credit card needed</p>
				</div>
			</section>
			<section className="flex flex-col pt-[3rem] bg-[#fff] w-full items-center h-[600px]">
				<span className="text-[52px] font-poppins leading-[1.1]">
					Why would I need this?
				</span>
				<span className="text-[16px] text-center leading-[1.4] mx-auto max-w-[820px]">
					Empowering API producers by showing actionable data in real-time where
					it matters. Gain deeper understanding of your api and improve
					developer experience (DX)
				</span>
				<div className="flex items-center w-auto max-w-[1280px] mt-8">
					<Features data={features} />
				</div>
			</section>
		</main>
	);
}

const Features = ({ data }: { data: Tabs[] }) => {
	return data.map(({ title, features }) => {
		return (
			<div key={crypto.randomUUID()} className="px-14">
				<p className="font-bold font-poppins text-[36px] mb-3">{title}</p>
				<ul className="grid gap-y-3 w-auto">
					{features.map((feature, index) => (
						<div className="flex gap-2" key={crypto.randomUUID()}>
							<span>
								<ChevronRight size="1.3rem" color="blue" />
							</span>
							<li className="text-[18px] text-[#6c7285] w-full max-w-[470px] leading-[1.4]">
								{feature.title}
							</li>
						</div>
					))}
				</ul>
			</div>
		);
	});
};
