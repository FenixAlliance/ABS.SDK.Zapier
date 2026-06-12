const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const HostString = require('../models/HostString');
const HttpContext = require('../models/HttpContext');
const PathString = require('../models/PathString');
const QueryString = require('../models/QueryString');
const StringStringKeyValuePair = require('../models/StringStringKeyValuePair');
const StringStringValuesKeyValuePair = require('../models/StringStringValuesKeyValuePair');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...HttpContext.fields(`${keyPrefix}httpContext`, isInput),
            {
                key: `${keyPrefix}method`,
                label: `[${labelPrefix}method]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scheme`,
                label: `[${labelPrefix}scheme]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isHttps`,
                label: `[${labelPrefix}isHttps]`,
                type: 'boolean',
            },
            ...HostString.fields(`${keyPrefix}host`, isInput),
            ...PathString.fields(`${keyPrefix}pathBase`, isInput),
            ...PathString.fields(`${keyPrefix}path`, isInput),
            ...QueryString.fields(`${keyPrefix}queryString`, isInput),
            {
                key: `${keyPrefix}query`,
                label: `[${labelPrefix}query]`,
                children: StringStringValuesKeyValuePair.fields(`${keyPrefix}query${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}protocol`,
                label: `[${labelPrefix}protocol]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headers`,
                label: `[${labelPrefix}headers]`,
                type: 'object',
            },
            {
                key: `${keyPrefix}cookies`,
                label: `[${labelPrefix}cookies]`,
                children: StringStringKeyValuePair.fields(`${keyPrefix}cookies${!isInput ? '[]' : ''}`, isInput, true), 
            },
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
                key: `${keyPrefix}body`,
                label: `[${labelPrefix}body]`,
                type: 'file',
            },
            {
                key: `${keyPrefix}bodyReader`,
                label: `[${labelPrefix}bodyReader]`,
                type: 'file',
            },
            {
                key: `${keyPrefix}hasFormContentType`,
                label: `[${labelPrefix}hasFormContentType]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}form`,
                label: `[${labelPrefix}form]`,
                children: StringStringValuesKeyValuePair.fields(`${keyPrefix}form${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}routeValues`,
                label: `[${labelPrefix}routeValues]`,
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'httpContext': utils.removeIfEmpty(HttpContext.mapping(bundle, `${keyPrefix}httpContext`)),
            'method': bundle.inputData?.[`${keyPrefix}method`],
            'scheme': bundle.inputData?.[`${keyPrefix}scheme`],
            'isHttps': bundle.inputData?.[`${keyPrefix}isHttps`],
            'host': utils.removeIfEmpty(HostString.mapping(bundle, `${keyPrefix}host`)),
            'pathBase': utils.removeIfEmpty(PathString.mapping(bundle, `${keyPrefix}pathBase`)),
            'path': utils.removeIfEmpty(PathString.mapping(bundle, `${keyPrefix}path`)),
            'queryString': utils.removeIfEmpty(QueryString.mapping(bundle, `${keyPrefix}queryString`)),
            'query': utils.childMapping(bundle.inputData?.[`${keyPrefix}query`], `${keyPrefix}query`, StringStringValuesKeyValuePair),
            'protocol': bundle.inputData?.[`${keyPrefix}protocol`],
            'headers': bundle.inputData?.[`${keyPrefix}headers`],
            'cookies': utils.childMapping(bundle.inputData?.[`${keyPrefix}cookies`], `${keyPrefix}cookies`, StringStringKeyValuePair),
            'contentLength': bundle.inputData?.[`${keyPrefix}contentLength`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'bodyReader': bundle.inputData?.[`${keyPrefix}bodyReader`],
            'hasFormContentType': bundle.inputData?.[`${keyPrefix}hasFormContentType`],
            'form': utils.childMapping(bundle.inputData?.[`${keyPrefix}form`], `${keyPrefix}form`, StringStringValuesKeyValuePair),
            'routeValues': bundle.inputData?.[`${keyPrefix}routeValues`],
        }
    },
}
