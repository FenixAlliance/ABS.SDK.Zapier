const utils = require('../utils/utils');
const CognitiveSkillToolDto = require('../models/CognitiveSkillToolDto');

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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}toolKey`,
                label: `[${labelPrefix}toolKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}configJson`,
                label: `[${labelPrefix}configJson]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tools`,
                label: `[${labelPrefix}tools]`,
                children: CognitiveSkillToolDto.fields(`${keyPrefix}tools${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'toolKey': bundle.inputData?.[`${keyPrefix}toolKey`],
            'configJson': bundle.inputData?.[`${keyPrefix}configJson`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'tools': utils.childMapping(bundle.inputData?.[`${keyPrefix}tools`], `${keyPrefix}tools`, CognitiveSkillToolDto),
        }
    },
}
