const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
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
