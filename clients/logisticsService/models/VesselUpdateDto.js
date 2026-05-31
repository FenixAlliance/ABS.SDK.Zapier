const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imoNumber`,
                label: `[${labelPrefix}imoNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mmsiNumber`,
                label: `[${labelPrefix}mmsiNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}callSign`,
                label: `[${labelPrefix}callSign]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}flagCountryId`,
                label: `[${labelPrefix}flagCountryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vesselType`,
                label: `[${labelPrefix}vesselType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vesselStatus`,
                label: `[${labelPrefix}vesselStatus]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}grossTonnage`,
                label: `[${labelPrefix}grossTonnage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}deadweightTonnage`,
                label: `[${labelPrefix}deadweightTonnage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}teuCapacity`,
                label: `[${labelPrefix}teuCapacity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}lengthMeters`,
                label: `[${labelPrefix}lengthMeters]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}beamMeters`,
                label: `[${labelPrefix}beamMeters]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}draftMeters`,
                label: `[${labelPrefix}draftMeters]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}yearBuilt`,
                label: `[${labelPrefix}yearBuilt]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}shippingCourierId`,
                label: `[${labelPrefix}shippingCourierId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'imoNumber': bundle.inputData?.[`${keyPrefix}imoNumber`],
            'mmsiNumber': bundle.inputData?.[`${keyPrefix}mmsiNumber`],
            'callSign': bundle.inputData?.[`${keyPrefix}callSign`],
            'flagCountryId': bundle.inputData?.[`${keyPrefix}flagCountryId`],
            'vesselType': bundle.inputData?.[`${keyPrefix}vesselType`],
            'vesselStatus': bundle.inputData?.[`${keyPrefix}vesselStatus`],
            'grossTonnage': bundle.inputData?.[`${keyPrefix}grossTonnage`],
            'deadweightTonnage': bundle.inputData?.[`${keyPrefix}deadweightTonnage`],
            'teuCapacity': bundle.inputData?.[`${keyPrefix}teuCapacity`],
            'lengthMeters': bundle.inputData?.[`${keyPrefix}lengthMeters`],
            'beamMeters': bundle.inputData?.[`${keyPrefix}beamMeters`],
            'draftMeters': bundle.inputData?.[`${keyPrefix}draftMeters`],
            'yearBuilt': bundle.inputData?.[`${keyPrefix}yearBuilt`],
            'shippingCourierId': bundle.inputData?.[`${keyPrefix}shippingCourierId`],
        }
    },
}
