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
                key: `${keyPrefix}applicationType`,
                label: `[${labelPrefix}applicationType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}clientId`,
                label: `[${labelPrefix}clientId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}concurrencyToken`,
                label: `[${labelPrefix}concurrencyToken]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}consentType`,
                label: `[${labelPrefix}consentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayNames`,
                label: `[${labelPrefix}displayNames]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}permissions`,
                label: `[${labelPrefix}permissions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postLogoutRedirectUris`,
                label: `[${labelPrefix}postLogoutRedirectUris]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}properties`,
                label: `[${labelPrefix}properties]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirectUris`,
                label: `[${labelPrefix}redirectUris]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requirements`,
                label: `[${labelPrefix}requirements]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}settings`,
                label: `[${labelPrefix}settings]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessApplicationID`,
                label: `[${labelPrefix}businessApplicationID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authorizationsCount`,
                label: `[${labelPrefix}authorizationsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}tokensCount`,
                label: `[${labelPrefix}tokensCount]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'applicationType': bundle.inputData?.[`${keyPrefix}applicationType`],
            'clientId': bundle.inputData?.[`${keyPrefix}clientId`],
            'concurrencyToken': bundle.inputData?.[`${keyPrefix}concurrencyToken`],
            'consentType': bundle.inputData?.[`${keyPrefix}consentType`],
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'displayNames': bundle.inputData?.[`${keyPrefix}displayNames`],
            'permissions': bundle.inputData?.[`${keyPrefix}permissions`],
            'postLogoutRedirectUris': bundle.inputData?.[`${keyPrefix}postLogoutRedirectUris`],
            'properties': bundle.inputData?.[`${keyPrefix}properties`],
            'redirectUris': bundle.inputData?.[`${keyPrefix}redirectUris`],
            'requirements': bundle.inputData?.[`${keyPrefix}requirements`],
            'settings': bundle.inputData?.[`${keyPrefix}settings`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'businessApplicationID': bundle.inputData?.[`${keyPrefix}businessApplicationID`],
            'authorizationsCount': bundle.inputData?.[`${keyPrefix}authorizationsCount`],
            'tokensCount': bundle.inputData?.[`${keyPrefix}tokensCount`],
        }
    },
}
