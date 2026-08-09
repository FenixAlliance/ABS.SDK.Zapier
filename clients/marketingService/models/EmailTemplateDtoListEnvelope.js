const utils = require('../utils/utils');
const EmailTemplateDto = require('../models/EmailTemplateDto');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isSuccess`,
                label: `[${labelPrefix}isSuccess]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}errorMessage`,
                label: `[${labelPrefix}errorMessage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}httpStatus`,
                label: `[${labelPrefix}httpStatus]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}errorCode`,
                label: `[${labelPrefix}errorCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validationDetails`,
                label: `[${labelPrefix}validationDetails]`,
                type: 'object',
            },
            {
                key: `${keyPrefix}activityId`,
                label: `[${labelPrefix}activityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}result`,
                label: `[${labelPrefix}result]`,
                children: EmailTemplateDto.fields(`${keyPrefix}result${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isSuccess': bundle.inputData?.[`${keyPrefix}isSuccess`],
            'errorMessage': bundle.inputData?.[`${keyPrefix}errorMessage`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'httpStatus': bundle.inputData?.[`${keyPrefix}httpStatus`],
            'errorCode': bundle.inputData?.[`${keyPrefix}errorCode`],
            'validationDetails': bundle.inputData?.[`${keyPrefix}validationDetails`],
            'activityId': bundle.inputData?.[`${keyPrefix}activityId`],
            'result': utils.childMapping(bundle.inputData?.[`${keyPrefix}result`], `${keyPrefix}result`, EmailTemplateDto),
        }
    },
}
