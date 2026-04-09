const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}facebookPageUrl`,
                label: `[${labelPrefix}facebookPageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterUsername`,
                label: `[${labelPrefix}twitterUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instagramUrl`,
                label: `[${labelPrefix}instagramUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}linkedInURL`,
                label: `[${labelPrefix}linkedInURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mySpaceURL`,
                label: `[${labelPrefix}mySpaceURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pinterestURL`,
                label: `[${labelPrefix}pinterestURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}youTubeURL`,
                label: `[${labelPrefix}youTubeURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}githubURL`,
                label: `[${labelPrefix}githubURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redditURL`,
                label: `[${labelPrefix}redditURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}whatsAppNumber`,
                label: `[${labelPrefix}whatsAppNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}wikipediaUrl`,
                label: `[${labelPrefix}wikipediaUrl]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'facebookPageUrl': bundle.inputData?.[`${keyPrefix}facebookPageUrl`],
            'twitterUsername': bundle.inputData?.[`${keyPrefix}twitterUsername`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'linkedInURL': bundle.inputData?.[`${keyPrefix}linkedInURL`],
            'mySpaceURL': bundle.inputData?.[`${keyPrefix}mySpaceURL`],
            'pinterestURL': bundle.inputData?.[`${keyPrefix}pinterestURL`],
            'youTubeURL': bundle.inputData?.[`${keyPrefix}youTubeURL`],
            'githubURL': bundle.inputData?.[`${keyPrefix}githubURL`],
            'redditURL': bundle.inputData?.[`${keyPrefix}redditURL`],
            'whatsAppNumber': bundle.inputData?.[`${keyPrefix}whatsAppNumber`],
            'wikipediaUrl': bundle.inputData?.[`${keyPrefix}wikipediaUrl`],
        }
    },
}
