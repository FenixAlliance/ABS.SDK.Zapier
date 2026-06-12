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
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatarUrl`,
                label: `[${labelPrefix}avatarUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isPublic`,
                label: `[${labelPrefix}isPublic]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessUnitId`,
                label: `[${labelPrefix}businessUnitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationProfileId`,
                label: `[${labelPrefix}organizationProfileId]`,
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
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'isPublic': bundle.inputData?.[`${keyPrefix}isPublic`],
            'businessUnitId': bundle.inputData?.[`${keyPrefix}businessUnitId`],
            'organizationProfileId': bundle.inputData?.[`${keyPrefix}organizationProfileId`],
        }
    },
}
