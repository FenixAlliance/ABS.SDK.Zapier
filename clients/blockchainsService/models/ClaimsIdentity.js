const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const Claim = require('../models/Claim');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}authenticationType`,
                label: `[${labelPrefix}authenticationType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isAuthenticated`,
                label: `[${labelPrefix}isAuthenticated]`,
                type: 'boolean',
            },
            ...ClaimsIdentity.fields(`${keyPrefix}actor`, isInput),
            ....fields(`${keyPrefix}bootstrapContext`, isInput),
            {
                key: `${keyPrefix}claims`,
                label: `[${labelPrefix}claims]`,
                children: Claim.fields(`${keyPrefix}claims${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nameClaimType`,
                label: `[${labelPrefix}nameClaimType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}roleClaimType`,
                label: `[${labelPrefix}roleClaimType]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'authenticationType': bundle.inputData?.[`${keyPrefix}authenticationType`],
            'isAuthenticated': bundle.inputData?.[`${keyPrefix}isAuthenticated`],
            'actor': utils.removeIfEmpty(ClaimsIdentity.mapping(bundle, `${keyPrefix}actor`)),
            'bootstrapContext': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}bootstrapContext`)),
            'claims': utils.childMapping(bundle.inputData?.[`${keyPrefix}claims`], `${keyPrefix}claims`, Claim),
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'nameClaimType': bundle.inputData?.[`${keyPrefix}nameClaimType`],
            'roleClaimType': bundle.inputData?.[`${keyPrefix}roleClaimType`],
        }
    },
}
