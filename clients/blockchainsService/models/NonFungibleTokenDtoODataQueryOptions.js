const utils = require('../utils/utils');
const ApplyQueryOption = require('../models/ApplyQueryOption');
const ComputeQueryOption = require('../models/ComputeQueryOption');
const CountQueryOption = require('../models/CountQueryOption');
const FilterQueryOption = require('../models/FilterQueryOption');
const HttpRequest = require('../models/HttpRequest');
const NonFungibleTokenDtoETag = require('../models/NonFungibleTokenDtoETag');
const ODataQueryContext = require('../models/ODataQueryContext');
const ODataRawQueryOptions = require('../models/ODataRawQueryOptions');
const OrderByQueryOption = require('../models/OrderByQueryOption');
const SearchQueryOption = require('../models/SearchQueryOption');
const SelectExpandQueryOption = require('../models/SelectExpandQueryOption');
const SkipQueryOption = require('../models/SkipQueryOption');
const SkipTokenQueryOption = require('../models/SkipTokenQueryOption');
const TopQueryOption = require('../models/TopQueryOption');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...HttpRequest.fields(`${keyPrefix}request`, isInput),
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            ...ODataRawQueryOptions.fields(`${keyPrefix}rawValues`, isInput),
            ...SelectExpandQueryOption.fields(`${keyPrefix}selectExpand`, isInput),
            ...ApplyQueryOption.fields(`${keyPrefix}apply`, isInput),
            ...ComputeQueryOption.fields(`${keyPrefix}compute`, isInput),
            ...FilterQueryOption.fields(`${keyPrefix}filter`, isInput),
            ...SearchQueryOption.fields(`${keyPrefix}search`, isInput),
            ...OrderByQueryOption.fields(`${keyPrefix}orderBy`, isInput),
            ...SkipQueryOption.fields(`${keyPrefix}skip`, isInput),
            ...SkipTokenQueryOption.fields(`${keyPrefix}skipToken`, isInput),
            ...TopQueryOption.fields(`${keyPrefix}top`, isInput),
            ...CountQueryOption.fields(`${keyPrefix}count`, isInput),
            {
                key: `${keyPrefix}validator`,
                label: `[${labelPrefix}validator]`,
                dict: true,
            },
            ...NonFungibleTokenDtoETag.fields(`${keyPrefix}ifMatch`, isInput),
            ...NonFungibleTokenDtoETag.fields(`${keyPrefix}ifNoneMatch`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'request': utils.removeIfEmpty(HttpRequest.mapping(bundle, `${keyPrefix}request`)),
            'context': utils.removeIfEmpty(ODataQueryContext.mapping(bundle, `${keyPrefix}context`)),
            'rawValues': utils.removeIfEmpty(ODataRawQueryOptions.mapping(bundle, `${keyPrefix}rawValues`)),
            'selectExpand': utils.removeIfEmpty(SelectExpandQueryOption.mapping(bundle, `${keyPrefix}selectExpand`)),
            'apply': utils.removeIfEmpty(ApplyQueryOption.mapping(bundle, `${keyPrefix}apply`)),
            'compute': utils.removeIfEmpty(ComputeQueryOption.mapping(bundle, `${keyPrefix}compute`)),
            'filter': utils.removeIfEmpty(FilterQueryOption.mapping(bundle, `${keyPrefix}filter`)),
            'search': utils.removeIfEmpty(SearchQueryOption.mapping(bundle, `${keyPrefix}search`)),
            'orderBy': utils.removeIfEmpty(OrderByQueryOption.mapping(bundle, `${keyPrefix}orderBy`)),
            'skip': utils.removeIfEmpty(SkipQueryOption.mapping(bundle, `${keyPrefix}skip`)),
            'skipToken': utils.removeIfEmpty(SkipTokenQueryOption.mapping(bundle, `${keyPrefix}skipToken`)),
            'top': utils.removeIfEmpty(TopQueryOption.mapping(bundle, `${keyPrefix}top`)),
            'count': utils.removeIfEmpty(CountQueryOption.mapping(bundle, `${keyPrefix}count`)),
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
            'ifMatch': utils.removeIfEmpty(NonFungibleTokenDtoETag.mapping(bundle, `${keyPrefix}ifMatch`)),
            'ifNoneMatch': utils.removeIfEmpty(NonFungibleTokenDtoETag.mapping(bundle, `${keyPrefix}ifNoneMatch`)),
        }
    },
}
