
/**
 * Country VAT rate interface
 */
export interface ICountryVATRate {

    /**
     * Country VAT Rate Id
     */
    countryVATRateId?: string;

    /**
     * Country VAT Rate value
     */
    countryVATRateValue?: number;

    /**
     * Country Id
     */
    countryId?: string;
}

/**
 * Country VAT rate class
 */
export class CountryVATRate implements ICountryVATRate {

    /**
     * Country VAT Rate Id
     */
    countryVATRateId?: string;

    /**
     * Country VAT Rate value
     */
    countryVATRateValue?: number;

    /**
     * Country Id
     */
    countryId?: string;

    constructor(params: ICountryVATRate = {}) {
        this.countryVATRateId = params.countryVATRateId ? params.countryVATRateId : undefined;
        this.countryVATRateValue = params.countryVATRateValue ? params.countryVATRateValue : undefined;
        this.countryId = params.countryId ? params.countryId : undefined;
    }
}