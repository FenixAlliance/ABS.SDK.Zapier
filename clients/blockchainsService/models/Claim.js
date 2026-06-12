const utils = require('../utils/utils');
const ClaimsIdentity = require('../models/ClaimsIdentity');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}issuer`,
                label: `[${labelPrefix}issuer]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originalIssuer`,
                label: `[${labelPrefix}originalIssuer]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}properties`,
                label: `[${labelPrefix}properties]`,
                type: 'object',
            },
            ...ClaimsIdentity.fields(`${keyPrefix}subject`, isInput),
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}valueType`,
                label: `[${labelPrefix}valueType]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'issuer': bundle.inputData?.[`${keyPrefix}issuer`],
            'originalIssuer': bundle.inputData?.[`${keyPrefix}originalIssuer`],
            'properties': bundle.inputData?.[`${keyPrefix}properties`],
            'subject': utils.removeIfEmpty(ClaimsIdentity.mapping(bundle, `${keyPrefix}subject`)),
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'valueType': bundle.inputData?.[`${keyPrefix}valueType`],
        }
    },
}
