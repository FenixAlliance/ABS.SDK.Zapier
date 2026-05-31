const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentID`,
                label: `[${labelPrefix}shipmentID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}proofOfDeliveryID`,
                label: `[${labelPrefix}proofOfDeliveryID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'shipmentID': bundle.inputData?.[`${keyPrefix}shipmentID`],
            'proofOfDeliveryID': bundle.inputData?.[`${keyPrefix}proofOfDeliveryID`],
        }
    },
}
