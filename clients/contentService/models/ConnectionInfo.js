const utils = require('../utils/utils');
const IPAddress = require('../models/IPAddress');
const X509Certificate2 = require('../models/X509Certificate2');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            ...IPAddress.fields(`${keyPrefix}remoteIpAddress`, isInput),
            {
                key: `${keyPrefix}remotePort`,
                label: `[${labelPrefix}remotePort]`,
                type: 'integer',
            },
            ...IPAddress.fields(`${keyPrefix}localIpAddress`, isInput),
            {
                key: `${keyPrefix}localPort`,
                label: `[${labelPrefix}localPort]`,
                type: 'integer',
            },
            ...X509Certificate2.fields(`${keyPrefix}clientCertificate`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'remoteIpAddress': utils.removeIfEmpty(IPAddress.mapping(bundle, `${keyPrefix}remoteIpAddress`)),
            'remotePort': bundle.inputData?.[`${keyPrefix}remotePort`],
            'localIpAddress': utils.removeIfEmpty(IPAddress.mapping(bundle, `${keyPrefix}localIpAddress`)),
            'localPort': bundle.inputData?.[`${keyPrefix}localPort`],
            'clientCertificate': utils.removeIfEmpty(X509Certificate2.mapping(bundle, `${keyPrefix}clientCertificate`)),
        }
    },
}
