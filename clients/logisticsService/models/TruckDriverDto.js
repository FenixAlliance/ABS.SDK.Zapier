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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nationalIdNumber`,
                label: `[${labelPrefix}nationalIdNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}licenseNumber`,
                label: `[${labelPrefix}licenseNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}licenseClass`,
                label: `[${labelPrefix}licenseClass]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}licenseExpiryDate`,
                label: `[${labelPrefix}licenseExpiryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}adrCertified`,
                label: `[${labelPrefix}adrCertified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}adrCertificateExpiryDate`,
                label: `[${labelPrefix}adrCertificateExpiryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}medicalExamExpiryDate`,
                label: `[${labelPrefix}medicalExamExpiryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCourierId`,
                label: `[${labelPrefix}shippingCourierId]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'nationalIdNumber': bundle.inputData?.[`${keyPrefix}nationalIdNumber`],
            'licenseNumber': bundle.inputData?.[`${keyPrefix}licenseNumber`],
            'licenseClass': bundle.inputData?.[`${keyPrefix}licenseClass`],
            'licenseExpiryDate': bundle.inputData?.[`${keyPrefix}licenseExpiryDate`],
            'adrCertified': bundle.inputData?.[`${keyPrefix}adrCertified`],
            'adrCertificateExpiryDate': bundle.inputData?.[`${keyPrefix}adrCertificateExpiryDate`],
            'medicalExamExpiryDate': bundle.inputData?.[`${keyPrefix}medicalExamExpiryDate`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'shippingCourierId': bundle.inputData?.[`${keyPrefix}shippingCourierId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
