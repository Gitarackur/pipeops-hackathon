 
 
 
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: any }) => {
	const { getUser } = getKindeServerSession();

	 

	return (
		<div className="flex min-h-screen flex-col">
			<nav className="flex flex-row h-14 w-full px-5 py-6 items-center border">
				<span>APILogger</span>
				<div className="flex w-full justify-end gap-2">
					 
				</div>
			</nav>
			 
				<main className="px-10 w-full mt-4">{children}</main>
			 
		</div>
	);
};

export default DashboardLayout;
