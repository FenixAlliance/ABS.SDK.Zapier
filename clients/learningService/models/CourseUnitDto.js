const utils = require('../utils/utils');
const CourseAssignmentDto = require('../models/CourseAssignmentDto');
const CourseHandoutDto = require('../models/CourseHandoutDto');
const CourseUnitComponentDto = require('../models/CourseUnitComponentDto');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
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
                key: `${keyPrefix}releaseDateTime`,
                label: `[${labelPrefix}releaseDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}content`,
                label: `[${labelPrefix}content]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseSectionId`,
                label: `[${labelPrefix}courseSectionId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseContentGroupId`,
                label: `[${labelPrefix}courseContentGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseHandouts`,
                label: `[${labelPrefix}courseHandouts]`,
                children: CourseHandoutDto.fields(`${keyPrefix}courseHandouts${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}courseAssignments`,
                label: `[${labelPrefix}courseAssignments]`,
                children: CourseAssignmentDto.fields(`${keyPrefix}courseAssignments${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}courseComponents`,
                label: `[${labelPrefix}courseComponents]`,
                children: CourseUnitComponentDto.fields(`${keyPrefix}courseComponents${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'releaseDateTime': bundle.inputData?.[`${keyPrefix}releaseDateTime`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'courseSectionId': bundle.inputData?.[`${keyPrefix}courseSectionId`],
            'courseContentGroupId': bundle.inputData?.[`${keyPrefix}courseContentGroupId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'courseHandouts': utils.childMapping(bundle.inputData?.[`${keyPrefix}courseHandouts`], `${keyPrefix}courseHandouts`, CourseHandoutDto),
            'courseAssignments': utils.childMapping(bundle.inputData?.[`${keyPrefix}courseAssignments`], `${keyPrefix}courseAssignments`, CourseAssignmentDto),
            'courseComponents': utils.childMapping(bundle.inputData?.[`${keyPrefix}courseComponents`], `${keyPrefix}courseComponents`, CourseUnitComponentDto),
        }
    },
}
