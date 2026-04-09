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
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
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
                key: `${keyPrefix}avatarURL`,
                label: `[${labelPrefix}avatarURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isPublic`,
                label: `[${labelPrefix}isPublic]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessUnitID`,
                label: `[${labelPrefix}businessUnitID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationProfileID`,
                label: `[${labelPrefix}organizationProfileID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'avatarURL': bundle.inputData?.[`${keyPrefix}avatarURL`],
            'isPublic': bundle.inputData?.[`${keyPrefix}isPublic`],
            'businessUnitID': bundle.inputData?.[`${keyPrefix}businessUnitID`],
            'organizationProfileID': bundle.inputData?.[`${keyPrefix}organizationProfileID`],
        }
    },
}
