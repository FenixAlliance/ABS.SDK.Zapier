const utils = require('../utils/utils');
const AppleIcons = require('../models/AppleIcons');
const DashboardOptions = require('../models/DashboardOptions');
const Favicons = require('../models/Favicons');
const Logo = require('../models/Logo');
const MSAppTile = require('../models/MSAppTile');
const StudioOptions = require('../models/StudioOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}defaultLang`,
                label: `[${labelPrefix}defaultLang]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}primaryColor`,
                label: `[${labelPrefix}primaryColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}secondaryColor`,
                label: `[${labelPrefix}secondaryColor]`,
                type: 'string',
            },
            ...Logo.fields(`${keyPrefix}headerLogo`, isInput),
            ...Logo.fields(`${keyPrefix}footerLogo`, isInput),
            ...Favicons.fields(`${keyPrefix}favicons`, isInput),
            ...AppleIcons.fields(`${keyPrefix}appleIcon`, isInput),
            ...MSAppTile.fields(`${keyPrefix}msAppTile`, isInput),
            ...DashboardOptions.fields(`${keyPrefix}dashboard`, isInput),
            ...StudioOptions.fields(`${keyPrefix}studio`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'defaultLang': bundle.inputData?.[`${keyPrefix}defaultLang`],
            'primaryColor': bundle.inputData?.[`${keyPrefix}primaryColor`],
            'secondaryColor': bundle.inputData?.[`${keyPrefix}secondaryColor`],
            'headerLogo': utils.removeIfEmpty(Logo.mapping(bundle, `${keyPrefix}headerLogo`)),
            'footerLogo': utils.removeIfEmpty(Logo.mapping(bundle, `${keyPrefix}footerLogo`)),
            'favicons': utils.removeIfEmpty(Favicons.mapping(bundle, `${keyPrefix}favicons`)),
            'appleIcon': utils.removeIfEmpty(AppleIcons.mapping(bundle, `${keyPrefix}appleIcon`)),
            'msAppTile': utils.removeIfEmpty(MSAppTile.mapping(bundle, `${keyPrefix}msAppTile`)),
            'dashboard': utils.removeIfEmpty(DashboardOptions.mapping(bundle, `${keyPrefix}dashboard`)),
            'studio': utils.removeIfEmpty(StudioOptions.mapping(bundle, `${keyPrefix}studio`)),
        }
    },
}
