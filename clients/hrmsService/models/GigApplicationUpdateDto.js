const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}proposal`,
                label: `[${labelPrefix}proposal]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cost`,
                label: `[${labelPrefix}cost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}curriculumId`,
                label: `[${labelPrefix}curriculumId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}curriculumCoverId`,
                label: `[${labelPrefix}curriculumCoverId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'proposal': bundle.inputData?.[`${keyPrefix}proposal`],
            'cost': bundle.inputData?.[`${keyPrefix}cost`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'curriculumId': bundle.inputData?.[`${keyPrefix}curriculumId`],
            'curriculumCoverId': bundle.inputData?.[`${keyPrefix}curriculumCoverId`],
        }
    },
}
