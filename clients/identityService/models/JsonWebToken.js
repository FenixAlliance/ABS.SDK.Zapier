const utils = require('../utils/utils');
const JsonWebTokenHeader = require('../models/JsonWebTokenHeader');
const JsonWebTokenPayload = require('../models/JsonWebTokenPayload');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...JsonWebTokenHeader.fields(`${keyPrefix}header`, isInput),
            ...JsonWebTokenPayload.fields(`${keyPrefix}payload`, isInput),
            {
                key: `${keyPrefix}signature`,
                label: `[${labelPrefix}signature]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tokenType`,
                label: `[${labelPrefix}tokenType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiresIn`,
                label: `[${labelPrefix}expiresIn]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}accessToken`,
                label: `[${labelPrefix}accessToken]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'header': utils.removeIfEmpty(JsonWebTokenHeader.mapping(bundle, `${keyPrefix}header`)),
            'payload': utils.removeIfEmpty(JsonWebTokenPayload.mapping(bundle, `${keyPrefix}payload`)),
            'signature': bundle.inputData?.[`${keyPrefix}signature`],
            'tokenType': bundle.inputData?.[`${keyPrefix}tokenType`],
            'expiresIn': bundle.inputData?.[`${keyPrefix}expiresIn`],
            'accessToken': bundle.inputData?.[`${keyPrefix}accessToken`],
        }
    },
}
