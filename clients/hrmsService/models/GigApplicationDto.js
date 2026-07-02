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
                key: `${keyPrefix}acceptedTimestamp`,
                label: `[${labelPrefix}acceptedTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accepted`,
                label: `[${labelPrefix}accepted]`,
                type: 'boolean',
            },
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
                key: `${keyPrefix}gigId`,
                label: `[${labelPrefix}gigId]`,
                type: 'string',
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
                key: `${keyPrefix}jobApplicantProfileId`,
                label: `[${labelPrefix}jobApplicantProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'acceptedTimestamp': bundle.inputData?.[`${keyPrefix}acceptedTimestamp`],
            'accepted': bundle.inputData?.[`${keyPrefix}accepted`],
            'proposal': bundle.inputData?.[`${keyPrefix}proposal`],
            'cost': bundle.inputData?.[`${keyPrefix}cost`],
            'gigId': bundle.inputData?.[`${keyPrefix}gigId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'curriculumId': bundle.inputData?.[`${keyPrefix}curriculumId`],
            'curriculumCoverId': bundle.inputData?.[`${keyPrefix}curriculumCoverId`],
            'jobApplicantProfileId': bundle.inputData?.[`${keyPrefix}jobApplicantProfileId`],
        }
    },
}
