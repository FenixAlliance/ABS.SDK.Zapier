const utils = require('../utils/utils');
const ContactDto = require('../models/ContactDto');
const TenantDto = require('../models/TenantDto');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}ownerTenantId`,
                label: `[${labelPrefix}ownerTenantId]`,
                dict: true,
            },
            ...TenantDto.fields(`${keyPrefix}ownerTenant`, isInput),
            {
                key: `${keyPrefix}userContactId`,
                label: `[${labelPrefix}userContactId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}tenantContactId`,
                label: `[${labelPrefix}tenantContactId]`,
                dict: true,
            },
            ...ContactDto.fields(`${keyPrefix}userContact`, isInput),
            ...ContactDto.fields(`${keyPrefix}tenantContact`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'ownerTenantId': bundle.inputData?.[`${keyPrefix}ownerTenantId`],
            'ownerTenant': utils.removeIfEmpty(TenantDto.mapping(bundle, `${keyPrefix}ownerTenant`)),
            'userContactId': bundle.inputData?.[`${keyPrefix}userContactId`],
            'tenantContactId': bundle.inputData?.[`${keyPrefix}tenantContactId`],
            'userContact': utils.removeIfEmpty(ContactDto.mapping(bundle, `${keyPrefix}userContact`)),
            'tenantContact': utils.removeIfEmpty(ContactDto.mapping(bundle, `${keyPrefix}tenantContact`)),
        }
    },
}
