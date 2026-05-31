const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}company`,
                label: `[${labelPrefix}company]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
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
                key: `${keyPrefix}customCity`,
                label: `[${labelPrefix}customCity]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customState`,
                label: `[${labelPrefix}customState]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postalCode`,
                label: `[${labelPrefix}postalCode]`,
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
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryStateId`,
                label: `[${labelPrefix}countryStateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unLocode`,
                label: `[${labelPrefix}unLocode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iataCode`,
                label: `[${labelPrefix}iataCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portType`,
                label: `[${labelPrefix}portType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portAuthority`,
                label: `[${labelPrefix}portAuthority]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hasCustomsFacility`,
                label: `[${labelPrefix}hasCustomsFacility]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFreeTradezone`,
                label: `[${labelPrefix}isFreeTradezone]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}parentPortId`,
                label: `[${labelPrefix}parentPortId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'company': bundle.inputData?.[`${keyPrefix}company`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'address1': bundle.inputData?.[`${keyPrefix}address1`],
            'address2': bundle.inputData?.[`${keyPrefix}address2`],
            'address3': bundle.inputData?.[`${keyPrefix}address3`],
            'unit': bundle.inputData?.[`${keyPrefix}unit`],
            'customCity': bundle.inputData?.[`${keyPrefix}customCity`],
            'customState': bundle.inputData?.[`${keyPrefix}customState`],
            'postalCode': bundle.inputData?.[`${keyPrefix}postalCode`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'fax': bundle.inputData?.[`${keyPrefix}fax`],
            'longitude': bundle.inputData?.[`${keyPrefix}longitude`],
            'latitude': bundle.inputData?.[`${keyPrefix}latitude`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'countryStateId': bundle.inputData?.[`${keyPrefix}countryStateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'unLocode': bundle.inputData?.[`${keyPrefix}unLocode`],
            'iataCode': bundle.inputData?.[`${keyPrefix}iataCode`],
            'portType': bundle.inputData?.[`${keyPrefix}portType`],
            'portAuthority': bundle.inputData?.[`${keyPrefix}portAuthority`],
            'hasCustomsFacility': bundle.inputData?.[`${keyPrefix}hasCustomsFacility`],
            'isFreeTradezone': bundle.inputData?.[`${keyPrefix}isFreeTradezone`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'parentPortId': bundle.inputData?.[`${keyPrefix}parentPortId`],
        }
    },
}
