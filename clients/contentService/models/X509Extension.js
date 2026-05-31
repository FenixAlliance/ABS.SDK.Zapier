const utils = require('../utils/utils');
const ByteArray = require('../models/ByteArray');
const Oid = require('../models/Oid');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Oid.fields(`${keyPrefix}oid`, isInput),
            ...ByteArray.fields(`${keyPrefix}rawData`, isInput),
            {
                key: `${keyPrefix}critical`,
                label: `[${labelPrefix}critical]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'oid': utils.removeIfEmpty(Oid.mapping(bundle, `${keyPrefix}oid`)),
            'rawData': utils.removeIfEmpty(ByteArray.mapping(bundle, `${keyPrefix}rawData`)),
            'critical': bundle.inputData?.[`${keyPrefix}critical`],
        }
    },
}
