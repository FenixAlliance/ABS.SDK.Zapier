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
                key: `${keyPrefix}concurrencyToken`,
                label: `[${labelPrefix}concurrencyToken]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creationDate`,
                label: `[${labelPrefix}creationDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}properties`,
                label: `[${labelPrefix}properties]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scopes`,
                label: `[${labelPrefix}scopes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}applicationId`,
                label: `[${labelPrefix}applicationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tokensCount`,
                label: `[${labelPrefix}tokensCount]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'concurrencyToken': bundle.inputData?.[`${keyPrefix}concurrencyToken`],
            'creationDate': bundle.inputData?.[`${keyPrefix}creationDate`],
            'properties': bundle.inputData?.[`${keyPrefix}properties`],
            'scopes': bundle.inputData?.[`${keyPrefix}scopes`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'applicationId': bundle.inputData?.[`${keyPrefix}applicationId`],
            'tokensCount': bundle.inputData?.[`${keyPrefix}tokensCount`],
        }
    },
}
