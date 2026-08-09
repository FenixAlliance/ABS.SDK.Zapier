const utils = require('../utils/utils');
const TenantDto = require('../models/TenantDto');
const UserDto = require('../models/UserDto');

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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userId`,
                label: `[${labelPrefix}userId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isRoot`,
                label: `[${labelPrefix}isRoot]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isOwner`,
                label: `[${labelPrefix}isOwner]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isAdmin`,
                label: `[${labelPrefix}isAdmin]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDisabled`,
                label: `[${labelPrefix}isDisabled]`,
                type: 'boolean',
            },
            ...TenantDto.fields(`${keyPrefix}tenant`, isInput),
            ...UserDto.fields(`${keyPrefix}user`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'isRoot': bundle.inputData?.[`${keyPrefix}isRoot`],
            'isOwner': bundle.inputData?.[`${keyPrefix}isOwner`],
            'isAdmin': bundle.inputData?.[`${keyPrefix}isAdmin`],
            'isDisabled': bundle.inputData?.[`${keyPrefix}isDisabled`],
            'tenant': utils.removeIfEmpty(TenantDto.mapping(bundle, `${keyPrefix}tenant`)),
            'user': utils.removeIfEmpty(UserDto.mapping(bundle, `${keyPrefix}user`)),
        }
    },
}
