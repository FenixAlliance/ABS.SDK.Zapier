const utils = require('../utils/utils');
const DefaultQueryConfigurations = require('../models/DefaultQueryConfigurations');
const IEdmModel = require('../models/IEdmModel');
const IEdmNavigationSource = require('../models/IEdmNavigationSource');
const IEdmType = require('../models/IEdmType');
const ODataPathSegment = require('../models/ODataPathSegment');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...DefaultQueryConfigurations.fields(`${keyPrefix}defaultQueryConfigurations`, isInput),
            ...IEdmModel.fields(`${keyPrefix}model`, isInput),
            ...IEdmType.fields(`${keyPrefix}elementType`, isInput),
            ...IEdmNavigationSource.fields(`${keyPrefix}navigationSource`, isInput),
            ...Type.fields(`${keyPrefix}elementClrType`, isInput),
            {
                key: `${keyPrefix}path`,
                label: `[${labelPrefix}path]`,
                children: ODataPathSegment.fields(`${keyPrefix}path${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}requestContainer`,
                label: `[${labelPrefix}requestContainer]`,
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'defaultQueryConfigurations': utils.removeIfEmpty(DefaultQueryConfigurations.mapping(bundle, `${keyPrefix}defaultQueryConfigurations`)),
            'model': utils.removeIfEmpty(IEdmModel.mapping(bundle, `${keyPrefix}model`)),
            'elementType': utils.removeIfEmpty(IEdmType.mapping(bundle, `${keyPrefix}elementType`)),
            'navigationSource': utils.removeIfEmpty(IEdmNavigationSource.mapping(bundle, `${keyPrefix}navigationSource`)),
            'elementClrType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}elementClrType`)),
            'path': utils.childMapping(bundle.inputData?.[`${keyPrefix}path`], `${keyPrefix}path`, ODataPathSegment),
            'requestContainer': bundle.inputData?.[`${keyPrefix}requestContainer`],
        }
    },
}
