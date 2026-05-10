const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}uptime`,
                label: `[${labelPrefix}uptime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}osDescription`,
                label: `[${labelPrefix}osDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}machineName`,
                label: `[${labelPrefix}machineName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}processName`,
                label: `[${labelPrefix}processName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}productVersion`,
                label: `[${labelPrefix}productVersion]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}privateMemoryMb`,
                label: `[${labelPrefix}privateMemoryMb]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}pagedMemoryMb`,
                label: `[${labelPrefix}pagedMemoryMb]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}memoryWorkingSetMb`,
                label: `[${labelPrefix}memoryWorkingSetMb]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}isDebugMode`,
                label: `[${labelPrefix}isDebugMode]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDevMode`,
                label: `[${labelPrefix}isDevMode]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}frameworkDescription`,
                label: `[${labelPrefix}frameworkDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}runtimeIdentifier`,
                label: `[${labelPrefix}runtimeIdentifier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}osArchitecture`,
                label: `[${labelPrefix}osArchitecture]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}osPlatform`,
                label: `[${labelPrefix}osPlatform]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}processArchitecture`,
                label: `[${labelPrefix}processArchitecture]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}usersCount`,
                label: `[${labelPrefix}usersCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}ordersCount`,
                label: `[${labelPrefix}ordersCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}contactsCount`,
                label: `[${labelPrefix}contactsCount]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'uptime': bundle.inputData?.[`${keyPrefix}uptime`],
            'osDescription': bundle.inputData?.[`${keyPrefix}osDescription`],
            'machineName': bundle.inputData?.[`${keyPrefix}machineName`],
            'processName': bundle.inputData?.[`${keyPrefix}processName`],
            'productVersion': bundle.inputData?.[`${keyPrefix}productVersion`],
            'privateMemoryMb': bundle.inputData?.[`${keyPrefix}privateMemoryMb`],
            'pagedMemoryMb': bundle.inputData?.[`${keyPrefix}pagedMemoryMb`],
            'memoryWorkingSetMb': bundle.inputData?.[`${keyPrefix}memoryWorkingSetMb`],
            'isDebugMode': bundle.inputData?.[`${keyPrefix}isDebugMode`],
            'isDevMode': bundle.inputData?.[`${keyPrefix}isDevMode`],
            'frameworkDescription': bundle.inputData?.[`${keyPrefix}frameworkDescription`],
            'runtimeIdentifier': bundle.inputData?.[`${keyPrefix}runtimeIdentifier`],
            'osArchitecture': bundle.inputData?.[`${keyPrefix}osArchitecture`],
            'osPlatform': bundle.inputData?.[`${keyPrefix}osPlatform`],
            'processArchitecture': bundle.inputData?.[`${keyPrefix}processArchitecture`],
            'usersCount': bundle.inputData?.[`${keyPrefix}usersCount`],
            'ordersCount': bundle.inputData?.[`${keyPrefix}ordersCount`],
            'contactsCount': bundle.inputData?.[`${keyPrefix}contactsCount`],
        }
    },
}
