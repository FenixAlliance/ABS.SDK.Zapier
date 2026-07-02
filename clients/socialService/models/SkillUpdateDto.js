const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iconUrl`,
                label: `[${labelPrefix}iconUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}skillType`,
                label: `[${labelPrefix}skillType]`,
                type: 'string',
                choices: [
                    'Skill',
                    'Certification',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'iconUrl': bundle.inputData?.[`${keyPrefix}iconUrl`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'skillType': bundle.inputData?.[`${keyPrefix}skillType`],
        }
    },
}
