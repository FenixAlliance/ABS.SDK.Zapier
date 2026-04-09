const utils = require('../utils/utils');
const ISwaggerContact = require('../models/ISwaggerContact');
const ISwaggerEndpoint = require('../models/ISwaggerEndpoint');
const ISwaggerLicense = require('../models/ISwaggerLicense');

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
            ...ISwaggerEndpoint.fields(`${keyPrefix}swaggerEndpoint`, isInput),
            ...ISwaggerContact.fields(`${keyPrefix}openApiContact`, isInput),
            ...ISwaggerLicense.fields(`${keyPrefix}license`, isInput),
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
            'swaggerEndpoint': utils.removeIfEmpty(ISwaggerEndpoint.mapping(bundle, `${keyPrefix}swaggerEndpoint`)),
            'openApiContact': utils.removeIfEmpty(ISwaggerContact.mapping(bundle, `${keyPrefix}openApiContact`)),
            'license': utils.removeIfEmpty(ISwaggerLicense.mapping(bundle, `${keyPrefix}license`)),
        }
    },
}
