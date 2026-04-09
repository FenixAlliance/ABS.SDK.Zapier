const utils = require('../utils/utils');
const PortalOptions = require('../models/PortalOptions');

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
                key: `${keyPrefix}portalID`,
                label: `[${labelPrefix}portalID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scopes`,
                label: `[${labelPrefix}scopes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantID`,
                label: `[${labelPrefix}tenantID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}homePageID`,
                label: `[${labelPrefix}homePageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}blogPageID`,
                label: `[${labelPrefix}blogPageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}storePageID`,
                label: `[${labelPrefix}storePageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}baseEndpoint`,
                label: `[${labelPrefix}baseEndpoint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}storeRoutePrefix`,
                label: `[${labelPrefix}storeRoutePrefix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicKey`,
                label: `[${labelPrefix}publicKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}privateKey`,
                label: `[${labelPrefix}privateKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authToken`,
                label: `[${labelPrefix}authToken]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authTokenType`,
                label: `[${labelPrefix}authTokenType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authTokenExpiration`,
                label: `[${labelPrefix}authTokenExpiration]`,
                type: 'number',
            },
            ...PortalOptions.fields(`${keyPrefix}options`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'portalID': bundle.inputData?.[`${keyPrefix}portalID`],
            'scopes': bundle.inputData?.[`${keyPrefix}scopes`],
            'tenantID': bundle.inputData?.[`${keyPrefix}tenantID`],
            'homePageID': bundle.inputData?.[`${keyPrefix}homePageID`],
            'blogPageID': bundle.inputData?.[`${keyPrefix}blogPageID`],
            'storePageID': bundle.inputData?.[`${keyPrefix}storePageID`],
            'baseEndpoint': bundle.inputData?.[`${keyPrefix}baseEndpoint`],
            'storeRoutePrefix': bundle.inputData?.[`${keyPrefix}storeRoutePrefix`],
            'publicKey': bundle.inputData?.[`${keyPrefix}publicKey`],
            'privateKey': bundle.inputData?.[`${keyPrefix}privateKey`],
            'authToken': bundle.inputData?.[`${keyPrefix}authToken`],
            'authTokenType': bundle.inputData?.[`${keyPrefix}authTokenType`],
            'authTokenExpiration': bundle.inputData?.[`${keyPrefix}authTokenExpiration`],
            'options': utils.removeIfEmpty(PortalOptions.mapping(bundle, `${keyPrefix}options`)),
        }
    },
}
