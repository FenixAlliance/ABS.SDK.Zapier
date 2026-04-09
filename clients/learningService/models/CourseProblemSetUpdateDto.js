const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
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
                key: `${keyPrefix}courseUnitID`,
                label: `[${labelPrefix}courseUnitID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseGradingRubricID`,
                label: `[${labelPrefix}courseGradingRubricID]`,
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
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'overallScore': bundle.inputData?.[`${keyPrefix}overallScore`],
            'courseUnitID': bundle.inputData?.[`${keyPrefix}courseUnitID`],
            'courseGradingRubricID': bundle.inputData?.[`${keyPrefix}courseGradingRubricID`],
            'releaseDateTime': bundle.inputData?.[`${keyPrefix}releaseDateTime`],
        }
    },
}
