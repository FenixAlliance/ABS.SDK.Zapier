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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}overallScore`,
                label: `[${labelPrefix}overallScore]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseUnitId`,
                label: `[${labelPrefix}courseUnitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseGradingRubricId`,
                label: `[${labelPrefix}courseGradingRubricId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}releaseDateTime`,
                label: `[${labelPrefix}releaseDateTime]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'overallScore': bundle.inputData?.[`${keyPrefix}overallScore`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'courseUnitId': bundle.inputData?.[`${keyPrefix}courseUnitId`],
            'courseGradingRubricId': bundle.inputData?.[`${keyPrefix}courseGradingRubricId`],
            'releaseDateTime': bundle.inputData?.[`${keyPrefix}releaseDateTime`],
        }
    },
}
