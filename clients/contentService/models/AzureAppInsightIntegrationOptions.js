const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableDiagnosticsTelemetryModule`,
                label: `[${labelPrefix}enableDiagnosticsTelemetryModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableAuthenticationTrackingJavaScript`,
                label: `[${labelPrefix}enableAuthenticationTrackingJavaScript]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableRequestTrackingTelemetryModule`,
                label: `[${labelPrefix}enableRequestTrackingTelemetryModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}injectResponseHeaders`,
                label: `[${labelPrefix}injectResponseHeaders]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}trackExceptions`,
                label: `[${labelPrefix}trackExceptions]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableW3CDistributedTracing`,
                label: `[${labelPrefix}enableW3CDistributedTracing]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}addAutoCollectedMetricExtractor`,
                label: `[${labelPrefix}addAutoCollectedMetricExtractor]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableHeartbeat`,
                label: `[${labelPrefix}enableHeartbeat]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableDebugLogger`,
                label: `[${labelPrefix}enableDebugLogger]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}endpointAddress`,
                label: `[${labelPrefix}endpointAddress]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}developerMode`,
                label: `[${labelPrefix}developerMode]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}applicationVersion`,
                label: `[${labelPrefix}applicationVersion]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}connectionString`,
                label: `[${labelPrefix}connectionString]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instrumentationKey`,
                label: `[${labelPrefix}instrumentationKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enableAdaptiveSampling`,
                label: `[${labelPrefix}enableAdaptiveSampling]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableEventCounterCollectionModule`,
                label: `[${labelPrefix}enableEventCounterCollectionModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableDependencyTrackingTelemetryModule`,
                label: `[${labelPrefix}enableDependencyTrackingTelemetryModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableAzureInstanceMetadataTelemetryModule`,
                label: `[${labelPrefix}enableAzureInstanceMetadataTelemetryModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableAppServicesHeartbeatTelemetryModule`,
                label: `[${labelPrefix}enableAppServicesHeartbeatTelemetryModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enablePerformanceCounterCollectionModule`,
                label: `[${labelPrefix}enablePerformanceCounterCollectionModule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableQuickPulseMetricStream`,
                label: `[${labelPrefix}enableQuickPulseMetricStream]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableLegacyCorrelationHeadersInjection`,
                label: `[${labelPrefix}enableLegacyCorrelationHeadersInjection]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableActiveTelemetryConfigurationSetup`,
                label: `[${labelPrefix}enableActiveTelemetryConfigurationSetup]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'enableDiagnosticsTelemetryModule': bundle.inputData?.[`${keyPrefix}enableDiagnosticsTelemetryModule`],
            'enableAuthenticationTrackingJavaScript': bundle.inputData?.[`${keyPrefix}enableAuthenticationTrackingJavaScript`],
            'enableRequestTrackingTelemetryModule': bundle.inputData?.[`${keyPrefix}enableRequestTrackingTelemetryModule`],
            'injectResponseHeaders': bundle.inputData?.[`${keyPrefix}injectResponseHeaders`],
            'trackExceptions': bundle.inputData?.[`${keyPrefix}trackExceptions`],
            'enableW3CDistributedTracing': bundle.inputData?.[`${keyPrefix}enableW3CDistributedTracing`],
            'addAutoCollectedMetricExtractor': bundle.inputData?.[`${keyPrefix}addAutoCollectedMetricExtractor`],
            'enableHeartbeat': bundle.inputData?.[`${keyPrefix}enableHeartbeat`],
            'enableDebugLogger': bundle.inputData?.[`${keyPrefix}enableDebugLogger`],
            'endpointAddress': bundle.inputData?.[`${keyPrefix}endpointAddress`],
            'developerMode': bundle.inputData?.[`${keyPrefix}developerMode`],
            'applicationVersion': bundle.inputData?.[`${keyPrefix}applicationVersion`],
            'connectionString': bundle.inputData?.[`${keyPrefix}connectionString`],
            'instrumentationKey': bundle.inputData?.[`${keyPrefix}instrumentationKey`],
            'enableAdaptiveSampling': bundle.inputData?.[`${keyPrefix}enableAdaptiveSampling`],
            'enableEventCounterCollectionModule': bundle.inputData?.[`${keyPrefix}enableEventCounterCollectionModule`],
            'enableDependencyTrackingTelemetryModule': bundle.inputData?.[`${keyPrefix}enableDependencyTrackingTelemetryModule`],
            'enableAzureInstanceMetadataTelemetryModule': bundle.inputData?.[`${keyPrefix}enableAzureInstanceMetadataTelemetryModule`],
            'enableAppServicesHeartbeatTelemetryModule': bundle.inputData?.[`${keyPrefix}enableAppServicesHeartbeatTelemetryModule`],
            'enablePerformanceCounterCollectionModule': bundle.inputData?.[`${keyPrefix}enablePerformanceCounterCollectionModule`],
            'enableQuickPulseMetricStream': bundle.inputData?.[`${keyPrefix}enableQuickPulseMetricStream`],
            'enableLegacyCorrelationHeadersInjection': bundle.inputData?.[`${keyPrefix}enableLegacyCorrelationHeadersInjection`],
            'enableActiveTelemetryConfigurationSetup': bundle.inputData?.[`${keyPrefix}enableActiveTelemetryConfigurationSetup`],
        }
    },
}
