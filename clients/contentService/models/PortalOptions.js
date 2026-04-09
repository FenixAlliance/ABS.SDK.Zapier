const utils = require('../utils/utils');
const BackgroundOptions = require('../models/BackgroundOptions');
const BlogOptions = require('../models/BlogOptions');
const BrandingOptions = require('../models/BrandingOptions');
const BreadcrumbsOptions = require('../models/BreadcrumbsOptions');
const ColorOptions = require('../models/ColorOptions');
const ContactOptions = require('../models/ContactOptions');
const DashboardOptions = require('../models/DashboardOptions');
const EmailsOptions = require('../models/EmailsOptions');
const FooterOptions = require('../models/FooterOptions');
const ForumOptions = require('../models/ForumOptions');
const HeaderOptions = require('../models/HeaderOptions');
const IntegrationsOptions = require('../models/IntegrationsOptions');
const LayoutOptions = require('../models/LayoutOptions');
const MenuOptions = require('../models/MenuOptions');
const PrivacyOptions = require('../models/PrivacyOptions');
const ResponsiveOptions = require('../models/ResponsiveOptions');
const SeoOptions = require('../models/SeoOptions');
const SlidingBarOptions = require('../models/SlidingBarOptions');
const SocialMediaOptions = require('../models/SocialMediaOptions');
const StoreOptions = require('../models/StoreOptions');
const ThemingOptions = require('../models/ThemingOptions');
const TitleBarOptions = require('../models/TitleBarOptions');
const TypographyOptions = require('../models/TypographyOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portalUiEngine`,
                label: `[${labelPrefix}portalUiEngine]`,
                type: 'string',
                choices: [
                    'Angular',
                    'React',
                    'Razor',
                ],
            },
            ...SeoOptions.fields(`${keyPrefix}seo`, isInput),
            ...StoreOptions.fields(`${keyPrefix}store`, isInput),
            ...ThemingOptions.fields(`${keyPrefix}theming`, isInput),
            ...BrandingOptions.fields(`${keyPrefix}branding`, isInput),
            ...SocialMediaOptions.fields(`${keyPrefix}social`, isInput),
            ...PrivacyOptions.fields(`${keyPrefix}privacy`, isInput),
            ...BlogOptions.fields(`${keyPrefix}blog`, isInput),
            ...ForumOptions.fields(`${keyPrefix}forums`, isInput),
            ...FooterOptions.fields(`${keyPrefix}footer`, isInput),
            ...BackgroundOptions.fields(`${keyPrefix}background`, isInput),
            ...BreadcrumbsOptions.fields(`${keyPrefix}breadcrumbs`, isInput),
            ...ContactOptions.fields(`${keyPrefix}contact`, isInput),
            ...ColorOptions.fields(`${keyPrefix}color`, isInput),
            ...DashboardOptions.fields(`${keyPrefix}dashboard`, isInput),
            ...HeaderOptions.fields(`${keyPrefix}header`, isInput),
            ...TitleBarOptions.fields(`${keyPrefix}titleBar`, isInput),
            ...TypographyOptions.fields(`${keyPrefix}typography`, isInput),
            ...SocialMediaOptions.fields(`${keyPrefix}socialMedia`, isInput),
            ...SlidingBarOptions.fields(`${keyPrefix}slidingBar`, isInput),
            {
                key: `${keyPrefix}slideshow`,
                label: `[${labelPrefix}slideshow]`,
                dict: true,
            },
            {
                key: `${keyPrefix}slider`,
                label: `[${labelPrefix}slider]`,
                dict: true,
            },
            {
                key: `${keyPrefix}sidebar`,
                label: `[${labelPrefix}sidebar]`,
                dict: true,
            },
            {
                key: `${keyPrefix}search`,
                label: `[${labelPrefix}search]`,
                dict: true,
            },
            ...ResponsiveOptions.fields(`${keyPrefix}responsive`, isInput),
            {
                key: `${keyPrefix}portfolio`,
                label: `[${labelPrefix}portfolio]`,
                dict: true,
            },
            {
                key: `${keyPrefix}performance`,
                label: `[${labelPrefix}performance]`,
                dict: true,
            },
            {
                key: `${keyPrefix}pagination`,
                label: `[${labelPrefix}pagination]`,
                dict: true,
            },
            {
                key: `${keyPrefix}miscellaneous`,
                label: `[${labelPrefix}miscellaneous]`,
                dict: true,
            },
            ...MenuOptions.fields(`${keyPrefix}menu`, isInput),
            {
                key: `${keyPrefix}grid`,
                label: `[${labelPrefix}grid]`,
                dict: true,
            },
            {
                key: `${keyPrefix}mansory`,
                label: `[${labelPrefix}mansory]`,
                dict: true,
            },
            {
                key: `${keyPrefix}lightbox`,
                label: `[${labelPrefix}lightbox]`,
                dict: true,
            },
            ...LayoutOptions.fields(`${keyPrefix}layout`, isInput),
            {
                key: `${keyPrefix}codeFields`,
                label: `[${labelPrefix}codeFields]`,
                dict: true,
            },
            {
                key: `${keyPrefix}features`,
                label: `[${labelPrefix}features]`,
                dict: true,
            },
            {
                key: `${keyPrefix}forms`,
                label: `[${labelPrefix}forms]`,
                dict: true,
            },
            ...IntegrationsOptions.fields(`${keyPrefix}integrations`, isInput),
            ...EmailsOptions.fields(`${keyPrefix}emails`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'portalUiEngine': bundle.inputData?.[`${keyPrefix}portalUiEngine`],
            'seo': utils.removeIfEmpty(SeoOptions.mapping(bundle, `${keyPrefix}seo`)),
            'store': utils.removeIfEmpty(StoreOptions.mapping(bundle, `${keyPrefix}store`)),
            'theming': utils.removeIfEmpty(ThemingOptions.mapping(bundle, `${keyPrefix}theming`)),
            'branding': utils.removeIfEmpty(BrandingOptions.mapping(bundle, `${keyPrefix}branding`)),
            'social': utils.removeIfEmpty(SocialMediaOptions.mapping(bundle, `${keyPrefix}social`)),
            'privacy': utils.removeIfEmpty(PrivacyOptions.mapping(bundle, `${keyPrefix}privacy`)),
            'blog': utils.removeIfEmpty(BlogOptions.mapping(bundle, `${keyPrefix}blog`)),
            'forums': utils.removeIfEmpty(ForumOptions.mapping(bundle, `${keyPrefix}forums`)),
            'footer': utils.removeIfEmpty(FooterOptions.mapping(bundle, `${keyPrefix}footer`)),
            'background': utils.removeIfEmpty(BackgroundOptions.mapping(bundle, `${keyPrefix}background`)),
            'breadcrumbs': utils.removeIfEmpty(BreadcrumbsOptions.mapping(bundle, `${keyPrefix}breadcrumbs`)),
            'contact': utils.removeIfEmpty(ContactOptions.mapping(bundle, `${keyPrefix}contact`)),
            'color': utils.removeIfEmpty(ColorOptions.mapping(bundle, `${keyPrefix}color`)),
            'dashboard': utils.removeIfEmpty(DashboardOptions.mapping(bundle, `${keyPrefix}dashboard`)),
            'header': utils.removeIfEmpty(HeaderOptions.mapping(bundle, `${keyPrefix}header`)),
            'titleBar': utils.removeIfEmpty(TitleBarOptions.mapping(bundle, `${keyPrefix}titleBar`)),
            'typography': utils.removeIfEmpty(TypographyOptions.mapping(bundle, `${keyPrefix}typography`)),
            'socialMedia': utils.removeIfEmpty(SocialMediaOptions.mapping(bundle, `${keyPrefix}socialMedia`)),
            'slidingBar': utils.removeIfEmpty(SlidingBarOptions.mapping(bundle, `${keyPrefix}slidingBar`)),
            'slideshow': bundle.inputData?.[`${keyPrefix}slideshow`],
            'slider': bundle.inputData?.[`${keyPrefix}slider`],
            'sidebar': bundle.inputData?.[`${keyPrefix}sidebar`],
            'search': bundle.inputData?.[`${keyPrefix}search`],
            'responsive': utils.removeIfEmpty(ResponsiveOptions.mapping(bundle, `${keyPrefix}responsive`)),
            'portfolio': bundle.inputData?.[`${keyPrefix}portfolio`],
            'performance': bundle.inputData?.[`${keyPrefix}performance`],
            'pagination': bundle.inputData?.[`${keyPrefix}pagination`],
            'miscellaneous': bundle.inputData?.[`${keyPrefix}miscellaneous`],
            'menu': utils.removeIfEmpty(MenuOptions.mapping(bundle, `${keyPrefix}menu`)),
            'grid': bundle.inputData?.[`${keyPrefix}grid`],
            'mansory': bundle.inputData?.[`${keyPrefix}mansory`],
            'lightbox': bundle.inputData?.[`${keyPrefix}lightbox`],
            'layout': utils.removeIfEmpty(LayoutOptions.mapping(bundle, `${keyPrefix}layout`)),
            'codeFields': bundle.inputData?.[`${keyPrefix}codeFields`],
            'features': bundle.inputData?.[`${keyPrefix}features`],
            'forms': bundle.inputData?.[`${keyPrefix}forms`],
            'integrations': utils.removeIfEmpty(IntegrationsOptions.mapping(bundle, `${keyPrefix}integrations`)),
            'emails': utils.removeIfEmpty(EmailsOptions.mapping(bundle, `${keyPrefix}emails`)),
        }
    },
}
