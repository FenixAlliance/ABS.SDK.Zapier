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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessTeamID`,
                label: `[${labelPrefix}businessTeamID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeProfileID`,
                label: `[${labelPrefix}employeeProfileID]`,
                required: true,
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
            'businessTeamID': bundle.inputData?.[`${keyPrefix}businessTeamID`],
            'employeeProfileID': bundle.inputData?.[`${keyPrefix}employeeProfileID`],
        }
    },
}
