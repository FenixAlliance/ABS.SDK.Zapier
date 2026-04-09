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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}legalName`,
                label: `[${labelPrefix}legalName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webUrl`,
                label: `[${labelPrefix}webUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}handler`,
                label: `[${labelPrefix}handler]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}slogan`,
                label: `[${labelPrefix}slogan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}duns`,
                label: `[${labelPrefix}duns]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxId`,
                label: `[${labelPrefix}taxId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatarUrl`,
                label: `[${labelPrefix}avatarUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}languageId`,
                label: `[${labelPrefix}languageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timezoneId`,
                label: `[${labelPrefix}timezoneId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessTypeId`,
                label: `[${labelPrefix}businessTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessSegmentId`,
                label: `[${labelPrefix}businessSegmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessIndustryId`,
                label: `[${labelPrefix}businessIndustryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessSizeId`,
                label: `[${labelPrefix}businessSizeId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'legalName': bundle.inputData?.[`${keyPrefix}legalName`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'webUrl': bundle.inputData?.[`${keyPrefix}webUrl`],
            'handler': bundle.inputData?.[`${keyPrefix}handler`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'slogan': bundle.inputData?.[`${keyPrefix}slogan`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'duns': bundle.inputData?.[`${keyPrefix}duns`],
            'taxId': bundle.inputData?.[`${keyPrefix}taxId`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'businessTypeId': bundle.inputData?.[`${keyPrefix}businessTypeId`],
            'businessSegmentId': bundle.inputData?.[`${keyPrefix}businessSegmentId`],
            'businessIndustryId': bundle.inputData?.[`${keyPrefix}businessIndustryId`],
            'businessSizeId': bundle.inputData?.[`${keyPrefix}businessSizeId`],
        }
    },
}
