import { ErrorResponse, FetchParams, ServiceResponse } from "../models/fetch";

class FetchService {

    public static async get<T>({
        url
    }: FetchParams): Promise<ServiceResponse<T>> {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: this.getHeaders(),
            })

            return this.processResponse<T>(response);
        } catch (error: any) {
            const sr = new ServiceResponse<T>();
            sr.addError(error.message)
            return sr;
        }
    }

    public static async post<T>({url, body}: FetchParams) {
        try {
            const response = await fetch (url, {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify(body)
            })
            return this.processResponse<T>(response);
        } catch (error: any) {
            const sr = new ServiceResponse<T>();
            sr.addError(error.message)
            return sr;
        }
    }


    private static getHeaders(): Headers {
        const headers = new Headers({
            "Content-Type": "application/json",
        });
        return headers;
    }

    private static async processResponse<T>(
        response: Response
    ): Promise<ServiceResponse<T>> {
        const sr = new ServiceResponse<T>();
        sr.httpCode = response.status

        if(response.ok){
            if(response.status === 200) sr.response = (await response.json()) as T;
            return sr;
        }

        if(response.status === 400) {
            sr.addErrors(((await response.json()) as ErrorResponse).errors);
            return sr;
        }

        if(response.status === 401) {
            sr.addError("Unauthorized");
            return sr;
        }

        if(response.status === 404) {
            sr.addError("Resource not found");
            return sr;
        }

        const error = new Error(await response.text());
        sr.addError(error.message);
        return sr;
    }


}

export default FetchService;