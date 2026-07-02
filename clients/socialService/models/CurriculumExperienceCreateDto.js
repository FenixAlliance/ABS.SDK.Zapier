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
                key: `${keyPrefix}curriculumId`,
                label: `[${labelPrefix}curriculumId]`,
                type: 'string',
            },
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
                key: `${keyPrefix}priority`,
                label: `[${labelPrefix}priority]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}organization`,
                label: `[${labelPrefix}organization]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}featured`,
                label: `[${labelPrefix}featured]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}current`,
                label: `[${labelPrefix}current]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}validated`,
                label: `[${labelPrefix}validated]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}imageUrl`,
                label: `[${labelPrefix}imageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateFrom`,
                label: `[${labelPrefix}dateFrom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateTo`,
                label: `[${labelPrefix}dateTo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryLanguageId`,
                label: `[${labelPrefix}countryLanguageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}proficiencyRatingValueId`,
                label: `[${labelPrefix}proficiencyRatingValueId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}proficiencyRatingModelId`,
                label: `[${labelPrefix}proficiencyRatingModelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}achievements`,
                label: `[${labelPrefix}achievements]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}responsibilities`,
                label: `[${labelPrefix}responsibilities]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employerProfileId`,
                label: `[${labelPrefix}employerProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'curriculumId': bundle.inputData?.[`${keyPrefix}curriculumId`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'priority': bundle.inputData?.[`${keyPrefix}priority`],
            'organization': bundle.inputData?.[`${keyPrefix}organization`],
            'featured': bundle.inputData?.[`${keyPrefix}featured`],
            'current': bundle.inputData?.[`${keyPrefix}current`],
            'validated': bundle.inputData?.[`${keyPrefix}validated`],
            'imageUrl': bundle.inputData?.[`${keyPrefix}imageUrl`],
            'dateFrom': bundle.inputData?.[`${keyPrefix}dateFrom`],
            'dateTo': bundle.inputData?.[`${keyPrefix}dateTo`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'countryLanguageId': bundle.inputData?.[`${keyPrefix}countryLanguageId`],
            'proficiencyRatingValueId': bundle.inputData?.[`${keyPrefix}proficiencyRatingValueId`],
            'proficiencyRatingModelId': bundle.inputData?.[`${keyPrefix}proficiencyRatingModelId`],
            'achievements': bundle.inputData?.[`${keyPrefix}achievements`],
            'responsibilities': bundle.inputData?.[`${keyPrefix}responsibilities`],
            'employerProfileId': bundle.inputData?.[`${keyPrefix}employerProfileId`],
        }
    },
}
