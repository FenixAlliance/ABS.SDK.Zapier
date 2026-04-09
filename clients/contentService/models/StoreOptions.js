const utils = require('../utils/utils');
const AdvancedOptions = require('../models/AdvancedOptions');
const CartOptions = require('../models/CartOptions');
const CouponsOptions = require('../models/CouponsOptions');
const DownloadablesOptions = require('../models/DownloadablesOptions');
const EmailOptions = require('../models/EmailOptions');
const IdentityAndPrivacyOptions = require('../models/IdentityAndPrivacyOptions');
const IntegrationOptions = require('../models/IntegrationOptions');
const InventoryOptions = require('../models/InventoryOptions');
const MeasurementOptions = require('../models/MeasurementOptions');
const PaymentOptions = require('../models/PaymentOptions');
const PriceCalculationOptions = require('../models/PriceCalculationOptions');
const RecommendationOptions = require('../models/RecommendationOptions');
const ReviewsOptions = require('../models/ReviewsOptions');
const ServicesOptions = require('../models/ServicesOptions');
const SubscriptionsOptions = require('../models/SubscriptionsOptions');
const TaxCalculationOptions = require('../models/TaxCalculationOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}footerLogo`,
                label: `[${labelPrefix}footerLogo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tagline`,
                label: `[${labelPrefix}tagline]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}addressLine1`,
                label: `[${labelPrefix}addressLine1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}addressLine2`,
                label: `[${labelPrefix}addressLine2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postalCode`,
                label: `[${labelPrefix}postalCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}numberOfDecimals`,
                label: `[${labelPrefix}numberOfDecimals]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}decimalSeparator`,
                label: `[${labelPrefix}decimalSeparator]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sellToAllCountries`,
                label: `[${labelPrefix}sellToAllCountries]`,
                type: 'boolean',
            },
            ...CartOptions.fields(`${keyPrefix}cartOptions`, isInput),
            ...EmailOptions.fields(`${keyPrefix}emailOptions`, isInput),
            ...CouponsOptions.fields(`${keyPrefix}couponsOptions`, isInput),
            ...PaymentOptions.fields(`${keyPrefix}paymentOptions`, isInput),
            {
                key: `${keyPrefix}productOptions`,
                label: `[${labelPrefix}productOptions]`,
                dict: true,
            },
            ...ReviewsOptions.fields(`${keyPrefix}reviewsOptions`, isInput),
            ...AdvancedOptions.fields(`${keyPrefix}advancedOptions`, isInput),
            ...ServicesOptions.fields(`${keyPrefix}servicesOptions`, isInput),
            ...InventoryOptions.fields(`${keyPrefix}inventoryOptions`, isInput),
            ...IntegrationOptions.fields(`${keyPrefix}integrationOptions`, isInput),
            ...MeasurementOptions.fields(`${keyPrefix}measurementOptions`, isInput),
            ...DownloadablesOptions.fields(`${keyPrefix}downloadablesOptions`, isInput),
            ...SubscriptionsOptions.fields(`${keyPrefix}subscriptionsOptions`, isInput),
            ...TaxCalculationOptions.fields(`${keyPrefix}taxCalculationOptions`, isInput),
            ...RecommendationOptions.fields(`${keyPrefix}recommendationOptions`, isInput),
            ...PriceCalculationOptions.fields(`${keyPrefix}priceCalculationOptions`, isInput),
            ...IdentityAndPrivacyOptions.fields(`${keyPrefix}identityAndPrivacyOptions`, isInput),
            {
                key: `${keyPrefix}includedSellingLocations`,
                label: `[${labelPrefix}includedSellingLocations]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}excludedSellingLocations`,
                label: `[${labelPrefix}excludedSellingLocations]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}includedShippingLocations`,
                label: `[${labelPrefix}includedShippingLocations]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}excludedShippingLocations`,
                label: `[${labelPrefix}excludedShippingLocations]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyPosition`,
                label: `[${labelPrefix}currencyPosition]`,
                type: 'string',
                choices: [
                    'Left',
                    'Right',
                    'LeftWithSpace',
                    'RightWithSpace',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
            'footerLogo': bundle.inputData?.[`${keyPrefix}footerLogo`],
            'tagline': bundle.inputData?.[`${keyPrefix}tagline`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'addressLine1': bundle.inputData?.[`${keyPrefix}addressLine1`],
            'addressLine2': bundle.inputData?.[`${keyPrefix}addressLine2`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'postalCode': bundle.inputData?.[`${keyPrefix}postalCode`],
            'numberOfDecimals': bundle.inputData?.[`${keyPrefix}numberOfDecimals`],
            'decimalSeparator': bundle.inputData?.[`${keyPrefix}decimalSeparator`],
            'sellToAllCountries': bundle.inputData?.[`${keyPrefix}sellToAllCountries`],
            'cartOptions': utils.removeIfEmpty(CartOptions.mapping(bundle, `${keyPrefix}cartOptions`)),
            'emailOptions': utils.removeIfEmpty(EmailOptions.mapping(bundle, `${keyPrefix}emailOptions`)),
            'couponsOptions': utils.removeIfEmpty(CouponsOptions.mapping(bundle, `${keyPrefix}couponsOptions`)),
            'paymentOptions': utils.removeIfEmpty(PaymentOptions.mapping(bundle, `${keyPrefix}paymentOptions`)),
            'productOptions': bundle.inputData?.[`${keyPrefix}productOptions`],
            'reviewsOptions': utils.removeIfEmpty(ReviewsOptions.mapping(bundle, `${keyPrefix}reviewsOptions`)),
            'advancedOptions': utils.removeIfEmpty(AdvancedOptions.mapping(bundle, `${keyPrefix}advancedOptions`)),
            'servicesOptions': utils.removeIfEmpty(ServicesOptions.mapping(bundle, `${keyPrefix}servicesOptions`)),
            'inventoryOptions': utils.removeIfEmpty(InventoryOptions.mapping(bundle, `${keyPrefix}inventoryOptions`)),
            'integrationOptions': utils.removeIfEmpty(IntegrationOptions.mapping(bundle, `${keyPrefix}integrationOptions`)),
            'measurementOptions': utils.removeIfEmpty(MeasurementOptions.mapping(bundle, `${keyPrefix}measurementOptions`)),
            'downloadablesOptions': utils.removeIfEmpty(DownloadablesOptions.mapping(bundle, `${keyPrefix}downloadablesOptions`)),
            'subscriptionsOptions': utils.removeIfEmpty(SubscriptionsOptions.mapping(bundle, `${keyPrefix}subscriptionsOptions`)),
            'taxCalculationOptions': utils.removeIfEmpty(TaxCalculationOptions.mapping(bundle, `${keyPrefix}taxCalculationOptions`)),
            'recommendationOptions': utils.removeIfEmpty(RecommendationOptions.mapping(bundle, `${keyPrefix}recommendationOptions`)),
            'priceCalculationOptions': utils.removeIfEmpty(PriceCalculationOptions.mapping(bundle, `${keyPrefix}priceCalculationOptions`)),
            'identityAndPrivacyOptions': utils.removeIfEmpty(IdentityAndPrivacyOptions.mapping(bundle, `${keyPrefix}identityAndPrivacyOptions`)),
            'includedSellingLocations': bundle.inputData?.[`${keyPrefix}includedSellingLocations`],
            'excludedSellingLocations': bundle.inputData?.[`${keyPrefix}excludedSellingLocations`],
            'includedShippingLocations': bundle.inputData?.[`${keyPrefix}includedShippingLocations`],
            'excludedShippingLocations': bundle.inputData?.[`${keyPrefix}excludedShippingLocations`],
            'currencyPosition': bundle.inputData?.[`${keyPrefix}currencyPosition`],
        }
    },
}
