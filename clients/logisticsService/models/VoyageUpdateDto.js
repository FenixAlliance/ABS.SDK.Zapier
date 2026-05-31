const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}voyageNumber`,
                label: `[${labelPrefix}voyageNumber]`,
                type: 'string',
            },
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
                key: `${keyPrefix}voyageDirection`,
                label: `[${labelPrefix}voyageDirection]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}departureDate`,
                label: `[${labelPrefix}departureDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}arrivalDate`,
                label: `[${labelPrefix}arrivalDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vesselId`,
                label: `[${labelPrefix}vesselId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'voyageNumber': bundle.inputData?.[`${keyPrefix}voyageNumber`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'voyageDirection': bundle.inputData?.[`${keyPrefix}voyageDirection`],
            'departureDate': bundle.inputData?.[`${keyPrefix}departureDate`],
            'arrivalDate': bundle.inputData?.[`${keyPrefix}arrivalDate`],
            'vesselId': bundle.inputData?.[`${keyPrefix}vesselId`],
        }
    },
}
