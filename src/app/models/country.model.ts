
/**
 * Country interface
 */
export interface ICountry {
    /**
     * Country Id
     */
    countryId?: string;

    /**
     * Country name
     */
    countryName?: string;
}

/**
 * Country class
 */
export class Country implements ICountry {
    
    /**
     * Country Id
     */
    countryId?: string;

    /**
     * Country name
     */
    countryName?: string;

    constructor(params: ICountry = {}) {
        this.countryId = params.countryId ? params.countryId : undefined;
        this.countryName = params.countryName ? params.countryName : undefined;
    }

}