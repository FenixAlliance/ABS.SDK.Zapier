const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}organizationProfileID`,
                label: `[${labelPrefix}organizationProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentDepartmentID`,
                label: `[${labelPrefix}parentDepartmentID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'organizationProfileID': bundle.inputData?.[`${keyPrefix}organizationProfileID`],
            'parentDepartmentID': bundle.inputData?.[`${keyPrefix}parentDepartmentID`],
        }
    },
}
