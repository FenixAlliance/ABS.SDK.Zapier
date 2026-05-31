const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}expressionKind`,
                label: `[${labelPrefix}expressionKind]`,
                type: 'string',
                choices: [
                    'None',
                    'BinaryConstant',
                    'BooleanConstant',
                    'DateTimeOffsetConstant',
                    'DecimalConstant',
                    'FloatingConstant',
                    'GuidConstant',
                    'IntegerConstant',
                    'StringConstant',
                    'DurationConstant',
                    'Record',
                    'Collection',
                    'Path',
                    'If',
                    'Cast',
                    'IsOf',
                    'FunctionApplication',
                    'LabeledExpressionReference',
                    'Labeled',
                    'PropertyPath',
                    'NavigationPropertyPath',
                    'DateConstant',
                    'TimeOfDayConstant',
                    'EnumMember',
                    'AnnotationPath',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'expressionKind': bundle.inputData?.[`${keyPrefix}expressionKind`],
        }
    },
}
