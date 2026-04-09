const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}pixelId`,
                label: `[${labelPrefix}pixelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}appId`,
                label: `[${labelPrefix}appId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}appSecret`,
                label: `[${labelPrefix}appSecret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instagramAppId`,
                label: `[${labelPrefix}instagramAppId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instagramAppSecret`,
                label: `[${labelPrefix}instagramAppSecret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}marketingApiToken`,
                label: `[${labelPrefix}marketingApiToken]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}marketingApiTokenSandbox`,
                label: `[${labelPrefix}marketingApiTokenSandbox]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'pixelId': bundle.inputData?.[`${keyPrefix}pixelId`],
            'appId': bundle.inputData?.[`${keyPrefix}appId`],
            'appSecret': bundle.inputData?.[`${keyPrefix}appSecret`],
            'instagramAppId': bundle.inputData?.[`${keyPrefix}instagramAppId`],
            'instagramAppSecret': bundle.inputData?.[`${keyPrefix}instagramAppSecret`],
            'marketingApiToken': bundle.inputData?.[`${keyPrefix}marketingApiToken`],
            'marketingApiTokenSandbox': bundle.inputData?.[`${keyPrefix}marketingApiTokenSandbox`],
        }
    },
}
