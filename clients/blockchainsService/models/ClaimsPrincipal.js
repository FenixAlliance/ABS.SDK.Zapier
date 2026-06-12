const utils = require('../utils/utils');
const Claim = require('../models/Claim');
const ClaimsIdentity = require('../models/ClaimsIdentity');
const IIdentity = require('../models/IIdentity');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}claims`,
                label: `[${labelPrefix}claims]`,
                children: Claim.fields(`${keyPrefix}claims${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}identities`,
                label: `[${labelPrefix}identities]`,
                children: ClaimsIdentity.fields(`${keyPrefix}identities${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...IIdentity.fields(`${keyPrefix}identity`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'claims': utils.childMapping(bundle.inputData?.[`${keyPrefix}claims`], `${keyPrefix}claims`, Claim),
            'identities': utils.childMapping(bundle.inputData?.[`${keyPrefix}identities`], `${keyPrefix}identities`, ClaimsIdentity),
            'identity': utils.removeIfEmpty(IIdentity.mapping(bundle, `${keyPrefix}identity`)),
        }
    },
}
