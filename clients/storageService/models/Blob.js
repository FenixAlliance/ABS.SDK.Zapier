const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}kind`,
                label: `[${labelPrefix}kind]`,
                type: 'string',
                choices: [
                    'File',
                    'Folder',
                ],
            },
            {
                key: `${keyPrefix}isFolder`,
                label: `[${labelPrefix}isFolder]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFile`,
                label: `[${labelPrefix}isFile]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}folderPath`,
                label: `[${labelPrefix}folderPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}size`,
                label: `[${labelPrefix}size]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}md5`,
                label: `[${labelPrefix}md5]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdTime`,
                label: `[${labelPrefix}createdTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastModificationTime`,
                label: `[${labelPrefix}lastModificationTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fullPath`,
                label: `[${labelPrefix}fullPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}properties`,
                label: `[${labelPrefix}properties]`,
                dict: true,
            },
            {
                key: `${keyPrefix}metadata`,
                label: `[${labelPrefix}metadata]`,
                type: 'object',
            },
            {
                key: `${keyPrefix}isRootFolder`,
                label: `[${labelPrefix}isRootFolder]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
            'isFolder': bundle.inputData?.[`${keyPrefix}isFolder`],
            'isFile': bundle.inputData?.[`${keyPrefix}isFile`],
            'folderPath': bundle.inputData?.[`${keyPrefix}folderPath`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'size': bundle.inputData?.[`${keyPrefix}size`],
            'md5': bundle.inputData?.[`${keyPrefix}md5`],
            'createdTime': bundle.inputData?.[`${keyPrefix}createdTime`],
            'lastModificationTime': bundle.inputData?.[`${keyPrefix}lastModificationTime`],
            'fullPath': bundle.inputData?.[`${keyPrefix}fullPath`],
            'properties': bundle.inputData?.[`${keyPrefix}properties`],
            'metadata': bundle.inputData?.[`${keyPrefix}metadata`],
            'isRootFolder': bundle.inputData?.[`${keyPrefix}isRootFolder`],
        }
    },
}
