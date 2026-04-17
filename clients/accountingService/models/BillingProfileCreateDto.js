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
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxId`,
                label: `[${labelPrefix}taxId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}address`,
                label: `[${labelPrefix}address]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}address1`,
                label: `[${labelPrefix}address1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}address2`,
                label: `[${labelPrefix}address2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postalCode`,
                label: `[${labelPrefix}postalCode]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessName`,
                label: `[${labelPrefix}businessName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}commercialName`,
                label: `[${labelPrefix}commercialName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}ticker`,
                label: `[${labelPrefix}ticker]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}duns`,
                label: `[${labelPrefix}duns]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isPublicCompany`,
                label: `[${labelPrefix}isPublicCompany]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFactaCustomer`,
                label: `[${labelPrefix}isFactaCustomer]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalIdentificationTypeId`,
                label: `[${labelPrefix}fiscalIdentificationTypeId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalAuthorityId`,
                label: `[${labelPrefix}fiscalAuthorityId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalRegimeId`,
                label: `[${labelPrefix}fiscalRegimeId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'taxId': bundle.inputData?.[`${keyPrefix}taxId`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'address': bundle.inputData?.[`${keyPrefix}address`],
            'address1': bundle.inputData?.[`${keyPrefix}address1`],
            'address2': bundle.inputData?.[`${keyPrefix}address2`],
            'postalCode': bundle.inputData?.[`${keyPrefix}postalCode`],
            'businessName': bundle.inputData?.[`${keyPrefix}businessName`],
            'commercialName': bundle.inputData?.[`${keyPrefix}commercialName`],
            'ticker': bundle.inputData?.[`${keyPrefix}ticker`],
            'duns': bundle.inputData?.[`${keyPrefix}duns`],
            'isPublicCompany': bundle.inputData?.[`${keyPrefix}isPublicCompany`],
            'isFactaCustomer': bundle.inputData?.[`${keyPrefix}isFactaCustomer`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'fiscalIdentificationTypeId': bundle.inputData?.[`${keyPrefix}fiscalIdentificationTypeId`],
            'fiscalAuthorityId': bundle.inputData?.[`${keyPrefix}fiscalAuthorityId`],
            'fiscalRegimeId': bundle.inputData?.[`${keyPrefix}fiscalRegimeId`],
        }
    },
}
