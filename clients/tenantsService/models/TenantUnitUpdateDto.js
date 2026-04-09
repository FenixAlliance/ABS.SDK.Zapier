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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessUnitQualifiedName`,
                label: `[${labelPrefix}businessUnitQualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryID`,
                label: `[${labelPrefix}countryID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationProfileID`,
                label: `[${labelPrefix}organizationProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentBusinessUnitID`,
                label: `[${labelPrefix}parentBusinessUnitID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'businessUnitQualifiedName': bundle.inputData?.[`${keyPrefix}businessUnitQualifiedName`],
            'countryID': bundle.inputData?.[`${keyPrefix}countryID`],
            'organizationProfileID': bundle.inputData?.[`${keyPrefix}organizationProfileID`],
            'parentBusinessUnitID': bundle.inputData?.[`${keyPrefix}parentBusinessUnitID`],
        }
    },
}
