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
                key: `${keyPrefix}offer`,
                label: `[${labelPrefix}offer]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}active`,
                label: `[${labelPrefix}active]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}proposedStart`,
                label: `[${labelPrefix}proposedStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}proposedEnd`,
                label: `[${labelPrefix}proposedEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}actualStart`,
                label: `[${labelPrefix}actualStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}actualEnd`,
                label: `[${labelPrefix}actualEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}allocatedBudget`,
                label: `[${labelPrefix}allocatedBudget]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}activityCost`,
                label: `[${labelPrefix}activityCost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}miscCost`,
                label: `[${labelPrefix}miscCost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}expectedResponsePercent`,
                label: `[${labelPrefix}expectedResponsePercent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}marketingAreaId`,
                label: `[${labelPrefix}marketingAreaId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'offer': bundle.inputData?.[`${keyPrefix}offer`],
            'active': bundle.inputData?.[`${keyPrefix}active`],
            'proposedStart': bundle.inputData?.[`${keyPrefix}proposedStart`],
            'proposedEnd': bundle.inputData?.[`${keyPrefix}proposedEnd`],
            'actualStart': bundle.inputData?.[`${keyPrefix}actualStart`],
            'actualEnd': bundle.inputData?.[`${keyPrefix}actualEnd`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'allocatedBudget': bundle.inputData?.[`${keyPrefix}allocatedBudget`],
            'activityCost': bundle.inputData?.[`${keyPrefix}activityCost`],
            'miscCost': bundle.inputData?.[`${keyPrefix}miscCost`],
            'expectedResponsePercent': bundle.inputData?.[`${keyPrefix}expectedResponsePercent`],
            'marketingAreaId': bundle.inputData?.[`${keyPrefix}marketingAreaId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
        }
    },
}
