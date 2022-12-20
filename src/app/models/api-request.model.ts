import { ApiControllers } from 'src/app/enums/api-controllers.enum';
import { RestVerbs } from '../enums/rest-verbs.enum';

/**
 * Interface for api request
 */
export interface IApiRequest {

    /**
     * Api controller
     */
    apiController?: ApiControllers;

    /**
     * Rest verb (GET, POST, PUT and DELETE)
     */
    restVerb?: RestVerbs;

    /**
     * Request body
     */
    body?: object;

}

/**
 * Class for api request
 */
export class ApiRequest implements IApiRequest {

    /**
     * Api controller
     */
    apiController?: ApiControllers;

    /**
     * Rest verb (GET, POST, PUT and DELETE)
     */
    restVerb?: RestVerbs;

    /**
     * Request body
     */
    body?: object;

    constructor(params: ApiRequest = {}) {
        this.apiController = params.apiController ? params.apiController : undefined;
        this.restVerb = params.restVerb ? params.restVerb : undefined;
        this.body = params.body ? params.body : undefined;
    }

}
