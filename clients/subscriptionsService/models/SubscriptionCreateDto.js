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
                key: `${keyPrefix}individualId`,
                label: `[${labelPrefix}individualId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationId`,
                label: `[${labelPrefix}organizationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subscriptionPlanId`,
                label: `[${labelPrefix}subscriptionPlanId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subscriptionClass`,
                label: `[${labelPrefix}subscriptionClass]`,
                type: 'string',
                choices: [
                    'Trial',
                    'Standard',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'individualId': bundle.inputData?.[`${keyPrefix}individualId`],
            'organizationId': bundle.inputData?.[`${keyPrefix}organizationId`],
            'subscriptionPlanId': bundle.inputData?.[`${keyPrefix}subscriptionPlanId`],
            'subscriptionClass': bundle.inputData?.[`${keyPrefix}subscriptionClass`],
        }
    },
}
