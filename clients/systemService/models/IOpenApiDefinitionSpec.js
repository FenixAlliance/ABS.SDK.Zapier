const utils = require('../utils/utils');
const IOpenApiContact = require('../models/IOpenApiContact');
const IOpenApiEndpoint = require('../models/IOpenApiEndpoint');
const IOpenApiLicense = require('../models/IOpenApiLicense');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}termsOfService`,
                label: `[${labelPrefix}termsOfService]`,
                type: 'string',
            },
            ...IOpenApiEndpoint.fields(`${keyPrefix}openApiEndpoint`, isInput),
            ...IOpenApiContact.fields(`${keyPrefix}openApiContact`, isInput),
            ...IOpenApiLicense.fields(`${keyPrefix}license`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'termsOfService': bundle.inputData?.[`${keyPrefix}termsOfService`],
            'openApiEndpoint': utils.removeIfEmpty(IOpenApiEndpoint.mapping(bundle, `${keyPrefix}openApiEndpoint`)),
            'openApiContact': utils.removeIfEmpty(IOpenApiContact.mapping(bundle, `${keyPrefix}openApiContact`)),
            'license': utils.removeIfEmpty(IOpenApiLicense.mapping(bundle, `${keyPrefix}license`)),
        }
    },
}
