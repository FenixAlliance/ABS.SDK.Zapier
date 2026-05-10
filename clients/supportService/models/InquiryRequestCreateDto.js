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
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationName`,
                label: `[${labelPrefix}organizationName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobRole`,
                label: `[${labelPrefix}jobRole]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationDomain`,
                label: `[${labelPrefix}organizationDomain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'organizationName': bundle.inputData?.[`${keyPrefix}organizationName`],
            'jobRole': bundle.inputData?.[`${keyPrefix}jobRole`],
            'organizationDomain': bundle.inputData?.[`${keyPrefix}organizationDomain`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
        }
    },
}
