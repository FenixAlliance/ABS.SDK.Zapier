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
                key: `${keyPrefix}authorized`,
                label: `[${labelPrefix}authorized]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}submitted`,
                label: `[${labelPrefix}submitted]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}avatarUrl`,
                label: `[${labelPrefix}avatarUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verificationTimestamp`,
                label: `[${labelPrefix}verificationTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data`,
                label: `[${labelPrefix}data]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dataLabel`,
                label: `[${labelPrefix}dataLabel]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data1`,
                label: `[${labelPrefix}data1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data1Label`,
                label: `[${labelPrefix}data1Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data2`,
                label: `[${labelPrefix}data2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data2Label`,
                label: `[${labelPrefix}data2Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data3`,
                label: `[${labelPrefix}data3]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data3Label`,
                label: `[${labelPrefix}data3Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data4`,
                label: `[${labelPrefix}data4]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data4Label`,
                label: `[${labelPrefix}data4Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data5`,
                label: `[${labelPrefix}data5]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data5Label`,
                label: `[${labelPrefix}data5Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data6`,
                label: `[${labelPrefix}data6]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data6Label`,
                label: `[${labelPrefix}data6Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data7`,
                label: `[${labelPrefix}data7]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data7Label`,
                label: `[${labelPrefix}data7Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data8`,
                label: `[${labelPrefix}data8]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data8Label`,
                label: `[${labelPrefix}data8Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data9`,
                label: `[${labelPrefix}data9]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data9Label`,
                label: `[${labelPrefix}data9Label]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'authorized': bundle.inputData?.[`${keyPrefix}authorized`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'submitted': bundle.inputData?.[`${keyPrefix}submitted`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'verificationTimestamp': bundle.inputData?.[`${keyPrefix}verificationTimestamp`],
            'data': bundle.inputData?.[`${keyPrefix}data`],
            'dataLabel': bundle.inputData?.[`${keyPrefix}dataLabel`],
            'data1': bundle.inputData?.[`${keyPrefix}data1`],
            'data1Label': bundle.inputData?.[`${keyPrefix}data1Label`],
            'data2': bundle.inputData?.[`${keyPrefix}data2`],
            'data2Label': bundle.inputData?.[`${keyPrefix}data2Label`],
            'data3': bundle.inputData?.[`${keyPrefix}data3`],
            'data3Label': bundle.inputData?.[`${keyPrefix}data3Label`],
            'data4': bundle.inputData?.[`${keyPrefix}data4`],
            'data4Label': bundle.inputData?.[`${keyPrefix}data4Label`],
            'data5': bundle.inputData?.[`${keyPrefix}data5`],
            'data5Label': bundle.inputData?.[`${keyPrefix}data5Label`],
            'data6': bundle.inputData?.[`${keyPrefix}data6`],
            'data6Label': bundle.inputData?.[`${keyPrefix}data6Label`],
            'data7': bundle.inputData?.[`${keyPrefix}data7`],
            'data7Label': bundle.inputData?.[`${keyPrefix}data7Label`],
            'data8': bundle.inputData?.[`${keyPrefix}data8`],
            'data8Label': bundle.inputData?.[`${keyPrefix}data8Label`],
            'data9': bundle.inputData?.[`${keyPrefix}data9`],
            'data9Label': bundle.inputData?.[`${keyPrefix}data9Label`],
        }
    },
}
