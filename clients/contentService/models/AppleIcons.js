const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}the57`,
                label: `[${labelPrefix}the57]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the60`,
                label: `[${labelPrefix}the60]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the72`,
                label: `[${labelPrefix}the72]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the76`,
                label: `[${labelPrefix}the76]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the114`,
                label: `[${labelPrefix}the114]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the120`,
                label: `[${labelPrefix}the120]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the128`,
                label: `[${labelPrefix}the128]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the144`,
                label: `[${labelPrefix}the144]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the152`,
                label: `[${labelPrefix}the152]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the167`,
                label: `[${labelPrefix}the167]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}the180`,
                label: `[${labelPrefix}the180]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'the57': bundle.inputData?.[`${keyPrefix}the57`],
            'the60': bundle.inputData?.[`${keyPrefix}the60`],
            'the72': bundle.inputData?.[`${keyPrefix}the72`],
            'the76': bundle.inputData?.[`${keyPrefix}the76`],
            'the114': bundle.inputData?.[`${keyPrefix}the114`],
            'the120': bundle.inputData?.[`${keyPrefix}the120`],
            'the128': bundle.inputData?.[`${keyPrefix}the128`],
            'the144': bundle.inputData?.[`${keyPrefix}the144`],
            'the152': bundle.inputData?.[`${keyPrefix}the152`],
            'the167': bundle.inputData?.[`${keyPrefix}the167`],
            'the180': bundle.inputData?.[`${keyPrefix}the180`],
        }
    },
}
