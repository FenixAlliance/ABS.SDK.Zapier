const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}start`,
                label: `[${labelPrefix}start]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}end`,
                label: `[${labelPrefix}end]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}salaryExpectation`,
                label: `[${labelPrefix}salaryExpectation]`,
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
            {
                key: `${keyPrefix}partnerProfileId`,
                label: `[${labelPrefix}partnerProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'start': bundle.inputData?.[`${keyPrefix}start`],
            'end': bundle.inputData?.[`${keyPrefix}end`],
            'salaryExpectation': bundle.inputData?.[`${keyPrefix}salaryExpectation`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'curriculumId': bundle.inputData?.[`${keyPrefix}curriculumId`],
            'curriculumCoverId': bundle.inputData?.[`${keyPrefix}curriculumCoverId`],
            'partnerProfileId': bundle.inputData?.[`${keyPrefix}partnerProfileId`],
        }
    },
}
