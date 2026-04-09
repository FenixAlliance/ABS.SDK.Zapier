const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}business`,
                label: `[${labelPrefix}business]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fax`,
                label: `[${labelPrefix}fax]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address1`,
                label: `[${labelPrefix}address1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address2`,
                label: `[${labelPrefix}address2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address3`,
                label: `[${labelPrefix}address3]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unit`,
                label: `[${labelPrefix}unit]`,
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
                key: `${keyPrefix}postalCode`,
                label: `[${labelPrefix}postalCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}longitude`,
                label: `[${labelPrefix}longitude]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}latitude`,
                label: `[${labelPrefix}latitude]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}isRoutable`,
                label: `[${labelPrefix}isRoutable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isGlobalPrimary`,
                label: `[${labelPrefix}isGlobalPrimary]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isCountryPrimary`,
                label: `[${labelPrefix}isCountryPrimary]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}canGenerateLabels`,
                label: `[${labelPrefix}canGenerateLabels]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDefaultSenderAddress`,
                label: `[${labelPrefix}isDefaultSenderAddress]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDefaultReturnAddress`,
                label: `[${labelPrefix}isDefaultReturnAddress]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDefaultSuppingLocation`,
                label: `[${labelPrefix}isDefaultSuppingLocation]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'business': bundle.inputData?.[`${keyPrefix}business`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'fax': bundle.inputData?.[`${keyPrefix}fax`],
            'address1': bundle.inputData?.[`${keyPrefix}address1`],
            'address2': bundle.inputData?.[`${keyPrefix}address2`],
            'address3': bundle.inputData?.[`${keyPrefix}address3`],
            'unit': bundle.inputData?.[`${keyPrefix}unit`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'postalCode': bundle.inputData?.[`${keyPrefix}postalCode`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'longitude': bundle.inputData?.[`${keyPrefix}longitude`],
            'latitude': bundle.inputData?.[`${keyPrefix}latitude`],
            'isRoutable': bundle.inputData?.[`${keyPrefix}isRoutable`],
            'isGlobalPrimary': bundle.inputData?.[`${keyPrefix}isGlobalPrimary`],
            'isCountryPrimary': bundle.inputData?.[`${keyPrefix}isCountryPrimary`],
            'canGenerateLabels': bundle.inputData?.[`${keyPrefix}canGenerateLabels`],
            'isDefaultSenderAddress': bundle.inputData?.[`${keyPrefix}isDefaultSenderAddress`],
            'isDefaultReturnAddress': bundle.inputData?.[`${keyPrefix}isDefaultReturnAddress`],
            'isDefaultSuppingLocation': bundle.inputData?.[`${keyPrefix}isDefaultSuppingLocation`],
        }
    },
}
