interface ApiError {
    code?: string;
    message?: string;
}

export interface FetchParams {
    url: string;
    body?: object;
}

export interface ErrorResponse {
    errors: ApiError[];
    status: boolean;
}

export class ServiceResponse<T> {
    public response?: T;
    public errors: ApiError[];
    public httpCode: number;

    constructor() {
        this.httpCode = 0;
        this.errors = [];
    }

    public status = (): boolean => this.errors.length === 0;

    public addError = (message: string, code?: string): void => {
        this.errors.push({code, message});
    }

    public addErrors = (errors: ApiError[]): void => {
        this.errors.push(...errors);
    }

    public printErrors = (): string => {
        return this.errors
            .map((x) => (x.code ? `${x.code}: ${x.message}` : x.message))
            .join();
    }
}