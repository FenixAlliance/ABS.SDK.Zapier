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
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}principalKind`,
                label: `[${labelPrefix}principalKind]`,
                type: 'string',
                choices: [
                    'Human',
                    'Agent',
                    'Application',
                    'Service',
                    'System',
                ],
            },
            {
                key: `${keyPrefix}principalStatus`,
                label: `[${labelPrefix}principalStatus]`,
                type: 'string',
                choices: [
                    'Active',
                    'Suspended',
                    'Disabled',
                ],
            },
            {
                key: `${keyPrefix}businessApplicationId`,
                label: `[${labelPrefix}businessApplicationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessApplicationName`,
                label: `[${labelPrefix}businessApplicationName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessApplicationNamespace`,
                label: `[${labelPrefix}businessApplicationNamespace]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessApplicationDisabled`,
                label: `[${labelPrefix}businessApplicationDisabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}systemLocked`,
                label: `[${labelPrefix}systemLocked]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentDisabled`,
                label: `[${labelPrefix}enrollmentDisabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}grantedPermissions`,
                label: `[${labelPrefix}grantedPermissions]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'principalKind': bundle.inputData?.[`${keyPrefix}principalKind`],
            'principalStatus': bundle.inputData?.[`${keyPrefix}principalStatus`],
            'businessApplicationId': bundle.inputData?.[`${keyPrefix}businessApplicationId`],
            'businessApplicationName': bundle.inputData?.[`${keyPrefix}businessApplicationName`],
            'businessApplicationNamespace': bundle.inputData?.[`${keyPrefix}businessApplicationNamespace`],
            'businessApplicationDisabled': bundle.inputData?.[`${keyPrefix}businessApplicationDisabled`],
            'systemLocked': bundle.inputData?.[`${keyPrefix}systemLocked`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'enrollmentDisabled': bundle.inputData?.[`${keyPrefix}enrollmentDisabled`],
            'grantedPermissions': bundle.inputData?.[`${keyPrefix}grantedPermissions`],
        }
    },
}
