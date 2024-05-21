import { Application, NextFunction, Request, Response } from "express";

interface RequestLog {
	apiKey: string;
	projectId: string;
	request: {
		endpoint: string;
		query: string | null;
		body: string | null;
		params: string | null;
		headers: string | null;
		method: string;
		ip: string | undefined;
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

interface Auth {
	apiKey: string | null;
	projectId: string | null;
}

class ApiLogger {
	private static instance: ApiLogger | null = null;

	constructor(
		private app: Application,
		private auth: Auth = { apiKey: null, projectId: null }
	) {
		this.app = app;

		// Singleton pattern
		if (ApiLogger.instance) {
			return ApiLogger.instance;
		}

		if (!this.auth.apiKey || !this.auth.projectId) {
			console.warn("ApiLogger - Missing credentials");
			// return;
		}

		ApiLogger.instance = this;
	}

	init() {
		return async (req: Request, res: Response, next: NextFunction) => {
			next();
		};
	}

	private async captureData(data: RequestLog) {
		if (!this.auth.apiKey || !this.auth.projectId) {
			return;
		}

		try {
			// @ts-ignore
			// Send payload to backend
		} catch (error: any) {
			console.warn(error.message);
		}
	}
}

// let apiLogger = new ApiLogger({}, {});

// app.use(apiLogger.init());

export default ApiLogger;
