const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}guestCartsDeleted`,
                label: `[${labelPrefix}guestCartsDeleted]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}itemCartRecordsDeleted`,
                label: `[${labelPrefix}itemCartRecordsDeleted]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}wishListsDeleted`,
                label: `[${labelPrefix}wishListsDeleted]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'guestCartsDeleted': bundle.inputData?.[`${keyPrefix}guestCartsDeleted`],
            'itemCartRecordsDeleted': bundle.inputData?.[`${keyPrefix}itemCartRecordsDeleted`],
            'wishListsDeleted': bundle.inputData?.[`${keyPrefix}wishListsDeleted`],
        }
    },
}
