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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
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
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationProfileId`,
                label: `[${labelPrefix}organizationProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentBusinessUnitId`,
                label: `[${labelPrefix}parentBusinessUnitId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'businessUnitQualifiedName': bundle.inputData?.[`${keyPrefix}businessUnitQualifiedName`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'organizationProfileId': bundle.inputData?.[`${keyPrefix}organizationProfileId`],
            'parentBusinessUnitId': bundle.inputData?.[`${keyPrefix}parentBusinessUnitId`],
        }
    },
}
