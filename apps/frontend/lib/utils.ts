import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const platforms = [
	{ platform: "actix" },
	{ platform: "adonisjs" },
	{ platform: "cloudflare" },
	{ platform: "directus" },
	{ platform: "django" },
	{ platform: "express" },
	{ platform: "fastify" },
	{ platform: "go" },
	{ platform: "koa" },
	{ platform: "laravel" },
	{ platform: "lumen" },
	{ platform: "net" },
	{ platform: "netcore" },
	{ platform: "node" },
	{ platform: "php" },
	{ platform: "ruby" },
	{ platform: "rust" },
	{ platform: "sails" },
	{ platform: "spring" },
	{ platform: "strapi" },
	{ platform: "symfony" },
] as const;

export type Platform = (typeof platforms)[number]["platform"];

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function platformLogoUrl(name: Platform) {
	return `https://d2fmpha09dm3d8.cloudfront.net/2a74cceb-a468-4012-910f-3aacfc4bb66c/images/language-logos/bland/${name}.svg`;
}
export function roboHashImg(str: string | null) {
	return str ? `https://robohash.org/${str}/size=100x100&set=set5` : null;
}

export function isValidJsonString(str: string) {
	try {
		JSON.parse(str);
		return true;
	} catch (er: any) {
		return false;
	}
}

 