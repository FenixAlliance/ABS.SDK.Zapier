const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}businessTeamId`,
                label: `[${labelPrefix}businessTeamId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'businessTeamId': bundle.inputData?.[`${keyPrefix}businessTeamId`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
        }
    },
}
