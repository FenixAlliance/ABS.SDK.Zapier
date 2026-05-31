const utils = require('../utils/utils');
const ISwaggerSpec = require('../models/ISwaggerSpec');

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
                key: `${keyPrefix}active`,
                label: `[${labelPrefix}active]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}order`,
                label: `[${labelPrefix}order]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fullName`,
                label: `[${labelPrefix}fullName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
                choices: [
                    'Module',
                    'Integration',
                    'StudioModule',
                    'StudioIntegration',
                ],
            },
            {
                key: `${keyPrefix}configuration`,
                label: `[${labelPrefix}configuration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}author`,
                label: `[${labelPrefix}author]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authorUrl`,
                label: `[${labelPrefix}authorUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}license`,
                label: `[${labelPrefix}license]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requireLicenseAcceptance`,
                label: `[${labelPrefix}requireLicenseAcceptance]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}repository`,
                label: `[${labelPrefix}repository]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `[${labelPrefix}path]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}icon`,
                label: `[${labelPrefix}icon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}image`,
                label: `[${labelPrefix}image]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nuSpecPath`,
                label: `[${labelPrefix}nuSpecPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}manifest`,
                label: `[${labelPrefix}manifest]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}documentation`,
                label: `[${labelPrefix}documentation]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}website`,
                label: `[${labelPrefix}website]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
            ...ISwaggerSpec.fields(`${keyPrefix}swaggerSpec`, isInput),
            {
                key: `${keyPrefix}swaggerSpecs`,
                label: `[${labelPrefix}swaggerSpecs]`,
                children: ISwaggerSpec.fields(`${keyPrefix}swaggerSpecs${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assemblyPaths`,
                label: `[${labelPrefix}assemblyPaths]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}requiredPermissions`,
                label: `[${labelPrefix}requiredPermissions]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}markedForDeletion`,
                label: `[${labelPrefix}markedForDeletion]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'active': bundle.inputData?.[`${keyPrefix}active`],
            'order': bundle.inputData?.[`${keyPrefix}order`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'fullName': bundle.inputData?.[`${keyPrefix}fullName`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'configuration': bundle.inputData?.[`${keyPrefix}configuration`],
            'author': bundle.inputData?.[`${keyPrefix}author`],
            'authorUrl': bundle.inputData?.[`${keyPrefix}authorUrl`],
            'license': bundle.inputData?.[`${keyPrefix}license`],
            'requireLicenseAcceptance': bundle.inputData?.[`${keyPrefix}requireLicenseAcceptance`],
            'repository': bundle.inputData?.[`${keyPrefix}repository`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
            'icon': bundle.inputData?.[`${keyPrefix}icon`],
            'image': bundle.inputData?.[`${keyPrefix}image`],
            'nuSpecPath': bundle.inputData?.[`${keyPrefix}nuSpecPath`],
            'manifest': bundle.inputData?.[`${keyPrefix}manifest`],
            'documentation': bundle.inputData?.[`${keyPrefix}documentation`],
            'website': bundle.inputData?.[`${keyPrefix}website`],
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
            'swaggerSpec': utils.removeIfEmpty(ISwaggerSpec.mapping(bundle, `${keyPrefix}swaggerSpec`)),
            'swaggerSpecs': utils.childMapping(bundle.inputData?.[`${keyPrefix}swaggerSpecs`], `${keyPrefix}swaggerSpecs`, ISwaggerSpec),
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'assemblyPaths': bundle.inputData?.[`${keyPrefix}assemblyPaths`],
            'requiredPermissions': bundle.inputData?.[`${keyPrefix}requiredPermissions`],
            'markedForDeletion': bundle.inputData?.[`${keyPrefix}markedForDeletion`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
        }
    },
}
