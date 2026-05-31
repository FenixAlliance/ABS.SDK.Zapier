const utils = require('../utils/utils');
const HttpContext = require('../models/HttpContext');
const PipeWriter = require('../models/PipeWriter');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...HttpContext.fields(`${keyPrefix}httpContext`, isInput),
            {
                key: `${keyPrefix}statusCode`,
                label: `[${labelPrefix}statusCode]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}headers`,
                label: `[${labelPrefix}headers]`,
                type: 'object',
            },
            {
                key: `${keyPrefix}body`,
                label: `[${labelPrefix}body]`,
                type: 'file',
            },
            ...PipeWriter.fields(`${keyPrefix}bodyWriter`, isInput),
            {
                key: `${keyPrefix}contentLength`,
                label: `[${labelPrefix}contentLength]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cookies`,
                label: `[${labelPrefix}cookies]`,
                dict: true,
            },
            {
                key: `${keyPrefix}hasStarted`,
                label: `[${labelPrefix}hasStarted]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'httpContext': utils.removeIfEmpty(HttpContext.mapping(bundle, `${keyPrefix}httpContext`)),
            'statusCode': bundle.inputData?.[`${keyPrefix}statusCode`],
            'headers': bundle.inputData?.[`${keyPrefix}headers`],
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'bodyWriter': utils.removeIfEmpty(PipeWriter.mapping(bundle, `${keyPrefix}bodyWriter`)),
            'contentLength': bundle.inputData?.[`${keyPrefix}contentLength`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'cookies': bundle.inputData?.[`${keyPrefix}cookies`],
            'hasStarted': bundle.inputData?.[`${keyPrefix}hasStarted`],
        }
    },
}
