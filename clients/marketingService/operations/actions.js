const EmailGroupsApi = require('../apis/EmailGroupsApi');
const EmailSignaturesApi = require('../apis/EmailSignaturesApi');
const EmailTemplatesApi = require('../apis/EmailTemplatesApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const MarketingCampaignsApi = require('../apis/MarketingCampaignsApi');
const MarketingListsApi = require('../apis/MarketingListsApi');
const NewslettersApi = require('../apis/NewslettersApi');
const SocialMediaPostsApi = require('../apis/SocialMediaPostsApi');
const SocialPostBucketsApi = require('../apis/SocialPostBucketsApi');
const TrackingPixelsApi = require('../apis/TrackingPixelsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [EmailGroupsApi.createEmailGroupAsync.key]: EmailGroupsApi.createEmailGroupAsync,
    [EmailGroupsApi.deleteEmailGroupAsync.key]: EmailGroupsApi.deleteEmailGroupAsync,
    [EmailGroupsApi.getEmailGroupDetailsAsync.key]: EmailGroupsApi.getEmailGroupDetailsAsync,
    [EmailGroupsApi.getEmailGroupsCountAsync.key]: EmailGroupsApi.getEmailGroupsCountAsync,
    [EmailGroupsApi.getEmailGroupsODataAsync.key]: EmailGroupsApi.getEmailGroupsODataAsync,
    [EmailGroupsApi.updateEmailGroupAsync.key]: EmailGroupsApi.updateEmailGroupAsync,
    [EmailSignaturesApi.createEmailSignatureAsync.key]: EmailSignaturesApi.createEmailSignatureAsync,
    [EmailSignaturesApi.deleteEmailSignatureAsync.key]: EmailSignaturesApi.deleteEmailSignatureAsync,
    [EmailSignaturesApi.getEmailSignatureDetailsAsync.key]: EmailSignaturesApi.getEmailSignatureDetailsAsync,
    [EmailSignaturesApi.getEmailSignaturesCountAsync.key]: EmailSignaturesApi.getEmailSignaturesCountAsync,
    [EmailSignaturesApi.getEmailSignaturesODataAsync.key]: EmailSignaturesApi.getEmailSignaturesODataAsync,
    [EmailSignaturesApi.updateEmailSignatureAsync.key]: EmailSignaturesApi.updateEmailSignatureAsync,
    [EmailTemplatesApi.createEmailTemplateAsync.key]: EmailTemplatesApi.createEmailTemplateAsync,
    [EmailTemplatesApi.deleteEmailTemplateAsync.key]: EmailTemplatesApi.deleteEmailTemplateAsync,
    [EmailTemplatesApi.getEmailTemplateDetailsAsync.key]: EmailTemplatesApi.getEmailTemplateDetailsAsync,
    [EmailTemplatesApi.getEmailTemplatesCountAsync.key]: EmailTemplatesApi.getEmailTemplatesCountAsync,
    [EmailTemplatesApi.getEmailTemplatesODataAsync.key]: EmailTemplatesApi.getEmailTemplatesODataAsync,
    [EmailTemplatesApi.updateEmailTemplateAsync.key]: EmailTemplatesApi.updateEmailTemplateAsync,
    [FenixAllianceABPWebApi.forgotPasswordPost.key]: FenixAllianceABPWebApi.forgotPasswordPost,
    [FenixAllianceABPWebApi.healthGet.key]: FenixAllianceABPWebApi.healthGet,
    [FenixAllianceABPWebApi.helloGet.key]: FenixAllianceABPWebApi.helloGet,
    [FenixAllianceABPWebApi.loginPost.key]: FenixAllianceABPWebApi.loginPost,
    [FenixAllianceABPWebApi.manage2faPost.key]: FenixAllianceABPWebApi.manage2faPost,
    [FenixAllianceABPWebApi.manageInfoGet.key]: FenixAllianceABPWebApi.manageInfoGet,
    [FenixAllianceABPWebApi.manageInfoPost.key]: FenixAllianceABPWebApi.manageInfoPost,
    [FenixAllianceABPWebApi.mapIdentityApi/confirmEmail.key]: FenixAllianceABPWebApi.mapIdentityApi/confirmEmail,
    [FenixAllianceABPWebApi.refreshPost.key]: FenixAllianceABPWebApi.refreshPost,
    [FenixAllianceABPWebApi.registerPost.key]: FenixAllianceABPWebApi.registerPost,
    [FenixAllianceABPWebApi.resendConfirmationEmailPost.key]: FenixAllianceABPWebApi.resendConfirmationEmailPost,
    [FenixAllianceABPWebApi.resetPasswordPost.key]: FenixAllianceABPWebApi.resetPasswordPost,
    [FenixAllianceABPWebApi.versionGet.key]: FenixAllianceABPWebApi.versionGet,
    [MarketingCampaignsApi.createMarketingCampaignAsync.key]: MarketingCampaignsApi.createMarketingCampaignAsync,
    [MarketingCampaignsApi.deleteMarketingCampaignAsync.key]: MarketingCampaignsApi.deleteMarketingCampaignAsync,
    [MarketingCampaignsApi.getMarketingCampaignDetailsAsync.key]: MarketingCampaignsApi.getMarketingCampaignDetailsAsync,
    [MarketingCampaignsApi.getMarketingCampaignODataAsync.key]: MarketingCampaignsApi.getMarketingCampaignODataAsync,
    [MarketingCampaignsApi.getMarketingCampaignsCountAsync.key]: MarketingCampaignsApi.getMarketingCampaignsCountAsync,
    [MarketingCampaignsApi.updateMarketingCampaignAsync.key]: MarketingCampaignsApi.updateMarketingCampaignAsync,
    [MarketingListsApi.createMarketingListAsync.key]: MarketingListsApi.createMarketingListAsync,
    [MarketingListsApi.deleteMarketingListAsync.key]: MarketingListsApi.deleteMarketingListAsync,
    [MarketingListsApi.getMarketingListDetailsAsync.key]: MarketingListsApi.getMarketingListDetailsAsync,
    [MarketingListsApi.getMarketingListODataAsync.key]: MarketingListsApi.getMarketingListODataAsync,
    [MarketingListsApi.getMarketingListsCountAsync.key]: MarketingListsApi.getMarketingListsCountAsync,
    [MarketingListsApi.updateMarketingListAsync.key]: MarketingListsApi.updateMarketingListAsync,
    [NewslettersApi.createNewsletterAsync.key]: NewslettersApi.createNewsletterAsync,
    [NewslettersApi.deleteNewsletterAsync.key]: NewslettersApi.deleteNewsletterAsync,
    [NewslettersApi.getNewsletterDetailsAsync.key]: NewslettersApi.getNewsletterDetailsAsync,
    [NewslettersApi.getNewsletterODataAsync.key]: NewslettersApi.getNewsletterODataAsync,
    [NewslettersApi.getNewslettersCountAsync.key]: NewslettersApi.getNewslettersCountAsync,
    [NewslettersApi.updateNewsletterAsync.key]: NewslettersApi.updateNewsletterAsync,
    [SocialMediaPostsApi.createSocialMediaPostAsync.key]: SocialMediaPostsApi.createSocialMediaPostAsync,
    [SocialMediaPostsApi.deleteSocialMediaPostAsync.key]: SocialMediaPostsApi.deleteSocialMediaPostAsync,
    [SocialMediaPostsApi.getSocialMediaPostDetailsAsync.key]: SocialMediaPostsApi.getSocialMediaPostDetailsAsync,
    [SocialMediaPostsApi.getSocialMediaPostsCountAsync.key]: SocialMediaPostsApi.getSocialMediaPostsCountAsync,
    [SocialMediaPostsApi.getSocialMediaPostsODataAsync.key]: SocialMediaPostsApi.getSocialMediaPostsODataAsync,
    [SocialMediaPostsApi.updateSocialMediaPostAsync.key]: SocialMediaPostsApi.updateSocialMediaPostAsync,
    [SocialPostBucketsApi.createSocialPostBucketAsync.key]: SocialPostBucketsApi.createSocialPostBucketAsync,
    [SocialPostBucketsApi.deleteSocialPostBucketAsync.key]: SocialPostBucketsApi.deleteSocialPostBucketAsync,
    [SocialPostBucketsApi.getSocialPostBucketDetailsAsync.key]: SocialPostBucketsApi.getSocialPostBucketDetailsAsync,
    [SocialPostBucketsApi.getSocialPostBucketsCountAsync.key]: SocialPostBucketsApi.getSocialPostBucketsCountAsync,
    [SocialPostBucketsApi.getSocialPostBucketsODataAsync.key]: SocialPostBucketsApi.getSocialPostBucketsODataAsync,
    [SocialPostBucketsApi.updateSocialPostBucketAsync.key]: SocialPostBucketsApi.updateSocialPostBucketAsync,
    [TrackingPixelsApi.getTrackingPixelAsync.key]: TrackingPixelsApi.getTrackingPixelAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
