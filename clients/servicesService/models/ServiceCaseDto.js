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
                key: `${keyPrefix}instructions`,
                label: `[${labelPrefix}instructions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxable`,
                label: `[${labelPrefix}taxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}workLocation`,
                label: `[${labelPrefix}workLocation]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serviceId`,
                label: `[${labelPrefix}serviceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serviceQueueId`,
                label: `[${labelPrefix}serviceQueueId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serviceCaseTypeId`,
                label: `[${labelPrefix}serviceCaseTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serviceLevelAgreementId`,
                label: `[${labelPrefix}serviceLevelAgreementId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}individualId`,
                label: `[${labelPrefix}individualId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationId`,
                label: `[${labelPrefix}organizationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountHolderId`,
                label: `[${labelPrefix}accountHolderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiverBusinessId`,
                label: `[${labelPrefix}receiverBusinessId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}territoryId`,
                label: `[${labelPrefix}territoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priceListId`,
                label: `[${labelPrefix}priceListId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}promisedStartDate`,
                label: `[${labelPrefix}promisedStartDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}promisedEndDate`,
                label: `[${labelPrefix}promisedEndDate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'instructions': bundle.inputData?.[`${keyPrefix}instructions`],
            'taxable': bundle.inputData?.[`${keyPrefix}taxable`],
            'workLocation': bundle.inputData?.[`${keyPrefix}workLocation`],
            'serviceId': bundle.inputData?.[`${keyPrefix}serviceId`],
            'serviceQueueId': bundle.inputData?.[`${keyPrefix}serviceQueueId`],
            'serviceCaseTypeId': bundle.inputData?.[`${keyPrefix}serviceCaseTypeId`],
            'serviceLevelAgreementId': bundle.inputData?.[`${keyPrefix}serviceLevelAgreementId`],
            'individualId': bundle.inputData?.[`${keyPrefix}individualId`],
            'organizationId': bundle.inputData?.[`${keyPrefix}organizationId`],
            'accountHolderId': bundle.inputData?.[`${keyPrefix}accountHolderId`],
            'receiverBusinessId': bundle.inputData?.[`${keyPrefix}receiverBusinessId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'territoryId': bundle.inputData?.[`${keyPrefix}territoryId`],
            'priceListId': bundle.inputData?.[`${keyPrefix}priceListId`],
            'promisedStartDate': bundle.inputData?.[`${keyPrefix}promisedStartDate`],
            'promisedEndDate': bundle.inputData?.[`${keyPrefix}promisedEndDate`],
        }
    },
}
