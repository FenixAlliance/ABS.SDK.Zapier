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
                key: `${keyPrefix}experienceInYears`,
                label: `[${labelPrefix}experienceInYears]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}priority`,
                label: `[${labelPrefix}priority]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}requiredSkillRecordType`,
                label: `[${labelPrefix}requiredSkillRecordType]`,
                type: 'string',
                choices: [
                    'MustHave',
                    'Optional',
                ],
            },
            {
                key: `${keyPrefix}skillId`,
                label: `[${labelPrefix}skillId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobOfferId`,
                label: `[${labelPrefix}jobOfferId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employerProfileId`,
                label: `[${labelPrefix}employerProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'experienceInYears': bundle.inputData?.[`${keyPrefix}experienceInYears`],
            'priority': bundle.inputData?.[`${keyPrefix}priority`],
            'requiredSkillRecordType': bundle.inputData?.[`${keyPrefix}requiredSkillRecordType`],
            'skillId': bundle.inputData?.[`${keyPrefix}skillId`],
            'jobOfferId': bundle.inputData?.[`${keyPrefix}jobOfferId`],
            'employerProfileId': bundle.inputData?.[`${keyPrefix}employerProfileId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
