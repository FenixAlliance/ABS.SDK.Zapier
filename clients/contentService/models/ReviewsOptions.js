const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableReviews`,
                label: `[${labelPrefix}enableReviews]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableStarRatings`,
                label: `[${labelPrefix}enableStarRatings]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}forceStarRatings`,
                label: `[${labelPrefix}forceStarRatings]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}displayVerifiedOwnerBadge`,
                label: `[${labelPrefix}displayVerifiedOwnerBadge]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}forceVerifiedOwnerVerification`,
                label: `[${labelPrefix}forceVerifiedOwnerVerification]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableReviews': bundle.inputData?.[`${keyPrefix}enableReviews`],
            'enableStarRatings': bundle.inputData?.[`${keyPrefix}enableStarRatings`],
            'forceStarRatings': bundle.inputData?.[`${keyPrefix}forceStarRatings`],
            'displayVerifiedOwnerBadge': bundle.inputData?.[`${keyPrefix}displayVerifiedOwnerBadge`],
            'forceVerifiedOwnerVerification': bundle.inputData?.[`${keyPrefix}forceVerifiedOwnerVerification`],
        }
    },
}
