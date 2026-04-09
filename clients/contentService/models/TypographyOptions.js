const utils = require('../utils/utils');
const CustomFont = require('../models/CustomFont');
const Typography = require('../models/Typography');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Typography.fields(`${keyPrefix}bodyTypography`, isInput),
            ...Typography.fields(`${keyPrefix}headersTypography`, isInput),
            {
                key: `${keyPrefix}customFonts`,
                label: `[${labelPrefix}customFonts]`,
                children: CustomFont.fields(`${keyPrefix}customFonts${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bodyTypography': utils.removeIfEmpty(Typography.mapping(bundle, `${keyPrefix}bodyTypography`)),
            'headersTypography': utils.removeIfEmpty(Typography.mapping(bundle, `${keyPrefix}headersTypography`)),
            'customFonts': utils.childMapping(bundle.inputData?.[`${keyPrefix}customFonts`], `${keyPrefix}customFonts`, CustomFont),
        }
    },
}
