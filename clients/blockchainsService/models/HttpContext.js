const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CancellationToken = require('../models/CancellationToken');
const ClaimsPrincipal = require('../models/ClaimsPrincipal');
const ConnectionInfo = require('../models/ConnectionInfo');
const HttpRequest = require('../models/HttpRequest');
const HttpResponse = require('../models/HttpResponse');
const ISession = require('../models/ISession');
const TypeObjectKeyValuePair = require('../models/TypeObjectKeyValuePair');
const WebSocketManager = require('../models/WebSocketManager');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}features`,
                label: `[${labelPrefix}features]`,
                children: TypeObjectKeyValuePair.fields(`${keyPrefix}features${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...HttpRequest.fields(`${keyPrefix}request`, isInput),
            ...HttpResponse.fields(`${keyPrefix}response`, isInput),
            ...ConnectionInfo.fields(`${keyPrefix}connection`, isInput),
            ...WebSocketManager.fields(`${keyPrefix}webSockets`, isInput),
            ...ClaimsPrincipal.fields(`${keyPrefix}user`, isInput),
            {
                key: `${keyPrefix}items`,
                label: `[${labelPrefix}items]`,
                dict: true,
            },
            {
                key: `${keyPrefix}requestServices`,
                label: `[${labelPrefix}requestServices]`,
                dict: true,
            },
            ...CancellationToken.fields(`${keyPrefix}requestAborted`, isInput),
            {
                key: `${keyPrefix}traceIdentifier`,
                label: `[${labelPrefix}traceIdentifier]`,
                type: 'string',
            },
            ...ISession.fields(`${keyPrefix}session`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'features': utils.childMapping(bundle.inputData?.[`${keyPrefix}features`], `${keyPrefix}features`, TypeObjectKeyValuePair),
            'request': utils.removeIfEmpty(HttpRequest.mapping(bundle, `${keyPrefix}request`)),
            'response': utils.removeIfEmpty(HttpResponse.mapping(bundle, `${keyPrefix}response`)),
            'connection': utils.removeIfEmpty(ConnectionInfo.mapping(bundle, `${keyPrefix}connection`)),
            'webSockets': utils.removeIfEmpty(WebSocketManager.mapping(bundle, `${keyPrefix}webSockets`)),
            'user': utils.removeIfEmpty(ClaimsPrincipal.mapping(bundle, `${keyPrefix}user`)),
            'items': bundle.inputData?.[`${keyPrefix}items`],
            'requestServices': bundle.inputData?.[`${keyPrefix}requestServices`],
            'requestAborted': utils.removeIfEmpty(CancellationToken.mapping(bundle, `${keyPrefix}requestAborted`)),
            'traceIdentifier': bundle.inputData?.[`${keyPrefix}traceIdentifier`],
            'session': utils.removeIfEmpty(ISession.mapping(bundle, `${keyPrefix}session`)),
        }
    },
}
