const utils = require('../utils/utils');
const Padding = require('../models/Padding');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Padding.fields(`${keyPrefix}headerPadding`, isInput),
            {
                key: `${keyPrefix}headerBackgroundImageURL`,
                label: `[${labelPrefix}headerBackgroundImageURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headerBackgroundColor`,
                label: `[${labelPrefix}headerBackgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headerBorderColor`,
                label: `[${labelPrefix}headerBorderColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enableStickyHeader`,
                label: `[${labelPrefix}enableStickyHeader]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableHeaderShadow`,
                label: `[${labelPrefix}enableHeaderShadow]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableFullWidthHeader`,
                label: `[${labelPrefix}enableFullWidthHeader]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}headerLayout`,
                label: `[${labelPrefix}headerLayout]`,
                type: 'string',
                choices: [
                    '_01',
                    '_02',
                    '_03',
                    '_04',
                    '_05',
                    '_06',
                ],
            },
            {
                key: `${keyPrefix}headerPosition`,
                label: `[${labelPrefix}headerPosition]`,
                type: 'string',
                choices: [
                    'Top',
                    'Right',
                    'Center',
                ],
            },
            {
                key: `${keyPrefix}topHeaderContentType2`,
                label: `[${labelPrefix}topHeaderContentType2]`,
                type: 'string',
                choices: [
                    'NavigationMenu',
                    'AccountMenu',
                    'ContactInfo',
                    'SocialLinks',
                    'LeaveEmpty',
                ],
            },
            {
                key: `${keyPrefix}topHeaderContentType1`,
                label: `[${labelPrefix}topHeaderContentType1]`,
                type: 'string',
                choices: [
                    'NavigationMenu',
                    'AccountMenu',
                    'ContactInfo',
                    'SocialLinks',
                    'LeaveEmpty',
                ],
            },
            {
                key: `${keyPrefix}topHeaderBackgroundColor`,
                label: `[${labelPrefix}topHeaderBackgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}topHeaderContent1`,
                label: `[${labelPrefix}topHeaderContent1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}topHeaderContent2`,
                label: `[${labelPrefix}topHeaderContent2]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'headerPadding': utils.removeIfEmpty(Padding.mapping(bundle, `${keyPrefix}headerPadding`)),
            'headerBackgroundImageURL': bundle.inputData?.[`${keyPrefix}headerBackgroundImageURL`],
            'headerBackgroundColor': bundle.inputData?.[`${keyPrefix}headerBackgroundColor`],
            'headerBorderColor': bundle.inputData?.[`${keyPrefix}headerBorderColor`],
            'enableStickyHeader': bundle.inputData?.[`${keyPrefix}enableStickyHeader`],
            'enableHeaderShadow': bundle.inputData?.[`${keyPrefix}enableHeaderShadow`],
            'enableFullWidthHeader': bundle.inputData?.[`${keyPrefix}enableFullWidthHeader`],
            'headerLayout': bundle.inputData?.[`${keyPrefix}headerLayout`],
            'headerPosition': bundle.inputData?.[`${keyPrefix}headerPosition`],
            'topHeaderContentType2': bundle.inputData?.[`${keyPrefix}topHeaderContentType2`],
            'topHeaderContentType1': bundle.inputData?.[`${keyPrefix}topHeaderContentType1`],
            'topHeaderBackgroundColor': bundle.inputData?.[`${keyPrefix}topHeaderBackgroundColor`],
            'topHeaderContent1': bundle.inputData?.[`${keyPrefix}topHeaderContent1`],
            'topHeaderContent2': bundle.inputData?.[`${keyPrefix}topHeaderContent2`],
        }
    },
}
