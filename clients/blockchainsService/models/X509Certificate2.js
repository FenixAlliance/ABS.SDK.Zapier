const utils = require('../utils/utils');
const AsymmetricAlgorithm = require('../models/AsymmetricAlgorithm');
const ByteArray = require('../models/ByteArray');
const ByteReadOnlyMemory = require('../models/ByteReadOnlyMemory');
const Oid = require('../models/Oid');
const PublicKey = require('../models/PublicKey');
const X500DistinguishedName = require('../models/X500DistinguishedName');
const X509Extension = require('../models/X509Extension');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}handle`,
                label: `[${labelPrefix}handle]`,
                dict: true,
            },
            {
                key: `${keyPrefix}issuer`,
                label: `[${labelPrefix}issuer]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                type: 'string',
            },
            ...ByteReadOnlyMemory.fields(`${keyPrefix}serialNumberBytes`, isInput),
            {
                key: `${keyPrefix}archived`,
                label: `[${labelPrefix}archived]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}extensions`,
                label: `[${labelPrefix}extensions]`,
                children: X509Extension.fields(`${keyPrefix}extensions${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}friendlyName`,
                label: `[${labelPrefix}friendlyName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hasPrivateKey`,
                label: `[${labelPrefix}hasPrivateKey]`,
                type: 'boolean',
            },
            ...AsymmetricAlgorithm.fields(`${keyPrefix}privateKey`, isInput),
            ...X500DistinguishedName.fields(`${keyPrefix}issuerName`, isInput),
            {
                key: `${keyPrefix}notAfter`,
                label: `[${labelPrefix}notAfter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notBefore`,
                label: `[${labelPrefix}notBefore]`,
                type: 'string',
            },
            ...PublicKey.fields(`${keyPrefix}publicKey`, isInput),
            ...ByteArray.fields(`${keyPrefix}rawData`, isInput),
            ...ByteReadOnlyMemory.fields(`${keyPrefix}rawDataMemory`, isInput),
            {
                key: `${keyPrefix}serialNumber`,
                label: `[${labelPrefix}serialNumber]`,
                type: 'string',
            },
            ...Oid.fields(`${keyPrefix}signatureAlgorithm`, isInput),
            ...X500DistinguishedName.fields(`${keyPrefix}subjectName`, isInput),
            {
                key: `${keyPrefix}thumbprint`,
                label: `[${labelPrefix}thumbprint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'handle': bundle.inputData?.[`${keyPrefix}handle`],
            'issuer': bundle.inputData?.[`${keyPrefix}issuer`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'serialNumberBytes': utils.removeIfEmpty(ByteReadOnlyMemory.mapping(bundle, `${keyPrefix}serialNumberBytes`)),
            'archived': bundle.inputData?.[`${keyPrefix}archived`],
            'extensions': utils.childMapping(bundle.inputData?.[`${keyPrefix}extensions`], `${keyPrefix}extensions`, X509Extension),
            'friendlyName': bundle.inputData?.[`${keyPrefix}friendlyName`],
            'hasPrivateKey': bundle.inputData?.[`${keyPrefix}hasPrivateKey`],
            'privateKey': utils.removeIfEmpty(AsymmetricAlgorithm.mapping(bundle, `${keyPrefix}privateKey`)),
            'issuerName': utils.removeIfEmpty(X500DistinguishedName.mapping(bundle, `${keyPrefix}issuerName`)),
            'notAfter': bundle.inputData?.[`${keyPrefix}notAfter`],
            'notBefore': bundle.inputData?.[`${keyPrefix}notBefore`],
            'publicKey': utils.removeIfEmpty(PublicKey.mapping(bundle, `${keyPrefix}publicKey`)),
            'rawData': utils.removeIfEmpty(ByteArray.mapping(bundle, `${keyPrefix}rawData`)),
            'rawDataMemory': utils.removeIfEmpty(ByteReadOnlyMemory.mapping(bundle, `${keyPrefix}rawDataMemory`)),
            'serialNumber': bundle.inputData?.[`${keyPrefix}serialNumber`],
            'signatureAlgorithm': utils.removeIfEmpty(Oid.mapping(bundle, `${keyPrefix}signatureAlgorithm`)),
            'subjectName': utils.removeIfEmpty(X500DistinguishedName.mapping(bundle, `${keyPrefix}subjectName`)),
            'thumbprint': bundle.inputData?.[`${keyPrefix}thumbprint`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
