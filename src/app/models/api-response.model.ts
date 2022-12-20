
/**
 * Interface for api response
 */
export interface IApiResponse {

    /**
     * If operation has error
     */
    hasError?: boolean;

    /**
     * Error message
     */
    errorMessage?: string;

    /**
     * Response from service
     */
    data?: any;

}

/**
 * Class for api response
 */
export class ApiResponse implements IApiResponse {

    /**
     * If operation has error
     */
    hasError?: boolean;

    /**
     * Error message
     */
    errorMessage?: string;

    /**
     * Response from service
     */
    data?: any;

    constructor(params: ApiResponse = {}) {
        this.hasError = params.hasError ? params.hasError : false;
        this.errorMessage = params.errorMessage ? params.errorMessage : undefined;
        this.data = params.data ? params.data : null;
    }
}