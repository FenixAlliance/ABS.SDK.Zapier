const utils = require('../utils/utils');
const Margin = require('../models/Margin');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Margin.fields(`${keyPrefix}margin`, isInput),
            {
                key: `${keyPrefix}alignment`,
                label: `[${labelPrefix}alignment]`,
                type: 'string',
                choices: [
                    'Center',
                    'Right',
                    'Left',
                ],
            },
            {
                key: `${keyPrefix}width`,
                label: `[${labelPrefix}width]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}height`,
                label: `[${labelPrefix}height]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}maxWidth`,
                label: `[${labelPrefix}maxWidth]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}maxHeight`,
                label: `[${labelPrefix}maxHeight]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}customLinkURL`,
                label: `[${labelPrefix}customLinkURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backgroundColor`,
                label: `[${labelPrefix}backgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaltLogoURL`,
                label: `[${labelPrefix}defaltLogoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaltRetinaLogoURL`,
                label: `[${labelPrefix}defaltRetinaLogoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaltStickyLogoURL`,
                label: `[${labelPrefix}defaltStickyLogoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaltStickyRetinaLogoURL`,
                label: `[${labelPrefix}defaltStickyRetinaLogoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaltMobileLogoURL`,
                label: `[${labelPrefix}defaltMobileLogoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaltMobileRetinaLogoURL`,
                label: `[${labelPrefix}defaltMobileRetinaLogoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}footer`,
                label: `[${labelPrefix}footer]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}header`,
                label: `[${labelPrefix}header]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'margin': utils.removeIfEmpty(Margin.mapping(bundle, `${keyPrefix}margin`)),
            'alignment': bundle.inputData?.[`${keyPrefix}alignment`],
            'width': bundle.inputData?.[`${keyPrefix}width`],
            'height': bundle.inputData?.[`${keyPrefix}height`],
            'maxWidth': bundle.inputData?.[`${keyPrefix}maxWidth`],
            'maxHeight': bundle.inputData?.[`${keyPrefix}maxHeight`],
            'customLinkURL': bundle.inputData?.[`${keyPrefix}customLinkURL`],
            'backgroundColor': bundle.inputData?.[`${keyPrefix}backgroundColor`],
            'defaltLogoURL': bundle.inputData?.[`${keyPrefix}defaltLogoURL`],
            'defaltRetinaLogoURL': bundle.inputData?.[`${keyPrefix}defaltRetinaLogoURL`],
            'defaltStickyLogoURL': bundle.inputData?.[`${keyPrefix}defaltStickyLogoURL`],
            'defaltStickyRetinaLogoURL': bundle.inputData?.[`${keyPrefix}defaltStickyRetinaLogoURL`],
            'defaltMobileLogoURL': bundle.inputData?.[`${keyPrefix}defaltMobileLogoURL`],
            'defaltMobileRetinaLogoURL': bundle.inputData?.[`${keyPrefix}defaltMobileRetinaLogoURL`],
            'footer': bundle.inputData?.[`${keyPrefix}footer`],
            'header': bundle.inputData?.[`${keyPrefix}header`],
        }
    },
}
