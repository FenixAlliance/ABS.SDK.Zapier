const utils = require('../utils/utils');
const AsnEncodedData = require('../models/AsnEncodedData');
const AsymmetricAlgorithm = require('../models/AsymmetricAlgorithm');
const Oid = require('../models/Oid');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...AsnEncodedData.fields(`${keyPrefix}encodedKeyValue`, isInput),
            ...AsnEncodedData.fields(`${keyPrefix}encodedParameters`, isInput),
            ...AsymmetricAlgorithm.fields(`${keyPrefix}key`, isInput),
            ...Oid.fields(`${keyPrefix}oid`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'encodedKeyValue': utils.removeIfEmpty(AsnEncodedData.mapping(bundle, `${keyPrefix}encodedKeyValue`)),
            'encodedParameters': utils.removeIfEmpty(AsnEncodedData.mapping(bundle, `${keyPrefix}encodedParameters`)),
            'key': utils.removeIfEmpty(AsymmetricAlgorithm.mapping(bundle, `${keyPrefix}key`)),
            'oid': utils.removeIfEmpty(Oid.mapping(bundle, `${keyPrefix}oid`)),
        }
    },
}
