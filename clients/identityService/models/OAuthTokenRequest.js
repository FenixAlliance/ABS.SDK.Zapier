const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}client_id`,
                label: `[${labelPrefix}client_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}client_secret`,
                label: `[${labelPrefix}client_secret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}grant_type`,
                label: `[${labelPrefix}grant_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requested_scopes`,
                label: `[${labelPrefix}requested_scopes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requested_enrollment`,
                label: `[${labelPrefix}requested_enrollment]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'client_id': bundle.inputData?.[`${keyPrefix}client_id`],
            'client_secret': bundle.inputData?.[`${keyPrefix}client_secret`],
            'grant_type': bundle.inputData?.[`${keyPrefix}grant_type`],
            'requested_scopes': bundle.inputData?.[`${keyPrefix}requested_scopes`],
            'requested_enrollment': bundle.inputData?.[`${keyPrefix}requested_enrollment`],
        }
    },
}
