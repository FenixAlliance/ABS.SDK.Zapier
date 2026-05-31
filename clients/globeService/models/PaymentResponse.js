const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}test`,
                label: `[${labelPrefix}test]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}ip`,
                label: `[${labelPrefix}ip]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bank`,
                label: `[${labelPrefix}bank]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}errors`, isInput),
            {
                key: `${keyPrefix}response`,
                label: `[${labelPrefix}response]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authCode`,
                label: `[${labelPrefix}authCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentID`,
                label: `[${labelPrefix}paymentID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}franchise`,
                label: `[${labelPrefix}franchise]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signature`,
                label: `[${labelPrefix}signature]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentStatus`,
                label: `[${labelPrefix}paymentStatus]`,
                type: 'string',
                choices: [
                    'Unset',
                    'Accepted',
                    'Rejected',
                    'OnHold',
                    'Failed',
                    'Reversed',
                    'Retained',
                    'Initialized',
                    'Expired',
                    'Abandoned',
                    'Cancelled',
                    'AcceptedRetained',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'test': bundle.inputData?.[`${keyPrefix}test`],
            'ip': bundle.inputData?.[`${keyPrefix}ip`],
            'bank': bundle.inputData?.[`${keyPrefix}bank`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'errors': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}errors`)),
            'response': bundle.inputData?.[`${keyPrefix}response`],
            'authCode': bundle.inputData?.[`${keyPrefix}authCode`],
            'paymentID': bundle.inputData?.[`${keyPrefix}paymentID`],
            'franchise': bundle.inputData?.[`${keyPrefix}franchise`],
            'signature': bundle.inputData?.[`${keyPrefix}signature`],
            'paymentStatus': bundle.inputData?.[`${keyPrefix}paymentStatus`],
        }
    },
}
