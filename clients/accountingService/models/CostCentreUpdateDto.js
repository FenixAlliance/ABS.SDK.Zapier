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
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}costCentreType`,
                label: `[${labelPrefix}costCentreType]`,
                type: 'string',
                choices: [
                    'Service',
                    'Production',
                ],
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}costCentresGroupId`,
                label: `[${labelPrefix}costCentresGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentCostCentreId`,
                label: `[${labelPrefix}parentCostCentreId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'costCentreType': bundle.inputData?.[`${keyPrefix}costCentreType`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'costCentresGroupId': bundle.inputData?.[`${keyPrefix}costCentresGroupId`],
            'parentCostCentreId': bundle.inputData?.[`${keyPrefix}parentCostCentreId`],
        }
    },
}
