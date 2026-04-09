const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}repairStatus`,
                label: `[${labelPrefix}repairStatus]`,
                type: 'string',
                choices: [
                    'Scheduled',
                    'InProgress',
                    'Completed',
                    'Cancelled',
                ],
            },
            {
                key: `${keyPrefix}scheduledDate`,
                label: `[${labelPrefix}scheduledDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}completionDate`,
                label: `[${labelPrefix}completionDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}estimatedCost`,
                label: `[${labelPrefix}estimatedCost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}actualCost`,
                label: `[${labelPrefix}actualCost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}problemDescription`,
                label: `[${labelPrefix}problemDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}repairDescription`,
                label: `[${labelPrefix}repairDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetMaintenanceTeamId`,
                label: `[${labelPrefix}assetMaintenanceTeamId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'repairStatus': bundle.inputData?.[`${keyPrefix}repairStatus`],
            'scheduledDate': bundle.inputData?.[`${keyPrefix}scheduledDate`],
            'completionDate': bundle.inputData?.[`${keyPrefix}completionDate`],
            'estimatedCost': bundle.inputData?.[`${keyPrefix}estimatedCost`],
            'actualCost': bundle.inputData?.[`${keyPrefix}actualCost`],
            'problemDescription': bundle.inputData?.[`${keyPrefix}problemDescription`],
            'repairDescription': bundle.inputData?.[`${keyPrefix}repairDescription`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'assetMaintenanceTeamId': bundle.inputData?.[`${keyPrefix}assetMaintenanceTeamId`],
        }
    },
}
