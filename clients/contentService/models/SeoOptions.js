const utils = require('../utils/utils');
const Creator = require('../models/Creator');
const Organization = require('../models/Organization');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}keywords`,
                label: `[${labelPrefix}keywords]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialImage`,
                label: `[${labelPrefix}socialImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}titleSuffix`,
                label: `[${labelPrefix}titleSuffix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bingVerificationCode`,
                label: `[${labelPrefix}bingVerificationCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}googleVerificationCode`,
                label: `[${labelPrefix}googleVerificationCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pinterestVerificationCode`,
                label: `[${labelPrefix}pinterestVerificationCode]`,
                type: 'string',
            },
            ...Creator.fields(`${keyPrefix}creator`, isInput),
            ...Organization.fields(`${keyPrefix}organization`, isInput),
            {
                key: `${keyPrefix}sameAs`,
                label: `[${labelPrefix}sameAs]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'keywords': bundle.inputData?.[`${keyPrefix}keywords`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
            'socialImage': bundle.inputData?.[`${keyPrefix}socialImage`],
            'titleSuffix': bundle.inputData?.[`${keyPrefix}titleSuffix`],
            'bingVerificationCode': bundle.inputData?.[`${keyPrefix}bingVerificationCode`],
            'googleVerificationCode': bundle.inputData?.[`${keyPrefix}googleVerificationCode`],
            'pinterestVerificationCode': bundle.inputData?.[`${keyPrefix}pinterestVerificationCode`],
            'creator': utils.removeIfEmpty(Creator.mapping(bundle, `${keyPrefix}creator`)),
            'organization': utils.removeIfEmpty(Organization.mapping(bundle, `${keyPrefix}organization`)),
            'sameAs': bundle.inputData?.[`${keyPrefix}sameAs`],
        }
    },
}
