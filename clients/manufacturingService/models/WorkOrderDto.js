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
                key: `${keyPrefix}promisedStartDate`,
                label: `[${labelPrefix}promisedStartDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}promisedEndDate`,
                label: `[${labelPrefix}promisedEndDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
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
                key: `${keyPrefix}productionPlanId`,
                label: `[${labelPrefix}productionPlanId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}workOrderTypeId`,
                label: `[${labelPrefix}workOrderTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}workstationId`,
                label: `[${labelPrefix}workstationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
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
            'promisedStartDate': bundle.inputData?.[`${keyPrefix}promisedStartDate`],
            'promisedEndDate': bundle.inputData?.[`${keyPrefix}promisedEndDate`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'individualId': bundle.inputData?.[`${keyPrefix}individualId`],
            'organizationId': bundle.inputData?.[`${keyPrefix}organizationId`],
            'productionPlanId': bundle.inputData?.[`${keyPrefix}productionPlanId`],
            'workOrderTypeId': bundle.inputData?.[`${keyPrefix}workOrderTypeId`],
            'workstationId': bundle.inputData?.[`${keyPrefix}workstationId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
