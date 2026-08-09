const utils = require('../utils/utils');
const SecurityPermissionDto = require('../models/SecurityPermissionDto');
const SecurityRoleDto = require('../models/SecurityRoleDto');
const TenantEnrollmentDto = require('../models/TenantEnrollmentDto');
const UserExternalLoginDto = require('../models/UserExternalLoginDto');
const UserOrderSummaryDto = require('../models/UserOrderSummaryDto');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}orders`,
                label: `[${labelPrefix}orders]`,
                children: UserOrderSummaryDto.fields(`${keyPrefix}orders${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}logins`,
                label: `[${labelPrefix}logins]`,
                children: UserExternalLoginDto.fields(`${keyPrefix}logins${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...TenantEnrollmentDto.fields(`${keyPrefix}enrollment`, isInput),
            {
                key: `${keyPrefix}grantedRoles`,
                label: `[${labelPrefix}grantedRoles]`,
                children: SecurityRoleDto.fields(`${keyPrefix}grantedRoles${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}grantedPermissions`,
                label: `[${labelPrefix}grantedPermissions]`,
                children: SecurityPermissionDto.fields(`${keyPrefix}grantedPermissions${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}roleCatalog`,
                label: `[${labelPrefix}roleCatalog]`,
                children: SecurityRoleDto.fields(`${keyPrefix}roleCatalog${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}permissionCatalog`,
                label: `[${labelPrefix}permissionCatalog]`,
                children: SecurityPermissionDto.fields(`${keyPrefix}permissionCatalog${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'orders': utils.childMapping(bundle.inputData?.[`${keyPrefix}orders`], `${keyPrefix}orders`, UserOrderSummaryDto),
            'logins': utils.childMapping(bundle.inputData?.[`${keyPrefix}logins`], `${keyPrefix}logins`, UserExternalLoginDto),
            'enrollment': utils.removeIfEmpty(TenantEnrollmentDto.mapping(bundle, `${keyPrefix}enrollment`)),
            'grantedRoles': utils.childMapping(bundle.inputData?.[`${keyPrefix}grantedRoles`], `${keyPrefix}grantedRoles`, SecurityRoleDto),
            'grantedPermissions': utils.childMapping(bundle.inputData?.[`${keyPrefix}grantedPermissions`], `${keyPrefix}grantedPermissions`, SecurityPermissionDto),
            'roleCatalog': utils.childMapping(bundle.inputData?.[`${keyPrefix}roleCatalog`], `${keyPrefix}roleCatalog`, SecurityRoleDto),
            'permissionCatalog': utils.childMapping(bundle.inputData?.[`${keyPrefix}permissionCatalog`], `${keyPrefix}permissionCatalog`, SecurityPermissionDto),
        }
    },
}
