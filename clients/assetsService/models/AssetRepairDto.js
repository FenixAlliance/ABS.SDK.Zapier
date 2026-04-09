const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                dict: true,
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessId`,
                label: `[${labelPrefix}businessId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}businessProfileRecordId`,
                label: `[${labelPrefix}businessProfileRecordId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}assetName`,
                label: `[${labelPrefix}assetName]`,
                type: 'string',
            },
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
                key: `${keyPrefix}reportedDate`,
                label: `[${labelPrefix}reportedDate]`,
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
            {
                key: `${keyPrefix}assetMaintenanceTeamName`,
                label: `[${labelPrefix}assetMaintenanceTeamName]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'businessId': bundle.inputData?.[`${keyPrefix}businessId`],
            'businessProfileRecordId': bundle.inputData?.[`${keyPrefix}businessProfileRecordId`],
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'assetName': bundle.inputData?.[`${keyPrefix}assetName`],
            'repairStatus': bundle.inputData?.[`${keyPrefix}repairStatus`],
            'scheduledDate': bundle.inputData?.[`${keyPrefix}scheduledDate`],
            'completionDate': bundle.inputData?.[`${keyPrefix}completionDate`],
            'reportedDate': bundle.inputData?.[`${keyPrefix}reportedDate`],
            'estimatedCost': bundle.inputData?.[`${keyPrefix}estimatedCost`],
            'actualCost': bundle.inputData?.[`${keyPrefix}actualCost`],
            'problemDescription': bundle.inputData?.[`${keyPrefix}problemDescription`],
            'repairDescription': bundle.inputData?.[`${keyPrefix}repairDescription`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'assetMaintenanceTeamId': bundle.inputData?.[`${keyPrefix}assetMaintenanceTeamId`],
            'assetMaintenanceTeamName': bundle.inputData?.[`${keyPrefix}assetMaintenanceTeamName`],
        }
    },
}
