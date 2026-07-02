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
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Submitted',
                    'UnderReview',
                    'Interviewing',
                    'Offered',
                    'Hired',
                    'Rejected',
                    'Withdrawn',
                ],
            },
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
                key: `${keyPrefix}jobOfferId`,
                label: `[${labelPrefix}jobOfferId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}partnerProfileId`,
                label: `[${labelPrefix}partnerProfileId]`,
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
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'start': bundle.inputData?.[`${keyPrefix}start`],
            'end': bundle.inputData?.[`${keyPrefix}end`],
            'salaryExpectation': bundle.inputData?.[`${keyPrefix}salaryExpectation`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'curriculumId': bundle.inputData?.[`${keyPrefix}curriculumId`],
            'curriculumCoverId': bundle.inputData?.[`${keyPrefix}curriculumCoverId`],
            'jobOfferId': bundle.inputData?.[`${keyPrefix}jobOfferId`],
            'partnerProfileId': bundle.inputData?.[`${keyPrefix}partnerProfileId`],
            'jobApplicantProfileId': bundle.inputData?.[`${keyPrefix}jobApplicantProfileId`],
        }
    },
}
