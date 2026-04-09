const utils = require('../utils/utils');
const ContactPoint = require('../models/ContactPoint');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}legalName`,
                label: `[${labelPrefix}legalName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessName`,
                label: `[${labelPrefix}businessName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}slogan`,
                label: `[${labelPrefix}slogan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}homepage`,
                label: `[${labelPrefix}homepage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facebookPageUsername`,
                label: `[${labelPrefix}facebookPageUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instagramUsername`,
                label: `[${labelPrefix}instagramUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}linkedInUsername`,
                label: `[${labelPrefix}linkedInUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterHandler`,
                label: `[${labelPrefix}twitterHandler]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gitHubUsername`,
                label: `[${labelPrefix}gitHubUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactPoints`,
                label: `[${labelPrefix}contactPoints]`,
                children: ContactPoint.fields(`${keyPrefix}contactPoints${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'legalName': bundle.inputData?.[`${keyPrefix}legalName`],
            'businessName': bundle.inputData?.[`${keyPrefix}businessName`],
            'slogan': bundle.inputData?.[`${keyPrefix}slogan`],
            'homepage': bundle.inputData?.[`${keyPrefix}homepage`],
            'facebookPageUsername': bundle.inputData?.[`${keyPrefix}facebookPageUsername`],
            'instagramUsername': bundle.inputData?.[`${keyPrefix}instagramUsername`],
            'linkedInUsername': bundle.inputData?.[`${keyPrefix}linkedInUsername`],
            'twitterHandler': bundle.inputData?.[`${keyPrefix}twitterHandler`],
            'gitHubUsername': bundle.inputData?.[`${keyPrefix}gitHubUsername`],
            'contactPoints': utils.childMapping(bundle.inputData?.[`${keyPrefix}contactPoints`], `${keyPrefix}contactPoints`, ContactPoint),
        }
    },
}
