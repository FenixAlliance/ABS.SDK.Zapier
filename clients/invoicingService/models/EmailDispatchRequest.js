const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}buttonLink`,
                label: `[${labelPrefix}buttonLink]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}buttonText`,
                label: `[${labelPrefix}buttonText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}alertMessage`,
                label: `[${labelPrefix}alertMessage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}alertType`,
                label: `[${labelPrefix}alertType]`,
                type: 'string',
                choices: [
                    'None',
                    'Info',
                    'Error',
                    'Warning',
                    'Success',
                    'Action',
                    'Alert',
                ],
            },
            {
                key: `${keyPrefix}culture`,
                label: `[${labelPrefix}culture]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}uiCulture`,
                label: `[${labelPrefix}uiCulture]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipients`,
                label: `[${labelPrefix}recipients]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactIds`,
                label: `[${labelPrefix}contactIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantIds`,
                label: `[${labelPrefix}tenantIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}userIds`,
                label: `[${labelPrefix}userIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}templateUrl`,
                label: `[${labelPrefix}templateUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}emailTemplateId`,
                label: `[${labelPrefix}emailTemplateId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'buttonLink': bundle.inputData?.[`${keyPrefix}buttonLink`],
            'buttonText': bundle.inputData?.[`${keyPrefix}buttonText`],
            'alertMessage': bundle.inputData?.[`${keyPrefix}alertMessage`],
            'alertType': bundle.inputData?.[`${keyPrefix}alertType`],
            'culture': bundle.inputData?.[`${keyPrefix}culture`],
            'uiCulture': bundle.inputData?.[`${keyPrefix}uiCulture`],
            'recipients': bundle.inputData?.[`${keyPrefix}recipients`],
            'contactIds': bundle.inputData?.[`${keyPrefix}contactIds`],
            'tenantIds': bundle.inputData?.[`${keyPrefix}tenantIds`],
            'userIds': bundle.inputData?.[`${keyPrefix}userIds`],
            'templateUrl': bundle.inputData?.[`${keyPrefix}templateUrl`],
            'emailTemplateId': bundle.inputData?.[`${keyPrefix}emailTemplateId`],
        }
    },
}
