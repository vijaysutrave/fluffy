(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8,36],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/extractors/index.js
var extractors = __webpack_require__(987);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromObject.js
function extractInlineViewPropsFromObject(json) {
    if (!json || typeof json !== 'object') {
        throw new Error('smart-card: data is not parsable JSON-LD.');
    }
    var props = {
        title: typeof json.name === 'string' ? json.name : '',
    };
    if (json.generator && json.generator.icon) {
        props.icon =
            json.generator.icon && json.generator.icon.url
                ? json.generator.icon.url
                : json.generator.icon;
    }
    if (json.url) {
        props.link = String(json.url);
    }
    return props;
}
//# sourceMappingURL=extractPropsFromObject.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/task/16.js
var _16 = __webpack_require__(988);
var _16_default = /*#__PURE__*/__webpack_require__.n(_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/subtask/16.js
var subtask_16 = __webpack_require__(1031);
var subtask_16_default = /*#__PURE__*/__webpack_require__.n(subtask_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/story/16.js
var story_16 = __webpack_require__(1032);
var story_16_default = /*#__PURE__*/__webpack_require__.n(story_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/bug/16.js
var bug_16 = __webpack_require__(1033);
var bug_16_default = /*#__PURE__*/__webpack_require__.n(bug_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/epic/16.js
var epic_16 = __webpack_require__(1034);
var epic_16_default = /*#__PURE__*/__webpack_require__.n(epic_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/incident/16.js
var incident_16 = __webpack_require__(1035);
var incident_16_default = /*#__PURE__*/__webpack_require__.n(incident_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/issue/16.js
var issue_16 = __webpack_require__(1036);
var issue_16_default = /*#__PURE__*/__webpack_require__.n(issue_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/changes/16.js
var changes_16 = __webpack_require__(1037);
var changes_16_default = /*#__PURE__*/__webpack_require__.n(changes_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/problem/16.js
var problem_16 = __webpack_require__(1038);
var problem_16_default = /*#__PURE__*/__webpack_require__.n(problem_16);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/constants.js
var CONFLUENCE_GENERATOR_ID = 'https://www.atlassian.com/#Confluence';
var JIRA_GENERATOR_ID = 'https://www.atlassian.com/#Jira';
// To support icons for all Jira task types.
var JIRA_TASK = 'JiraTask';
var JIRA_SUB_TASK = 'JiraSubTask';
var JIRA_STORY = 'JiraStory';
var JIRA_BUG = 'JiraBug';
var JIRA_EPIC = 'JiraEpic';
var JIRA_INCIDENT = 'JiraIncident';
var JIRA_SERVICE_REQUEST = 'JiraServiceRequest';
var JIRA_CHANGE = 'JiraChange';
var JIRA_PROBLEM = 'JiraProblem';
var JIRA_CUSTOM_TASK_TYPE = 'JiraCustomTaskType';
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromTask.js














var buildInlineTaskIcon = function (json) {
    // Render Atlaskit icons for all supported Jira issue types.
    var taskType = json['atlassian:taskType'] || json.taskType;
    if (json.generator &&
        json.generator['@id'] === JIRA_GENERATOR_ID &&
        taskType &&
        taskType['@id']) {
        var taskTypeId = taskType['@id'];
        var taskTypeName = taskTypeId.split('#').pop();
        var taskLabel = json.name || '';
        switch (taskTypeName) {
            case JIRA_TASK:
                return { icon: react["createElement"](_16_default.a, { label: taskLabel }) };
            case JIRA_SUB_TASK:
                return { icon: react["createElement"](subtask_16_default.a, { label: taskLabel }) };
            case JIRA_STORY:
                return { icon: react["createElement"](story_16_default.a, { label: taskLabel }) };
            case JIRA_BUG:
                return { icon: react["createElement"](bug_16_default.a, { label: taskLabel }) };
            case JIRA_EPIC:
                return { icon: react["createElement"](epic_16_default.a, { label: taskLabel }) };
            case JIRA_INCIDENT:
                return { icon: react["createElement"](incident_16_default.a, { label: taskLabel }) };
            case JIRA_SERVICE_REQUEST:
                return { icon: react["createElement"](issue_16_default.a, { label: taskLabel }) };
            case JIRA_CHANGE:
                return { icon: react["createElement"](changes_16_default.a, { label: taskLabel }) };
            case JIRA_PROBLEM:
                return { icon: react["createElement"](problem_16_default.a, { label: taskLabel }) };
            case JIRA_CUSTOM_TASK_TYPE:
                return {
                    icon: (taskType.icon && taskType.icon.url) ||
                        (json.icon && json.icon.url) || (react["createElement"](_16_default.a, { label: json.provider ? json.provider.name : '' })),
                };
        }
    }
    return {
        icon: react["createElement"](_16_default.a, { label: json.provider ? json.provider.name : '' }),
    };
};
var VALID_APPEARANCES = [
    'default',
    'success',
    'removed',
    'inprogress',
    'new',
    'moved',
];
var isValidAppearance = function (appearance) {
    return VALID_APPEARANCES.indexOf(appearance) !== -1;
};
var buildInlineTaskLozenge = function (json) {
    // The .tag property is used by some consumers
    // to extract information required for the task lozenge.
    // We check this property first to privilege this behaviour e.g.
    // Jira's current implementation of Native Resolving.
    if (json.tag && json.tag.name) {
        var _a = json.tag, name_1 = _a.name, appearance = _a.appearance;
        return {
            lozenge: {
                appearance: (isValidAppearance(appearance) && appearance) || VALID_APPEARANCES[0],
                text: name_1,
            },
        };
    }
    // Per the JSON-LD spec, all other tasks should contain status information inside of
    // the .taskStatus JSON tree (Asana, Github, Bitbucket).
    var taskStatus = json['atlassian:taskStatus'];
    if (taskStatus && taskStatus.name) {
        return {
            lozenge: {
                text: taskStatus.name,
                appearance: 'success',
            },
        };
    }
    return {};
};
function extractInlineViewPropsFromTask(json) {
    var props = extractInlineViewPropsFromObject(json);
    return tslib_es6["__assign"]({}, props, buildInlineTaskLozenge(json), buildInlineTaskIcon(json));
}
//# sourceMappingURL=extractPropsFromTask.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/page/16.js
var page_16 = __webpack_require__(1039);
var page_16_default = /*#__PURE__*/__webpack_require__.n(page_16);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromDocument.js

// This extractor doesn't currently recognise any subclass fields
// - to be added in the near future.
var extractInlineViewPropsFromDocument = function (json) { return extractInlineViewPropsFromObject(json); };
//# sourceMappingURL=extractPropsFromDocument.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromTextDocument.js





var buildTextDocumentIcon = function (json) {
    if (json.generator && json.generator['@id'] === CONFLUENCE_GENERATOR_ID) {
        return { icon: react["createElement"](page_16_default.a, { label: "Confluence" }) };
    }
    return {};
};
function extractInlineViewPropsFromTextDocument(json) {
    var props = extractInlineViewPropsFromDocument(json);
    return tslib_es6["__assign"]({}, props, buildTextDocumentIcon(json));
}
//# sourceMappingURL=extractPropsFromTextDocument.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/blog/16.js
var blog_16 = __webpack_require__(1040);
var blog_16_default = /*#__PURE__*/__webpack_require__.n(blog_16);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromBlogPost.js





var buildBlogPostIcon = function (json) {
    if (json.generator && json.generator['@id'] === CONFLUENCE_GENERATOR_ID) {
        return { icon: react["createElement"](blog_16_default.a, { label: "Confluence" }) };
    }
    return {};
};
function extractInlineViewPropsFromBlogPost(json) {
    var props = extractInlineViewPropsFromTextDocument(json);
    return tslib_es6["__assign"]({}, props, buildBlogPostIcon(json));
}
//# sourceMappingURL=extractPropsFromBlogPost.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/people-group.js
var people_group = __webpack_require__(1041);
var people_group_default = /*#__PURE__*/__webpack_require__.n(people_group);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromProject.js




var buildProjectIcon = function (json) {
    if (json.icon && json.icon.url) {
        return { icon: json.icon.url };
    }
    return {
        icon: react["createElement"](people_group_default.a, { size: "small", label: json.name || 'Project' }),
    };
};
function extractInlineViewPropsFromProject(json) {
    var props = extractInlineViewPropsFromDocument(json);
    return tslib_es6["__assign"]({}, props, buildProjectIcon(json));
}
//# sourceMappingURL=extractPropsFromProject.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/document-filled.js
var document_filled = __webpack_require__(443);
var document_filled_default = /*#__PURE__*/__webpack_require__.n(document_filled);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromTemplate.js





var buildTemplateIcon = function (json) {
    if (json.generator && json.generator['@id'] === CONFLUENCE_GENERATOR_ID) {
        return { icon: react["createElement"](document_filled_default.a, { size: "small", label: "Confluence" }) };
    }
    return {};
};
function extractInlineViewPropsFromTemplate(json) {
    var props = extractInlineViewPropsFromDocument(json);
    return tslib_es6["__assign"]({}, buildTemplateIcon(json), props);
}
//# sourceMappingURL=extractPropsFromTemplate.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromSourceCodeRepository.js

// NOTE: the "full name" of the repository is already sent to us in the JSON-LD.
var extractInlineViewPropsFromSourceCodeRepository = extractInlineViewPropsFromObject;
//# sourceMappingURL=extractPropsFromSourceCodeRepository.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/pull-request/16.js
var pull_request_16 = __webpack_require__(1042);
var pull_request_16_default = /*#__PURE__*/__webpack_require__.n(pull_request_16);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromSourceCodeCommon.js

var isRepositoryResource = function (json) {
    return (json &&
        json.context &&
        json.context['@type'] === 'atlassian:SourceCodeRepository');
};
// Builds the name for Pull Requests, Branches and Commits.
var buildName = function (props, json) {
    var nextProps = tslib_es6["__assign"]({}, props);
    var link = nextProps.link || json.url;
    // Check if this is a reference to something _inside_ a Repository.
    if (link && isRepositoryResource(json)) {
        var repostoryName = (json.context && json.context.name) || '';
        // COMMIT: `repo-name: abf137c title of commit message`
        if (json['@type'] === 'atlassian:SourceCodeCommit') {
            var _a = tslib_es6["__read"]((json['@id'] || '').split(':'), 2), /* hashType */ hashContent = _a[1];
            var hash = (hashContent && hashContent.substring(0, 8) + " ") || '';
            var repoName = repostoryName ? repostoryName + ": " : '';
            return { title: "" + repoName + hash + nextProps.title };
        }
        // PR: `repo-name: #42 title of pull request`
        if (json['@type'] === 'atlassian:SourceCodePullRequest') {
            var internalId = (json['atlassian:internalId'] && "#" + json['atlassian:internalId'] + " ") ||
                '';
            var repoName = repostoryName ? repostoryName + ": " : '';
            return { title: "" + repoName + internalId + nextProps.title };
        }
        // BRANCH: `repo-name/branch-name`
        if (json['@type'] === 'atlassian:SourceCodeReference') {
            var repoName = repostoryName ? repostoryName + "/" : '';
            return { title: "" + repoName + nextProps.title };
        }
    }
    return nextProps;
};
//# sourceMappingURL=extractPropsFromSourceCodeCommon.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromSourceCodePullRequest.js





var buildInlineSourceCodePullRequestTag = function (json) {
    if (json['atlassian:state']) {
        return {
            lozenge: {
                appearance: 'success',
                text: json['atlassian:state'],
            },
        };
    }
    return {};
};
var buildIcon = function (json) {
    var name = json.name;
    return { icon: react["createElement"](pull_request_16_default.a, { label: name }) };
};
var extractInlineViewPropsFromSourceCodePullRequest = function (json) {
    var props = extractInlineViewPropsFromObject(json);
    return tslib_es6["__assign"]({}, props, buildIcon(json), buildName(props, json), buildInlineSourceCodePullRequestTag(json));
};
//# sourceMappingURL=extractPropsFromSourceCodePullRequest.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/branch/16.js
var branch_16 = __webpack_require__(1043);
var branch_16_default = /*#__PURE__*/__webpack_require__.n(branch_16);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromSourceCodeReference.js





var extractPropsFromSourceCodeReference_buildIcon = function (json) {
    var name = json.name;
    return { icon: react["createElement"](branch_16_default.a, { label: name }) };
};
var extractInlineViewPropsFromSourceCodeReference = function (json) {
    var props = extractInlineViewPropsFromObject(json);
    return tslib_es6["__assign"]({}, props, extractPropsFromSourceCodeReference_buildIcon(json), buildName(props, json));
};
//# sourceMappingURL=extractPropsFromSourceCodeReference.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/generic/16.js
var generic_16 = __webpack_require__(835);
var generic_16_default = /*#__PURE__*/__webpack_require__.n(generic_16);

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/utils/index.js
var utils = __webpack_require__(396);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromDigitalDocument.js





var extractPropsFromDigitalDocument_buildIcon = function (json) {
    if (json.fileFormat) {
        return { icon: Object(utils["b" /* getIconForFileType */])(json.fileFormat) };
    }
    return { icon: react["createElement"](generic_16_default.a, { label: json.name }) };
};
var extractInlineViewPropsFromDigitalDocument = function (json) {
    var props = extractInlineViewPropsFromDocument(json);
    return tslib_es6["__assign"]({}, props, extractPropsFromDigitalDocument_buildIcon(json));
};
//# sourceMappingURL=extractPropsFromDigitalDocument.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-object/glyph/commit/16.js
var commit_16 = __webpack_require__(1044);
var commit_16_default = /*#__PURE__*/__webpack_require__.n(commit_16);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/extractPropsFromSourceCodeCommit.js





var extractPropsFromSourceCodeCommit_buildIcon = function (json) {
    var name = json.name;
    return { icon: react["createElement"](commit_16_default.a, { label: name }) };
};
var extractInlineViewPropsFromSourceCodeCommit = function (json) {
    var props = extractInlineViewPropsFromObject(json);
    return tslib_es6["__assign"]({}, props, extractPropsFromSourceCodeCommit_buildIcon(json), buildName(props, json));
};
//# sourceMappingURL=extractPropsFromSourceCodeCommit.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractInlinePropsFromJSONLD; });













var extractorPrioritiesByType = {
    Object: 0,
    Document: 5,
    'schema:TextDigitalDocument': 10,
    'schema:DigitalDocument': 10,
    'schema:BlogPosting': 10,
    'atlassian:Task': 10,
    'atlassian:Project': 10,
    'atlassian:Template': 10,
    'atlassian:SourceCodeCommit': 10,
    'atlassian:SourceCodeRepository': 10,
    'atlassian:SourceCodePullRequest': 10,
    'atlassian:SourceCodeReference': 10,
};
var extractorFunctionsByType = {
    Object: extractInlineViewPropsFromObject,
    Document: extractInlineViewPropsFromDocument,
    'schema:TextDigitalDocument': extractInlineViewPropsFromTextDocument,
    'schema:DigitalDocument': extractInlineViewPropsFromDigitalDocument,
    'schema:BlogPosting': extractInlineViewPropsFromBlogPost,
    'atlassian:Task': extractInlineViewPropsFromTask,
    'atlassian:Project': extractInlineViewPropsFromProject,
    'atlassian:Template': extractInlineViewPropsFromTemplate,
    'atlassian:SourceCodeCommit': extractInlineViewPropsFromSourceCodeCommit,
    'atlassian:SourceCodeRepository': extractInlineViewPropsFromSourceCodeRepository,
    'atlassian:SourceCodePullRequest': extractInlineViewPropsFromSourceCodePullRequest,
    'atlassian:SourceCodeReference': extractInlineViewPropsFromSourceCodeReference,
};
function extractInlinePropsFromJSONLD(json) {
    return Object(extractors["a" /* genericExtractPropsFromJSONLD */])({
        extractorPrioritiesByType: extractorPrioritiesByType,
        extractorFunctionsByType: extractorFunctionsByType,
        defaultExtractorFunction: extractInlineViewPropsFromObject,
        json: json,
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/extractors/index.js
var extractors = __webpack_require__(987);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromObject.js
function extractPropsFromObject(json) {
    if (!json) {
        throw new Error('smart-card: data is not parsable JSON-LD.');
    }
    var props = {
        title: {
            text: typeof json.name === 'string' ? json.name : '',
        },
        description: {
            text: typeof json.summary === 'string' ? json.summary : '',
        },
    };
    if (json.url) {
        props.link = String(json.url);
    }
    if (json.generator && (json.generator.name || json.generator.icon)) {
        props.context = {
            text: json.generator.name,
            icon: json.generator.icon && json.generator.icon.url
                ? json.generator.icon.url
                : json.generator.icon,
        };
    }
    return props;
}
//# sourceMappingURL=extractPropsFromObject.js.map
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/comment.js
var comment = __webpack_require__(989);
var comment_default = /*#__PURE__*/__webpack_require__.n(comment);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/utils/index.js
var utils = __webpack_require__(396);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromDocument.js






function extractPropsFromDocument(json) {
    var props = extractPropsFromObject(json);
    props.icon = Object(utils["b" /* getIconForFileType */])(json.fileFormat || '');
    props.details = [];
    if (json.commentCount) {
        var commentCount = json.commentCount;
        var intCommentCount = parseInt(commentCount, 10);
        // Only show the comment count if it's a string or an integer > 0
        if (isNaN(intCommentCount) || intCommentCount) {
            props.details.push({
                icon: (react["createElement"](comment_default.a, { label: "", key: "comments-count-icon", size: "medium", primaryColor: theme["colors"].N600 })),
                text: "" + json.commentCount,
            });
        }
    }
    var typeDescription = Object(utils["c" /* getLabelForFileType */])(json.fileFormat || '') || 'Document';
    // Note: we're relying on the consumers to pass a proper react-intl context that
    // formats relative time according to the spec:
    // https://hello.atlassian.net/wiki/spaces/ADG/pages/195123084/Date+formats+product+1.0+spec
    if (json.updated && json.updatedBy) {
        var lastPerson = void 0;
        if (Array.isArray(json.updatedBy)) {
            lastPerson = json.updatedBy.pop();
            props.details.concat(json.updatedBy.map(function (person) { return ({
                text: person.name,
                icon: person.icon,
            }); }));
        }
        else {
            lastPerson = json.updatedBy;
        }
        props.byline = (react["createElement"]("span", null,
            typeDescription,
            " \u00B7 Updated by ",
            lastPerson.name,
            ' ',
            react["createElement"](index_es["b" /* FormattedRelative */], { value: json.updated })));
    }
    else if (json.attributedTo) {
        var person = Array.isArray(json.attributedTo)
            ? json.attributedTo.pop()
            : json.attributedTo;
        props.byline = (react["createElement"]("span", null,
            typeDescription,
            " \u00B7 Created by ",
            person.name,
            ' ',
            react["createElement"](index_es["b" /* FormattedRelative */], { value: json.dateCreated })));
    }
    if (json.image && json.image.url) {
        props.preview = json.image.url;
    }
    return props;
}
//# sourceMappingURL=extractPropsFromDocument.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/spreadsheet/24.js
var _24 = __webpack_require__(1046);
var _24_default = /*#__PURE__*/__webpack_require__.n(_24);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/google-sheet/24.js
var google_sheet_24 = __webpack_require__(990);
var google_sheet_24_default = /*#__PURE__*/__webpack_require__.n(google_sheet_24);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/excel-spreadsheet/24.js
var excel_spreadsheet_24 = __webpack_require__(1045);
var excel_spreadsheet_24_default = /*#__PURE__*/__webpack_require__.n(excel_spreadsheet_24);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromSpreadsheet.js





function extractPropsFromSpreadsheet(json) {
    var props = extractPropsFromDocument(json);
    // We use vendor-specific variations of the icons, whenever possible
    if (json.fileFormat === 'application/vnd.google-apps.spreadsheet') {
        props.icon = (react["createElement"](google_sheet_24_default.a, { label: json.provider ? json.provider.name : 'Google Sheet' }));
    }
    else if (json.fileFormat === 'application/vnd.ms-excel') {
        props.icon = (react["createElement"](excel_spreadsheet_24_default.a, { label: json.provider ? json.provider.name : 'MS Excel' }));
    }
    else {
        props.icon = (react["createElement"](_24_default.a, { label: json.provider ? json.provider.name : 'Spreadsheet' }));
    }
    return props;
}
//# sourceMappingURL=extractPropsFromSpreadsheet.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromTask.js





var buildTaskTitle = function (json) {
    var name = json.name && json.name.trim();
    return name ? { title: { text: name } } : {};
};
var buildTaskDescription = function (json) {
    var summary = json.summary && json.summary.trim();
    return summary ? { description: { text: summary } } : {};
};
var buildTaskLink = function (json) {
    var url = json.url && json.url.trim();
    return url ? { link: url } : {};
};
var buildTaskByline = function (json) {
    var updatedBy = json.updatedBy && json.updatedBy.name ? ' by ' + json.updatedBy.name : '';
    var attributedTo = json.attributedTo && json.attributedTo.name
        ? ' by ' + json.attributedTo.name
        : '';
    if (json.dateCreated || json.updated) {
        return {
            byline: json.updated ? (react["createElement"]("span", null,
                "Updated ",
                updatedBy,
                " ",
                react["createElement"](index_es["b" /* FormattedRelative */], { value: json.updated }))) : (react["createElement"]("span", null,
                "Created ",
                attributedTo,
                " ",
                react["createElement"](index_es["b" /* FormattedRelative */], { value: json.dateCreated }))),
        };
    }
    return {};
};
var buildTaskUser = function (json) {
    if (json.assignedBy && (json.assignedBy.image || json.assignedBy.name)) {
        return {
            user: tslib_es6["__assign"]({}, (json.assignedBy.image ? { icon: json.assignedBy.image } : {}), (json.assignedBy.name ? { name: json.assignedBy.name } : {})),
        };
    }
    return {};
};
var buildTaskUsers = function (json) {
    if (Array.isArray(json.assignedTo) && json.assignedTo.length > 0) {
        return {
            users: json.assignedTo.map(function (assignee) { return ({
                icon: assignee.image,
                name: assignee.name,
            }); }),
        };
    }
    return {};
};
var buildTaskCommentCount = function (json) {
    if (!isNaN(Number(json.commentCount)) && Number(json.commentCount) > 0) {
        return {
            icon: (react["createElement"](comment_default.a, { label: "", key: "comments-count-icon", size: "medium", primaryColor: theme["colors"].N600 })),
            text: String(json.commentCount),
        };
    }
    return {};
};
var buildTaskDetailsLozenge = function (json) {
    var taskStatus = json['atlassian:taskStatus'];
    if (taskStatus && taskStatus.name) {
        return {
            lozenge: {
                text: taskStatus.name,
                appearance: 'success',
            },
        };
    }
    return {};
};
var buildTaskDetails = function (json) {
    if (json['atlassian:taskStatus'] || json.commentCount) {
        return {
            details: [buildTaskDetailsLozenge(json), buildTaskCommentCount(json)],
        };
    }
    return {};
};
var buildTaskContext = function (json) {
    var genName = json.generator && json.generator.name && json.generator.name.trim();
    if (genName) {
        var additional = (json.context &&
            json.context.name &&
            json.context.name.trim() &&
            " / " + json.context.name.trim()) ||
            '';
        return {
            context: tslib_es6["__assign"]({ text: genName + additional }, (json.generator.icon ? { icon: json.generator.icon } : {})),
        };
    }
    return {};
};
function extractBlockViewPropsFromTask(json) {
    if (!json) {
        throw new Error('smart-card: data is not parsable JSON-LD.');
    }
    var props = tslib_es6["__assign"]({}, buildTaskContext(json), buildTaskTitle(json), buildTaskDescription(json), buildTaskLink(json), buildTaskByline(json), buildTaskUser(json), buildTaskUsers(json), buildTaskDetails(json));
    return props;
}
//# sourceMappingURL=extractPropsFromTask.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/presentation/24.js
var presentation_24 = __webpack_require__(1049);
var presentation_24_default = /*#__PURE__*/__webpack_require__.n(presentation_24);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/powerpoint-presentation/24.js
var powerpoint_presentation_24 = __webpack_require__(1048);
var powerpoint_presentation_24_default = /*#__PURE__*/__webpack_require__.n(powerpoint_presentation_24);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/google-slide/24.js
var google_slide_24 = __webpack_require__(1047);
var google_slide_24_default = /*#__PURE__*/__webpack_require__.n(google_slide_24);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromPresentation.js





function extractPropsFromPresentation(json) {
    var props = extractPropsFromDocument(json);
    // We use vendor-specific variations of the icons, whenever possible
    if (json.fileFormat === 'application/vnd.google-apps.presentation') {
        props.icon = (react["createElement"](google_slide_24_default.a, { label: json.provider ? json.provider.name : 'Google Slides' }));
    }
    else if (json.fileFormat === 'application/vnd.mspowerpoint') {
        props.icon = (react["createElement"](powerpoint_presentation_24_default.a, { label: json.provider ? json.provider.name : 'PowerPoint Presentation' }));
    }
    else {
        props.icon = (react["createElement"](presentation_24_default.a, { label: json.provider ? json.provider.name : 'Presentation' }));
    }
    return props;
}
//# sourceMappingURL=extractPropsFromPresentation.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/document/24.js
var document_24 = __webpack_require__(1051);
var document_24_default = /*#__PURE__*/__webpack_require__.n(document_24);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon-file-type/glyph/word-document/24.js
var word_document_24 = __webpack_require__(1050);
var word_document_24_default = /*#__PURE__*/__webpack_require__.n(word_document_24);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromTextDocument.js





function extractPropsFromTextDocument(json) {
    var props = extractPropsFromDocument(json);
    // We use vendor-specific variations of the icons, whenever possible
    if (json.fileFormat === 'application/vnd.google-apps.document') {
        props.icon = (react["createElement"](google_sheet_24_default.a, { label: json.provider ? json.provider.name : 'Google Doc' }));
    }
    else if (json.fileFormat === 'application/vnd.ms-word') {
        props.icon = (react["createElement"](word_document_24_default.a, { label: json.provider ? json.provider.name : 'MS Word' }));
    }
    else {
        props.icon = (react["createElement"](document_24_default.a, { label: json.provider ? json.provider.name : 'Text document' }));
    }
    return props;
}
//# sourceMappingURL=extractPropsFromTextDocument.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromProject.js

function extractBlockViewPropsFromProject(json) {
    var props = extractPropsFromObject(json);
    props.byline = 'Project';
    if (json.member &&
        json.member['@type'] === 'Collection' &&
        json.member.totalItems > 0) {
        props.details = props.details || [];
        props.details.push({
            title: 'Members',
            text: json.member.totalItems,
        });
    }
    return props;
}
//# sourceMappingURL=extractPropsFromProject.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/extractPropsFromSourceCodeRepository.js




var buildRepositoryLink = function (json) {
    var link = json.url && json.url.trim();
    return link ? { link: link } : {};
};
var buildRepositoryTitle = function (json) {
    var text = json.name && json.name.trim();
    return text ? { title: { text: text } } : {};
};
var buildRepositoryDescription = function (json) {
    var text = typeof json.summary === 'string' ? json.summary : undefined;
    return text ? { description: { text: text } } : {};
};
var buildRepositoryByline = function (json) {
    var attributedTo = json.attributedTo && json.attributedTo.name ? json.attributedTo.name : '';
    var dateCreated = json['schema:dateCreated'];
    var dateUpdated = json['updated'];
    var updatedBy = json['atlassian:updatedBy'] && json['atlassian:updatedBy'].name;
    if (dateCreated || dateUpdated) {
        return {
            byline: updatedBy ? (react["createElement"]("span", null,
                "Updated by ",
                updatedBy,
                " ",
                react["createElement"](index_es["b" /* FormattedRelative */], { value: dateUpdated }))) : (react["createElement"]("span", null,
                "Created by ",
                attributedTo,
                " ",
                react["createElement"](index_es["b" /* FormattedRelative */], { value: dateCreated }))),
        };
    }
    return {};
};
var setRepositoryContext = function (props, json) {
    var nextProps = tslib_es6["__assign"]({}, props);
    if (nextProps.context && json.generator && json.context) {
        nextProps.context.text = json.generator.name + " / " + json.context.name;
    }
    return nextProps;
};
var setRepositoryDetails = function (props, json) {
    var nextProps = tslib_es6["__assign"]({}, props);
    if (json['schema:programmingLanguage']) {
        nextProps.details = nextProps.details || [];
        nextProps.details.push({
            title: 'Language',
            text: json['schema:programmingLanguage'],
        });
    }
    if (json['atlassian:subscriberCount']) {
        nextProps.details = nextProps.details || [];
        nextProps.details.push({
            title: 'Subscribers',
            text: json['atlassian:subscriberCount'],
        });
    }
    return nextProps;
};
function extractPropsFromSourceCodeRepository(json) {
    var props = extractPropsFromObject(json);
    props = setRepositoryContext(props, json);
    props = setRepositoryDetails(props, json);
    return tslib_es6["__assign"]({}, buildRepositoryLink(json), buildRepositoryTitle(json), buildRepositoryDescription(json), buildRepositoryByline(json), props);
}
//# sourceMappingURL=extractPropsFromSourceCodeRepository.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractBlockPropsFromJSONLD; });









var extractorPrioritiesByType = {
    Object: 0,
    Document: 5,
    'schema:TextDigitalDocument': 10,
    'schema:SpreadsheetDigitalDocument': 10,
    'schema:PresentationDigitalDocument': 10,
    Spreadsheet: 10,
    'atlassian:Task': 10,
    'atlassian:Project': 10,
    'atlassian:SourceCodeRepository': 10,
};
var extractorFunctionsByType = {
    Object: extractPropsFromObject,
    'schema:TextDigitalDocument': extractPropsFromTextDocument,
    'schema:SpreadsheetDigitalDocument': extractPropsFromSpreadsheet,
    'schema:PresentationDigitalDocument': extractPropsFromPresentation,
    Document: extractPropsFromDocument,
    Spreadsheet: extractPropsFromSpreadsheet,
    Presentation: extractPropsFromPresentation,
    'atlassian:Task': extractBlockViewPropsFromTask,
    'atlassian:Project': extractBlockViewPropsFromProject,
    'atlassian:SourceCodeRepository': extractPropsFromSourceCodeRepository,
};
function extractBlockPropsFromJSONLD(json) {
    return Object(extractors["a" /* genericExtractPropsFromJSONLD */])({
        extractorPrioritiesByType: extractorPrioritiesByType,
        extractorFunctionsByType: extractorFunctionsByType,
        defaultExtractorFunction: extractPropsFromObject,
        json: json,
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Subtask16Icon = function Subtask16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M9 7V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994zM9 9h2v2H9V9zM5 5h2v2H5V5z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Subtask16Icon.displayName = 'Subtask16Icon';
var _default = Subtask16Icon;
exports.default = _default;

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Story16Icon = function Story16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#36B37E\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm6 11l-2.863 1.822c-.42.38-1.137.111-1.137-.427v-8.19C4 3.54 4.596 3 5.333 3h5.334C11.403 3 12 3.539 12 4.206v8.19c0 .537-.719.806-1.139.426L8 11zm0-2.371l2 1.274V5H6v4.902L8 8.63z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Story16Icon.displayName = 'Story16Icon';
var _default = Story16Icon;
exports.default = _default;

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Bug16Icon = function Bug16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#FF5630\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm6 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Bug16Icon.displayName = 'Bug16Icon';
var _default = Bug16Icon;
exports.default = _default;

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Epic16Icon = function Epic16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#6554C0\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm9.912 7.767A.486.486 0 0 0 12 7.5a.5.5 0 0 0-.5-.5H9V3.5a.495.495 0 1 0-.872-.327l-.002-.001-3.977 4.973-.008.009-.028.036.002.004A.487.487 0 0 0 4 8.5a.5.5 0 0 0 .5.5c.028 0 .051-.011.077-.016H7V12.5a.5.5 0 0 0 .5.5c.124 0 .234-.05.321-.124l.004.001.007-.009c.03-.027.051-.059.074-.092l3.934-4.913c.019-.018.031-.039.047-.06l.027-.033-.002-.003z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Epic16Icon.displayName = 'Epic16Icon';
var _default = Epic16Icon;
exports.default = _default;

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Incident16Icon = function Incident16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#FF5630\" fill-rule=\"evenodd\" d=\"M4.785 10h6.43L10.5 8H5.499l-.714 2zM4 11a1 1 0 0 0-1 1v1h10v-1a1 1 0 0 0-1-1H4zm1.856-4h4.288L8.942 3.632a1 1 0 0 0-1.884 0L5.856 7zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Incident16Icon.displayName = 'Incident16Icon';
var _default = Incident16Icon;
exports.default = _default;

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Issue16Icon = function Issue16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm1 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3zm1 2v4h8V6H4z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Issue16Icon.displayName = 'Issue16Icon';
var _default = Issue16Icon;
exports.default = _default;

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Changes16Icon = function Changes16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#FFAB00\" fill-rule=\"evenodd\" d=\"M10.58 7H5.467l.866-.865A1 1 0 1 0 4.92 4.72L2.34 7.3a.998.998 0 0 0 0 1.414l2.58 2.578a1 1 0 0 0 1.414-1.416L5.456 9h5.134l-.877.876a1 1 0 1 0 1.414 1.415l2.58-2.58a1 1 0 0 0 0-1.414L11.126 4.72a.996.996 0 0 0-.706-.292.999.999 0 0 0-.707 1.707l.866.865zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Changes16Icon.displayName = 'Changes16Icon';
var _default = Changes16Icon;
exports.default = _default;

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Problem16Icon = function Problem16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#FF5630\" fill-rule=\"evenodd\" d=\"M5.968 11.446l5.478-5.478a4 4 0 0 1-5.478 5.478zm-.796-.618zm-.618-.796a4 4 0 0 1 5.478-5.478l-5.478 5.478zm6.274-4.86zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm6 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Problem16Icon.displayName = 'Problem16Icon';
var _default = Problem16Icon;
exports.default = _default;

/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Page16Icon = function Page16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H4zm0 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H4zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H4z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Page16Icon.displayName = 'Page16Icon';
var _default = Page16Icon;
exports.default = _default;

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Blog16Icon = function Blog16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M6.972 6.128a2.5 2.5 0 1 0-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 0 0-.058 1.147.607.607 0 0 0 .948.043c1.939-2.221 2.77-3.996 2.496-5.325zm7 0a2.5 2.5 0 1 0-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 0 0-.058 1.147.607.607 0 0 0 .948.043c1.939-2.221 2.77-3.996 2.496-5.325zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Blog16Icon.displayName = 'Blog16Icon';
var _default = Blog16Icon;
exports.default = _default;

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PeopleGroupIcon = function PeopleGroupIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8.126 10H4c-1.113 0-2 .895-2 2v3.73c0 1.31 1.874 2.053 4 2.23v-2.964A3.002 3.002 0 0 1 9 12h.354a4 4 0 0 1-1.228-2zm7.748 0H20c1.105 0 2 .885 2 2v3.73c0 1.31-1.874 2.053-4 2.23v-2.964A3 3 0 0 0 15 12h-.354a4 4 0 0 0 1.228-2zM9.967 5.554a3 3 0 1 0-1.963 3.274 3.999 3.999 0 0 1 1.963-3.274zm6.03 3.274a3 3 0 1 0-1.963-3.276 3.994 3.994 0 0 1 1.963 3.276z\"/><path d=\"M7 15c0-1.105.887-2 2-2h6c1.105 0 2 .885 2 2v3.73c0 3.027-10 3.027-10 0V15z\"/><circle cx=\"12\" cy=\"9\" r=\"3\"/></g></svg>"
  }, props));
};

PeopleGroupIcon.displayName = 'PeopleGroupIcon';
var _default = PeopleGroupIcon;
exports.default = _default;

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PullRequest16Icon = function PullRequest16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#36B37E\" fill-rule=\"evenodd\" d=\"M6.417 6H9a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V7a3 3 0 0 0-3-3H6.415l.294-.295a1 1 0 1 0-1.413-1.414l-2.003 2a1 1 0 0 0 .001 1.415l2.002 2.001a.999.999 0 0 0 1.414-.002.999.999 0 0 0-.001-1.413L6.417 6zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm9 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

PullRequest16Icon.displayName = 'PullRequest16Icon';
var _default = PullRequest16Icon;
exports.default = _default;

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Branch16Icon = function Branch16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M10 8.732v.28A1.993 1.993 0 0 1 8.002 11l-.004 2A3.995 3.995 0 0 0 12 9.007v-.274a2 2 0 1 0-2 0zm-4-3a2 2 0 1 0-2 0v4.536a2 2 0 1 0 2 0V5.732zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Branch16Icon.displayName = 'Branch16Icon';
var _default = Branch16Icon;
exports.default = _default;

/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Commit16Icon = function Commit16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#FFAB00\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-.986 1.834a3.001 3.001 0 0 1 0-5.668A1.007 1.007 0 0 1 7 5V3a1 1 0 1 1 2 0v2c0 .057-.005.112-.014.166a3.001 3.001 0 0 1 0 5.668c.01.054.014.11.014.166v2a1 1 0 0 1-2 0v-2c0-.057.005-.112.014-.166z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Commit16Icon.displayName = 'Commit16Icon';
var _default = Commit16Icon;
exports.default = _default;

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ExcelSpreadsheet24Icon = function ExcelSpreadsheet24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#007442\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1.376 6.013A.437.437 0 0 0 4 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 0 0 .497-.434V4.868a.437.437 0 0 0-.499-.434L4.376 6.014zM17 7v10h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H17zM6.93 15.5l2.25-3.55-2.236-3.496h1.734l1.47 2.466h.087l1.485-2.466h1.65l-2.32 3.52 2.286 3.526h-1.68l-1.513-2.388h-.088L8.52 15.5H6.93z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

ExcelSpreadsheet24Icon.displayName = 'ExcelSpreadsheet24Icon';
var _default = ExcelSpreadsheet24Icon;
exports.default = _default;

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Spreadsheet24Icon = function Spreadsheet24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#36B37E\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H5zm0 4a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2H5zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H5zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H5zm7-12a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7zm0 4a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7zm0 4a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7zm0 4a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

Spreadsheet24Icon.displayName = 'Spreadsheet24Icon';
var _default = Spreadsheet24Icon;
exports.default = _default;

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GoogleSlide24Icon = function GoogleSlide24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#FFC107\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

GoogleSlide24Icon.displayName = 'GoogleSlide24Icon';
var _default = GoogleSlide24Icon;
exports.default = _default;

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PowerpointPresentation24Icon = function PowerpointPresentation24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#CA5010\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1.376 6.013A.437.437 0 0 0 4 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 0 0 .497-.434V4.868a.437.437 0 0 0-.499-.434L4.376 6.014zM17 7v10h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H17zM7.854 8.454h2.94c1.45 0 2.441.972 2.441 2.437 0 1.45-1.03 2.421-2.514 2.421H9.329V15.5H7.854V8.454zM9.33 9.665v2.451h1.07c.844 0 1.337-.43 1.337-1.22 0-.801-.483-1.231-1.333-1.231H9.33z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

PowerpointPresentation24Icon.displayName = 'PowerpointPresentation24Icon';
var _default = PowerpointPresentation24Icon;
exports.default = _default;

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Presentation24Icon = function Presentation24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#6554C0\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm3 14a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1zm8-6a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zm-4 4a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zm8-7a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

Presentation24Icon.displayName = 'Presentation24Icon';
var _default = Presentation24Icon;
exports.default = _default;

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WordDocument24Icon = function WordDocument24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#004E8C\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1.376 6.013A.437.437 0 0 0 4 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 0 0 .497-.434V4.868a.437.437 0 0 0-.499-.434L4.376 6.014zm5.629 5.324L8.687 16H7.295L5.43 8.954h1.533l1.099 4.966h.078l1.284-4.966h1.245l1.309 4.966h.078l1.089-4.966h1.523L12.798 16h-1.382l-1.333-4.663h-.078zM17 7v10h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H17z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

WordDocument24Icon.displayName = 'WordDocument24Icon';
var _default = WordDocument24Icon;
exports.default = _default;

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Document24Icon = function Document24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

Document24Icon.displayName = 'Document24Icon';
var _default = Document24Icon;
exports.default = _default;

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineCardResolvedView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var _atlaskit_lozenge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(932);
/* harmony import */ var _IconAndTitleLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(951);
/* harmony import */ var _IconAndTitleLayout_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(965);






var InlineCardResolvedView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InlineCardResolvedView, _super);
    function InlineCardResolvedView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCardResolvedView.prototype.renderLozenge = function () {
        var lozenge = this.props.lozenge;
        if (!lozenge) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_IconAndTitleLayout_styled__WEBPACK_IMPORTED_MODULE_5__[/* LozengeWrapper */ "d"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_atlaskit_lozenge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { appearance: lozenge.appearance || 'default', isBold: lozenge.isBold }, lozenge.text)));
    };
    InlineCardResolvedView.prototype.render = function () {
        var _a = this.props, title = _a.title, isSelected = _a.isSelected, onClick = _a.onClick, icon = _a.icon, link = _a.link;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Frame__WEBPACK_IMPORTED_MODULE_2__[/* Frame */ "a"], { link: link, isSelected: isSelected, onClick: onClick },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_IconAndTitleLayout__WEBPACK_IMPORTED_MODULE_4__[/* IconAndTitleLayout */ "a"], { icon: icon, title: title }),
            this.renderLozenge()));
    };
    return InlineCardResolvedView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@atlaskit/avatar/components/Avatar.js + 14 modules
var Avatar = __webpack_require__(927);

// EXTERNAL MODULE: ./node_modules/@atlaskit/avatar-group/components/AvatarGroup.js + 5 modules
var AvatarGroup = __webpack_require__(930);

// EXTERNAL MODULE: ./node_modules/@atlaskit/tooltip/components/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ImageIcon/index.js + 1 modules
var ImageIcon = __webpack_require__(986);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/link.js
var glyph_link = __webpack_require__(465);
var link_default = /*#__PURE__*/__webpack_require__.n(glyph_link);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/dimensions.js
var dimensions = __webpack_require__(952);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var _atlaskit_theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/mixins.js
var mixins = __webpack_require__(395);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ExpandedFrame/styled.js




var wrapperPadding = 8;
var className = 'media-card-frame';
var cardShadow = "\n  box-shadow: 0 0 1px 0 rgba(23, 43, 77, 0.24);";
function styled_minWidth(_a) {
    var minWidth = _a.minWidth;
    if (minWidth) {
        return "min-width: " + minWidth + "px;";
    }
    else {
        return '';
    }
}
function styled_maxWidth(_a) {
    var maxWidth = _a.maxWidth;
    if (maxWidth) {
        return "max-width: " + maxWidth + "px;";
    }
    else {
        return '';
    }
}
function interactive(_a) {
    var isInteractive = _a.isInteractive;
    if (isInteractive) {
        return "\n      cursor: pointer;\n      &:hover {\n        background-color: " + _atlaskit_theme["colors"].N30 + ";\n      }\n      &:active {\n        background-color: " + _atlaskit_theme["colors"].B50 + ";\n      }\n    ";
    }
    else {
        return '';
    }
}
function selected(_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "&::after {\n        cursor: pointer;\n        box-shadow: 0 0 0 2px " + _atlaskit_theme["colors"].B100 + ";\n        content: '';\n        outline: none;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        left: 0;\n      }"
        : '';
}
var wrapperStyles = Object(styled_components_browser_esm["css"])(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " ", " ", " display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  font-family: ", ";\n  padding: 0 ", "px ", "px ", "px;\n  width: 100%;\n  user-select: none;\n  background-color: ", ";\n  line-height: initial;\n  transition: background 0.3s;\n  position: relative;\n  ", "\n"], ["\n  ", " ", " ", " ", " display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  font-family: ", ";\n  padding: 0 ", "px ", "px ", "px;\n  width: 100%;\n  user-select: none;\n  background-color: ", ";\n  line-height: initial;\n  transition: background 0.3s;\n  position: relative;\n  ", "\n"])), mixins["b" /* borderRadius */], styled_minWidth, styled_maxWidth, interactive, Object(constants["i" /* fontFamily */])(), wrapperPadding, wrapperPadding, wrapperPadding, _atlaskit_theme["colors"].N20, selected);
// export interface ContentProps {
//   maxWidth?: number;
// }
var LinkWrapper = styled_components_browser_esm["default"].a(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  ", " &:hover {\n    text-decoration: none;\n  }\n"], ["\n  ", " &:hover {\n    text-decoration: none;\n  }\n"])), wrapperStyles);
var Wrapper = styled_components_browser_esm["default"].div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ", ";\n"])), wrapperStyles);
var Header = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  height: 32px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  height: 32px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), _atlaskit_theme["colors"].N300);
var IconWrapper = styled_components_browser_esm["default"].div(templateObject_5 || (templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " ", " margin-right: 4px;\n"], ["\n  ", " ", " ",
    " margin-right: 4px;\n"])), mixins["b" /* borderRadius */], Object(mixins["g" /* size */])(16), function (_a) {
    var isPlaceholder = _a.isPlaceholder;
    if (isPlaceholder) {
        return "\n      background-color: " + _atlaskit_theme["colors"].N30 + ";\n    ";
    }
    else {
        return '';
    }
});
var TextWrapper = styled_components_browser_esm["default"].div(templateObject_6 || (templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  ", " color: ", ";\n  font-size: 12px;\n  line-height: 16px;\n  ", ";\n"], ["\n  ",
    " color: ", ";\n  font-size: 12px;\n  line-height: 16px;\n  ", ";\n"])), function (_a) {
    var isPlaceholder = _a.isPlaceholder;
    if (isPlaceholder) {
        return "\n        " + mixins["b" /* borderRadius */] + "\n        width: 125px;\n        height: 12px;\n        background-color: " + _atlaskit_theme["colors"].N30 + ";\n      ";
    }
    else {
        return '';
    }
}, _atlaskit_theme["colors"].N300, Object(mixins["e" /* ellipsis */])('none'));
var Content = styled_components_browser_esm["default"].div(templateObject_7 || (templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  position: relative;\n\n  ", " ", " background-color: white;\n  transition: box-shadow 0.3s;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ", " ", " background-color: white;\n  transition: box-shadow 0.3s;\n\n  ",
    ";\n"])), mixins["b" /* borderRadius */], cardShadow, function (_a) {
    var isInteractive = _a.isInteractive;
    if (isInteractive) {
        return "\n          ." + className + ":hover & {\n            box-shadow: 0 4px 8px -2px rgba(23, 43, 77, 0.32),\n              0 0 1px rgba(23, 43, 77, 0.25);\n          }\n        ";
    }
    else {
        return '';
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ExpandedFrame/index.js



var ExpandedFrame_ExpandedFrame = /** @class */ (function (_super) {
    tslib_es6["__extends"](ExpandedFrame, _super);
    function ExpandedFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                event.stopPropagation();
                onClick(event);
            }
        };
        return _this;
    }
    Object.defineProperty(ExpandedFrame.prototype, "isInteractive", {
        get: function () {
            var _a = this.props, isPlaceholder = _a.isPlaceholder, href = _a.href, onClick = _a.onClick;
            return !isPlaceholder && (Boolean(href) || Boolean(onClick));
        },
        enumerable: true,
        configurable: true
    });
    ExpandedFrame.prototype.renderHeader = function () {
        var _a = this.props, _b = _a.isPlaceholder, isPlaceholder = _b === void 0 ? false : _b, icon = _a.icon, text = _a.text;
        return (react["createElement"](Header, null,
            react["createElement"](IconWrapper, { isPlaceholder: isPlaceholder }, !isPlaceholder && icon),
            react["createElement"](TextWrapper, { isPlaceholder: isPlaceholder }, !isPlaceholder && text)));
    };
    ExpandedFrame.prototype.renderContent = function () {
        var isInteractive = this.isInteractive;
        var children = this.props.children;
        return react["createElement"](Content, { isInteractive: isInteractive }, children);
    };
    ExpandedFrame.prototype.render = function () {
        var isInteractive = this.isInteractive;
        var _a = this.props, isPlaceholder = _a.isPlaceholder, isSelected = _a.isSelected, href = _a.href, minWidth = _a.minWidth, maxWidth = _a.maxWidth;
        if (!isPlaceholder && href) {
            return (react["createElement"](LinkWrapper, { target: "_blank", rel: "noopener", className: className, isInteractive: isInteractive, isSelected: isSelected, href: href, minWidth: minWidth, maxWidth: maxWidth, onClick: this.handleClick },
                this.renderHeader(),
                this.renderContent()));
        }
        else {
            return (react["createElement"](Wrapper, { className: className, isInteractive: isInteractive, isSelected: isSelected, minWidth: minWidth, maxWidth: maxWidth, onClick: this.handleClick },
                this.renderHeader(),
                this.renderContent()));
        }
    };
    return ExpandedFrame;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(958);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/ellipsify.js
var ellipsify = __webpack_require__(992);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/AlertView/styled.js




var styled_Wrapper = styled_components_browser_esm["default"].div(styled_templateObject_1 || (styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 7px 4px;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 18px;\n  pointer-events: all;\n  ", " ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 7px 4px;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 18px;\n  pointer-events: all;\n  ", " ",
    ";\n"])), mixins["c" /* borderRadiusBottom */], function (_a) {
    var type = _a.type;
    if (type === 'failure') {
        return "\n        color: " + _atlaskit_theme["colors"].N600 + ";\n        background-color: " + _atlaskit_theme["colors"].Y300 + ";\n      ";
    }
    else {
        return "\n        color: " + _atlaskit_theme["colors"].N0 + ";\n        background-color: " + _atlaskit_theme["colors"].G300 + ";\n      ";
    }
});
var styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/AlertView/index.js






var contentWidthWhenCardIs400px = 384;
var AlertView_AlertView = /** @class */ (function (_super) {
    tslib_es6["__extends"](AlertView, _super);
    function AlertView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        _this.handleDismis = function (event) {
            var onDismis = _this.props.onDismis;
            if (onDismis) {
                event.preventDefault();
                event.stopPropagation();
                onDismis();
            }
        };
        _this.handleMount = function (el) {
            if (el) {
                _this.el = el;
            }
        };
        _this.handleResize = lodash_debounce_default()(function () {
            if (_this.el) {
                _this.setState({ width: _this.el.clientWidth });
            }
        }, 250);
        return _this;
    }
    AlertView.prototype.componentDidMount = function () {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    };
    AlertView.prototype.componentWillUnMount = function () {
        window.removeEventListener('resize', this.handleResize);
    };
    AlertView.prototype.renderContent = function () {
        var _a = this.props, type = _a.type, text = _a.text;
        var width = this.state.width;
        var txt = type === 'success' ? text : 'Something went wrong.';
        if (width && width < contentWidthWhenCardIs400px) {
            return react["createElement"](ellipsify["a" /* Ellipsify */], { text: txt, lines: 2, inline: true });
        }
        else {
            return react["createElement"](ellipsify["a" /* Ellipsify */], { text: txt, lines: 1, inline: true });
        }
    };
    AlertView.prototype.renderRetryAndCancel = function () {
        var type = this.props.type;
        if (type === 'success') {
            return null;
        }
        return (react["createElement"](react["Fragment"], null,
            react["createElement"](Button["a" /* default */], { appearance: "link", spacing: "none", onClick: this.handleRetry }, "Try again"),
            ' ',
            "or",
            ' ',
            react["createElement"](Button["a" /* default */], { appearance: "link", spacing: "none", onClick: this.handleDismis }, "cancel"),
            "."));
    };
    AlertView.prototype.render = function () {
        var _a = this.props, type = _a.type, style = _a.style;
        return (react["createElement"](styled_Wrapper, { innerRef: this.handleMount, type: type, style: style },
            this.renderContent(),
            " ",
            this.renderRetryAndCancel()));
    };
    return AlertView;
}(react["Component"]));
/* harmony default export */ var ResolvedView_AlertView = (AlertView_AlertView);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-render-image/dist/cjs/index.js
var cjs = __webpack_require__(991);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/image.js
var glyph_image = __webpack_require__(967);
var image_default = /*#__PURE__*/__webpack_require__.n(glyph_image);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/PreviewView/NoImageIcon.js

// TODO: This file should be removed as soon as we get the new Icons in @atlaskit/icon
// MD-33
/* harmony default export */ var NoImageIcon = (function () { return (react["createElement"]("svg", { width: "55px", height: "55px", viewBox: "0 0 55 55", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
    react["createElement"]("defs", null),
    react["createElement"]("g", { id: "Link---mvp-(no-social-footer)", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        react["createElement"]("g", { id: "link-2-line-title-without-image-loaded", transform: "translate(-195.000000, -139.000000)", fill: "currentColor" },
            react["createElement"]("g", { id: "Card-content---NYT-Copy-6", transform: "translate(32.000000, 32.000000)" },
                react["createElement"]("path", { d: "M167.775561,152.965565 L167.775561,117.798518 L167.775561,117.798518 C167.775561,114.472131 170.472131,111.775561 173.798518,111.775561 L173.798518,111.775561 L208.965565,111.775561 L212.859085,107.882042 L212.859085,107.882042 C214.03514,106.705986 215.941903,106.705986 217.117958,107.882042 L217.117958,107.882042 C218.294014,109.058097 218.294014,110.96486 217.117958,112.140915 L168.140915,161.117958 C166.96486,162.294014 165.058097,162.294014 163.882042,161.117958 C162.705986,159.941903 162.705986,158.03514 163.882042,156.859085 L163.882042,156.859085 L167.775561,152.965565 Z M185.482662,151.928604 L187.852083,151.928604 L207.928604,151.928604 L207.928604,144.701056 L200.68175,136.729517 L215.959213,121.452054 L215.959213,153.936257 L215.959213,153.936257 C215.959213,157.262644 213.262644,159.959213 209.936257,159.959213 L177.452054,159.959213 L185.482662,151.928604 Z M181.829126,131.852083 C185.155513,131.852083 187.852083,129.155513 187.852083,125.829126 C187.852083,122.502739 185.155513,119.80617 181.829126,119.80617 C178.502739,119.80617 175.80617,122.502739 175.80617,125.829126 C175.80617,129.155513 178.502739,131.852083 181.829126,131.852083 Z", id: "Combined-Shape-Copy-3" })))))); });
//# sourceMappingURL=NoImageIcon.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/PreviewView/styled.js




var borderRadius = "border-radius: 3px 3px 0 0;";
var PreviewView_styled_Wrapper = styled_components_browser_esm["default"].div(PreviewView_styled_templateObject_1 || (PreviewView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  position: relative;\n  height: 0;\n  padding-bottom: 56.25%;\n  color: ", ";\n  ", " background-color: ", ";\n  ", ";\n"], ["\n  position: relative;\n  height: 0;\n  padding-bottom: 56.25%;\n  color: ", ";\n  ", " background-color: ", ";\n  ", ";\n"])), _atlaskit_theme["colors"].N40A, borderRadius, _atlaskit_theme["colors"].N30, mixins["f" /* fadeIn */]);
var styled_IconWrapper = styled_components_browser_esm["default"].div(styled_templateObject_2 || (styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
var ImageWrapper = styled_components_browser_esm["default"].div(styled_templateObject_3 || (styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ", " ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ", " ",
    ";\n"])), borderRadius, function (_a) {
    var url = _a.url;
    return "\n    background-image: url(" + url + ");\n    background-repeat: no-repeat, repeat;\n    background-position: center, center;\n    background-size: cover, auto;\n  ";
});
var PreviewView_styled_templateObject_1, styled_templateObject_2, styled_templateObject_3;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/PreviewView/index.js






var LoadingView = function () { return (react["createElement"](styled_IconWrapper, null,
    react["createElement"](image_default.a, { size: "xlarge", label: "loading" }))); };
var NoImageView = function () { return (react["createElement"](styled_IconWrapper, null,
    react["createElement"](NoImageIcon, null))); };
var LoadedView = function (_a) {
    var url = _a.url;
    return (react["createElement"](ImageWrapper, { url: url }));
};
var PreviewView_PreviewView = /** @class */ (function (_super) {
    tslib_es6["__extends"](PreviewView, _super);
    function PreviewView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewView.prototype.renderContent = function () {
        var url = this.props.url;
        if (!url) {
            return react["createElement"](NoImageView, null);
        }
        return (react["createElement"](cjs_default.a, { src: url, loading: react["createElement"](LoadingView, null), loaded: react["createElement"](LoadedView, { url: url }), errored: react["createElement"](NoImageView, null) }));
    };
    PreviewView.prototype.render = function () {
        return react["createElement"](PreviewView_styled_Wrapper, null, this.renderContent());
    };
    return PreviewView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/components/Theme.js
var Theme = __webpack_require__(189);

// CONCATENATED MODULE: ./node_modules/@atlaskit/badge/components/Container.js


var Container = styled_components_browser_esm["default"].span(Container_templateObject_1 || (Container_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n  border-radius: 2em;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1;\n  min-width: 1px;\n  padding: 0.16666666666667em 0.5em;\n  text-align: center;\n"], ["\n  ",
    ";\n  border-radius: 2em;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1;\n  min-width: 1px;\n  padding: 0.16666666666667em 0.5em;\n  text-align: center;\n"])), function (props) { return "\n    background-color: " + props.backgroundColor + ";\n    color: " + props.textColor + ";\n  "; });
Container.displayName = 'Ak.Badge.Container';
/* harmony default export */ var components_Container = (Container);
var Container_templateObject_1;
//# sourceMappingURL=Container.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/badge/components/Format.js

var Fragment = react["Fragment"];
var Format = function (props) {
    var formatted = '';
    var _a = props.children, children = _a === void 0 ? 0 : _a, _b = props.max, max = _b === void 0 ? 0 : _b;
    if (children < 0) {
        children = 0;
    }
    if (max < 0) {
        max = 0;
    }
    if (max && max < children) {
        formatted = max + "+";
    }
    else if (children === Infinity) {
        formatted = '∞';
    }
    else {
        formatted = children;
    }
    return react["createElement"](Fragment, null, formatted);
};
Format.displayName = 'Ak.Badge.Format';
/* harmony default export */ var components_Format = (Format);
//# sourceMappingURL=Format.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/utils/createTheme.js
var createTheme = __webpack_require__(190);

// CONCATENATED MODULE: ./node_modules/@atlaskit/badge/theme.js


var backgroundColors = {
    added: { light: _atlaskit_theme["colors"].G50, dark: _atlaskit_theme["colors"].G50 },
    default: { light: _atlaskit_theme["colors"].N40, dark: _atlaskit_theme["colors"].DN70 },
    important: { light: _atlaskit_theme["colors"].R400, dark: _atlaskit_theme["colors"].R400 },
    primary: { light: _atlaskit_theme["colors"].B400, dark: _atlaskit_theme["colors"].B100 },
    /* Note that primary inverted is a temporary implementation. Once navigation has
    context of the nav location to pass down, this will be moved to the primary when
    viewed in a global context. */
    primaryInverted: { light: _atlaskit_theme["colors"].N0, dark: _atlaskit_theme["colors"].DN400 },
    removed: { light: _atlaskit_theme["colors"].R50, dark: _atlaskit_theme["colors"].R50 },
};
var textColors = {
    added: { light: _atlaskit_theme["colors"].G500, dark: _atlaskit_theme["colors"].G500 },
    default: { light: _atlaskit_theme["colors"].N800, dark: _atlaskit_theme["colors"].DN900 },
    important: { light: _atlaskit_theme["colors"].N0, dark: _atlaskit_theme["colors"].N0 },
    primary: { light: _atlaskit_theme["colors"].N0, dark: _atlaskit_theme["colors"].DN0 },
    primaryInverted: { light: _atlaskit_theme["colors"].B500, dark: _atlaskit_theme["colors"].DN0 },
    removed: { light: _atlaskit_theme["colors"].R500, dark: _atlaskit_theme["colors"].R500 },
};
var theme_Theme = Object(createTheme["a" /* createTheme */])(function (_a) {
    var appearance = _a.appearance, mode = _a.mode;
    if (typeof appearance === 'object') {
        return tslib_es6["__assign"]({ backgroundColor: backgroundColors.default.light, textColor: textColors.default.light }, appearance);
    }
    return {
        backgroundColor: backgroundColors[appearance][mode],
        textColor: textColors[appearance][mode],
    };
});
//# sourceMappingURL=theme.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/badge/components/index.js






var components_Badge = /** @class */ (function (_super) {
    tslib_es6["__extends"](Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO This can be removed when we remove support for onValueUpdated.
    Badge.prototype.componentWillUpdate = function (nextProps) {
        var _a = this.props, children = _a.children, onValueUpdated = _a.onValueUpdated, value = _a.value;
        var oldValue = children;
        var newValue = nextProps.children;
        // This allows us to still prefer the value prop to maintain backward
        // compatibility.
        if (value !== null) {
            oldValue = value;
        }
        if (nextProps.value !== null) {
            newValue = nextProps.value;
        }
        if (onValueUpdated && newValue !== oldValue) {
            onValueUpdated({ oldValue: oldValue, newValue: newValue });
        }
    };
    Badge.prototype.render = function () {
        var _a = this.props, theme = _a.theme, appearance = _a.appearance, children = _a.children, max = _a.max, value = _a.value;
        return (react["createElement"](theme_Theme.Provider, { value: theme },
            react["createElement"](Theme["a" /* default */].Consumer, null, function (_a) {
                var mode = _a.mode;
                return (react["createElement"](theme_Theme.Consumer, { appearance: appearance, mode: mode }, function (tokens) { return (react["createElement"](components_Container, tslib_es6["__assign"]({}, tokens), typeof children === 'string' ? (children) : (react["createElement"](components_Format, { max: max }, value || children)))); }));
            })));
    };
    Badge.displayName = 'Ak.Badge';
    Badge.defaultProps = {
        appearance: 'default',
        children: 0,
        max: 99,
        onValueUpdated: function () { },
        value: undefined,
    };
    return Badge;
}(react["Component"]));
/* harmony default export */ var components = (components_Badge);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/lozenge/Lozenge/index.js + 3 modules
var Lozenge = __webpack_require__(932);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/Widgets/styled.js




var widgetHeight = 24;
var Widgets_styled_Wrapper = styled_components_browser_esm["default"].div(Widgets_styled_templateObject_1 || (Widgets_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  margin-top: 3px;\n\n  max-height: ", "px;\n  overflow: hidden;\n\n  & > * {\n    margin-right: 12px;\n  }\n  & > *:last-child {\n    margin-right: auto;\n  }\n"], ["\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  margin-top: 3px;\n\n  max-height: ", "px;\n  overflow: hidden;\n\n  & > * {\n    margin-right: 12px;\n  }\n  & > *:last-child {\n    margin-right: auto;\n  }\n"])), widgetHeight * 2);
var WidgetWrapper = styled_components_browser_esm["default"].div(Widgets_styled_templateObject_2 || (Widgets_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: ", "px;\n  max-width: calc(100% - (2 * 12px));\n"], ["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: ", "px;\n  max-width: calc(100% - (2 * 12px));\n"])), widgetHeight);
var WidgetDetails = styled_components_browser_esm["default"].div(Widgets_styled_templateObject_3 || (Widgets_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n\n  /* space the widget items */\n  & > * + * {\n    margin-left: 4px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  /* space the widget items */\n  & > * + * {\n    margin-left: 4px;\n  }\n"])));
var Title = styled_components_browser_esm["default"].div(styled_templateObject_4 || (styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"], ["\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"])), _atlaskit_theme["colors"].N300, 16 / 12);
var Text = styled_components_browser_esm["default"].div(styled_templateObject_5 || (styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"], ["\n  ", ";\n  color: ", ";\n  font-size: 12px;\n  line-height: ", ";\n"])), Object(mixins["e" /* ellipsis */])('none'), _atlaskit_theme["colors"].N800, 16 / 12);
var Widgets_styled_templateObject_1, Widgets_styled_templateObject_2, Widgets_styled_templateObject_3, styled_templateObject_4, styled_templateObject_5;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/Widgets/index.js







var Widgets_Widgets = /** @class */ (function (_super) {
    tslib_es6["__extends"](Widgets, _super);
    function Widgets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Widgets.prototype.renderTitle = function (title) {
        return react["createElement"](Title, { key: "title" },
            title,
            ":");
    };
    Widgets.prototype.renderIcon = function (icon) {
        if (typeof icon === 'string') {
            return react["createElement"](ImageIcon["a" /* ImageIcon */], { key: "icon", src: icon, size: 16 });
        }
        else {
            return icon;
        }
    };
    Widgets.prototype.renderBadge = function (badge) {
        return (react["createElement"](components, { key: "badge", appearance: badge.appearance || 'default', value: badge.value, max: badge.max }));
    };
    Widgets.prototype.renderLozenge = function (lozenge) {
        return (react["createElement"](Lozenge["a" /* default */], { key: "lozenge", appearance: lozenge.appearance || 'default', isBold: lozenge.isBold }, lozenge.text));
    };
    Widgets.prototype.renderText = function (text) {
        return react["createElement"](Text, { key: "text" }, text);
    };
    Widgets.prototype.renderWidgetDetails = function (attrs, tooltip) {
        if (tooltip) {
            return (react["createElement"](Tooltip["a" /* default */], { content: tooltip },
                react["createElement"](WidgetDetails, null, attrs)));
        }
        else {
            return react["createElement"](WidgetDetails, null, attrs);
        }
    };
    Widgets.prototype.renderWidget = function (key, detail) {
        var title = detail.title, text = detail.text, icon = detail.icon, badge = detail.badge, lozenge = detail.lozenge, tooltip = detail.tooltip;
        var attrs = [];
        if (title) {
            attrs.push(this.renderTitle(title));
        }
        if (icon) {
            attrs.push(this.renderIcon(icon));
        }
        if (badge) {
            attrs.push(this.renderBadge(badge));
        }
        if (lozenge) {
            attrs.push(this.renderLozenge(lozenge));
        }
        if (text) {
            attrs.push(this.renderText(text));
        }
        if (attrs.length === 0) {
            // eslint-disable-next-line
            console.warn("Widgets: A widget doesn't contain any supported attributes: " + JSON.stringify(attrs, null, 2));
            return null;
        }
        return (react["createElement"](WidgetWrapper, { key: key }, this.renderWidgetDetails(attrs, tooltip)));
    };
    Widgets.prototype.render = function () {
        var _this = this;
        var _a = this.props.details, details = _a === void 0 ? [] : _a;
        if (details.length === 0) {
            return null;
        }
        return (react["createElement"](Widgets_styled_Wrapper, null, details.map(function (detail, index) { return _this.renderWidget(index, detail); })));
    };
    return Widgets;
}(react["Component"]));
/* harmony default export */ var ResolvedView_Widgets = (Widgets_Widgets);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/styled.js




var thumbnailWidth = 40;
var maxAvatarCount = 6;
var ContentWrapper = styled_components_browser_esm["default"].div(ResolvedView_styled_templateObject_1 || (ResolvedView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 8px 12px 12px 12px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 8px 12px 12px 12px;\n"])));
var LeftWrapper = styled_components_browser_esm["default"].div(ResolvedView_styled_templateObject_2 || (ResolvedView_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  /* FIXME: top padding dependent on content */\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 4px;\n  margin-right: 8px;\n  min-width: ", "px;\n"], ["\n  /* FIXME: top padding dependent on content */\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 4px;\n  margin-right: 8px;\n  min-width: ", "px;\n"])), thumbnailWidth);
var RightWrapper = styled_components_browser_esm["default"].div(ResolvedView_styled_templateObject_3 || (ResolvedView_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  flex-grow: 1;\n  min-width: 0; /* for Chrome ellipsis */\n  flex-basis: 0; /* for IE ellipsis */\n"], ["\n  flex-grow: 1;\n  min-width: 0; /* for Chrome ellipsis */\n  flex-basis: 0; /* for IE ellipsis */\n"])));
var FooterWrapper = styled_components_browser_esm["default"].div(ResolvedView_styled_templateObject_4 || (ResolvedView_styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  margin-top: 8px;\n"], ["\n  display: flex;\n  margin-top: 8px;\n"])));
var styled_Title = styled_components_browser_esm["default"].div(ResolvedView_styled_templateObject_5 || (ResolvedView_styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"])), _atlaskit_theme["colors"].N900, 20 / 16, 20 * 4);
var Byline = styled_components_browser_esm["default"].div(styled_templateObject_6 || (styled_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 4px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  ", ";\n"], ["\n  margin-top: 4px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  ", ";\n"])), _atlaskit_theme["colors"].N300, 16 / 12, Object(mixins["e" /* ellipsis */])('100%'));
var Description = styled_components_browser_esm["default"].div(styled_templateObject_7 || (styled_templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 7px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"], ["\n  margin-top: 7px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  max-height: ", "px;\n  overflow: hidden;\n"])), _atlaskit_theme["colors"].N800, 18 / 12, 18 * 3);
var ResolvedView_styled_IconWrapper = styled_components_browser_esm["default"].div(templateObject_8 || (templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 4px;\n"], ["\n  margin-top: 4px;\n"])));
var Thumbnail = styled_components_browser_esm["default"].div(templateObject_9 || (templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " float: right;\n  margin: 4px 0 12px 12px;\n  background-color: ", ";\n  background-image: url(", ");\n  background-size: cover;\n"], ["\n  ", " ", " float: right;\n  margin: 4px 0 12px 12px;\n  background-color: ", ";\n  background-image: url(", ");\n  background-size: cover;\n"])), mixins["b" /* borderRadius */], Object(mixins["g" /* size */])(48), _atlaskit_theme["colors"].N30, function (_a) {
    var src = _a.src;
    return src;
});
var UsersWrapper = styled_components_browser_esm["default"].div(templateObject_10 || (templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"])));
var ActionsWrapper = styled_components_browser_esm["default"].div(templateObject_11 || (templateObject_11 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 8px;\n  text-align: right;\n\n  > * {\n    margin-top: 4px;\n  }\n\n  > * + * {\n    margin-left: 4px;\n  }\n"], ["\n  margin-top: 8px;\n  text-align: right;\n\n  > * {\n    margin-top: 4px;\n  }\n\n  > * + * {\n    margin-left: 4px;\n  }\n"])));
var AlertWrapper = styled_components_browser_esm["default"].div(templateObject_12 || (templateObject_12 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  /* z-index has to be 1 higher than the number of avatars in the avatar stack */\n  z-index: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  /* z-index has to be 1 higher than the number of avatars in the avatar stack */\n  z-index: ", ";\n"])), maxAvatarCount + 1);
var ResolvedView_styled_templateObject_1, ResolvedView_styled_templateObject_2, ResolvedView_styled_templateObject_3, ResolvedView_styled_templateObject_4, ResolvedView_styled_templateObject_5, styled_templateObject_6, styled_templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map
// EXTERNAL MODULE: ./node_modules/react-transition-group/Transition.js
var react_transition_group_Transition = __webpack_require__(411);
var Transition_default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/Transition.js



var styles = {
    enter: {
        fade: {
            entering: {
                opacity: '0',
            },
            entered: {
                opacity: '1',
            },
        },
        'slide-up': {
            entering: {
                transform: 'translate(0, 100%)',
            },
            entered: {
                transform: 'translate(0, 0)',
            },
        },
    },
    exit: {
        fade: {
            exiting: {
                opacity: '1',
            },
            exited: {
                opacity: '0',
            },
        },
        'slide-down': {
            exiting: {
                transform: 'translate(0, 0)',
            },
            exited: {
                transform: 'translate(0, 100%)',
            },
        },
    },
};
function getStyle(type, name, state) {
    return (styles && styles[type] && styles[type][name] && styles[type][name][state]);
}
var Transition_Transition = /** @class */ (function (_super) {
    tslib_es6["__extends"](Transition, _super);
    function Transition(props) {
        var _this = _super.call(this, props) || this;
        _this.handleExited = function () {
            var _a = _this.props, timeout = _a.timeout, children = _a.children;
            window.setTimeout(function () {
                return _this.setState({
                    visible: false,
                    children: children,
                });
            }, timeout); // FIXME: hmm not sure why we have to wait - it should have already finished
        };
        _this.state = {
            visible: props.children !== null,
            children: props.children,
        };
        return _this;
    }
    Transition.prototype.componentWillReceiveProps = function (nextProps) {
        var nextChildren = nextProps.children;
        var prevChildren = this.props.children;
        // when exiting, show the old element until the transition is finished - otherwise the Alert changes mid-transition
        if (nextChildren !== prevChildren) {
            if (nextChildren === null) {
                this.setState({
                    visible: false,
                });
            }
            else {
                this.setState({
                    visible: true,
                    children: nextChildren,
                });
            }
        }
    };
    Transition.prototype.getStyle = function (status) {
        var _a = this.props, _b = _a.enter, enter = _b === void 0 ? [] : _b, _c = _a.exit, exit = _c === void 0 ? [] : _c, timeout = _a.timeout;
        if (status === 'entering') {
            return enter.reduce(function (accum, name) { return (tslib_es6["__assign"]({}, accum, getStyle('enter', name, 'entering'))); }, {});
        }
        if (status === 'entered') {
            return tslib_es6["__assign"]({}, enter.reduce(function (accum, name) { return (tslib_es6["__assign"]({}, accum, getStyle('enter', name, 'entering'))); }, {}), enter.reduce(function (accum, name) { return (tslib_es6["__assign"]({}, accum, getStyle('enter', name, 'entered'))); }, {}), { transition: "all " + timeout + "ms ease-in-out" });
        }
        if (status === 'exiting') {
            return tslib_es6["__assign"]({}, exit.reduce(function (accum, name) { return (tslib_es6["__assign"]({}, accum, getStyle('exit', name, 'exiting'))); }, {}));
        }
        if (status === 'exited') {
            return tslib_es6["__assign"]({}, exit.reduce(function (accum, name) { return (tslib_es6["__assign"]({}, accum, getStyle('exit', name, 'exiting'))); }, {}), exit.reduce(function (accum, name) { return (tslib_es6["__assign"]({}, accum, getStyle('exit', name, 'exited'))); }, {}), { transition: "all " + timeout + "ms ease-in-out" });
        }
        return {};
    };
    Transition.prototype.render = function () {
        var _this = this;
        var timeout = this.props.timeout;
        var _a = this.state, visible = _a.visible, children = _a.children;
        return (react["createElement"](Transition_default.a, { appear: true, enter: true, exit: true, in: visible, timeout: timeout, onExited: this.handleExited }, function (status) {
            if (children) {
                return react["cloneElement"](children, {
                    style: _this.getStyle(status),
                });
            }
            else {
                return children;
            }
        }));
    };
    return Transition;
}(react["Component"]));
/* harmony default export */ var ResolvedView_Transition = (Transition_Transition);
//# sourceMappingURL=Transition.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolvedView_BlockCardResolvedView; });















function getActionPendingState(action) {
    return function (state) {
        var _a;
        return ({
            pendingActionsById: tslib_es6["__assign"]({}, state.pendingActionsById, (_a = {}, _a[action.id] = true, _a)),
        });
    };
}
function getActionSuccessState(action, message) {
    return function (state) {
        var _a;
        return ({
            pendingActionsById: tslib_es6["__assign"]({}, state.pendingActionsById, (_a = {}, _a[action.id] = false, _a)),
            alert: message
                ? {
                    type: 'success',
                    text: message,
                }
                : state.alert,
        });
    };
}
function getActionFailureState(action, message) {
    return function (state) {
        var _a;
        return ({
            lastFailedAction: action,
            pendingActionsById: tslib_es6["__assign"]({}, state.pendingActionsById, (_a = {}, _a[action.id] = false, _a)),
            alert: message
                ? {
                    type: 'failure',
                    text: message,
                }
                : state.alert,
        });
    };
}
function clearActionSuccessState() {
    return {
        alert: undefined,
    };
}
function clearActionFailureState() {
    return {
        lastFailedAction: undefined,
        alert: undefined,
    };
}
var ResolvedView_BlockCardResolvedView = /** @class */ (function (_super) {
    tslib_es6["__extends"](BlockCardResolvedView, _super);
    function BlockCardResolvedView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pendingActionsById: {},
        };
        /* prevent the parent link handler from opening a URL when clicked */
        _this.handleAvatarClick = function (_a) {
            var event = _a.event;
            event.preventDefault();
            event.stopPropagation();
        };
        /* prevent the parent link handler from opening a URL when clicked */
        /* NOTE: this prevents the dropdown from showing with more items */
        _this.handleMoreAvatarsClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        _this.createActionHandler = function (action) {
            return function (event) {
                /* prevent the parent handler from opening a URL when clicked */
                event.preventDefault();
                event.stopPropagation();
                // prevent the next alert from being cleared by any previous success alerts that haven't already been cleared
                if (_this.alertTimeout) {
                    clearTimeout(_this.alertTimeout);
                }
                // handle the action
                action.handler(_this.getActionHandlerCallbacks(action));
            };
        };
        _this.handleActionRetry = function () {
            var lastFailedAction = _this.state.lastFailedAction;
            if (lastFailedAction) {
                lastFailedAction.handler(_this.getActionHandlerCallbacks(lastFailedAction));
            }
        };
        _this.handleActionDismis = function () {
            _this.setState(clearActionFailureState());
        };
        return _this;
    }
    BlockCardResolvedView.prototype.getActionHandlerCallbacks = function (action) {
        var _this = this;
        return {
            pending: function () { return _this.setState(getActionPendingState(action)); },
            success: function (message) {
                _this.setState(getActionSuccessState(action, message), function () {
                    // hide the alert after 2s
                    _this.alertTimeout = window.setTimeout(function () { return _this.setState(clearActionSuccessState()); }, 2000);
                });
            },
            failure: function () {
                return _this.setState(getActionFailureState(action, 'Something went wrong.'));
            },
        };
    };
    BlockCardResolvedView.prototype.componentWillUnmount = function () {
        // prevent the alert from being cleared and unmounted
        if (this.alertTimeout) {
            clearTimeout(this.alertTimeout);
        }
    };
    BlockCardResolvedView.prototype.renderIcon = function () {
        var icon = this.props.icon;
        if (!icon) {
            return null;
        }
        if (icon.url) {
            // TODO: handle if there is an error loading the image -> show the placeholder
            return (react["createElement"](ResolvedView_styled_IconWrapper, null,
                react["createElement"](Tooltip["a" /* default */], { content: icon.tooltip },
                    react["createElement"](ImageIcon["a" /* ImageIcon */], { src: icon.url, size: 24 }))));
        }
        return icon;
    };
    BlockCardResolvedView.prototype.renderThumbnail = function () {
        var thumbnail = this.props.thumbnail;
        if (!thumbnail) {
            return null;
        }
        // TODO: handle if there is an error loading the image -> show the placeholder
        return react["createElement"](Thumbnail, { src: thumbnail });
    };
    BlockCardResolvedView.prototype.renderUser = function () {
        var user = this.props.user;
        if (!user) {
            return null;
        }
        return react["createElement"](Avatar["a" /* default */], { size: "medium", src: user.icon, name: user.name });
    };
    BlockCardResolvedView.prototype.renderUsers = function () {
        var _a = this.props.users, users = _a === void 0 ? [] : _a;
        if (users.length === 0) {
            return null;
        }
        return (react["createElement"](UsersWrapper, null,
            react["createElement"](AvatarGroup["a" /* default */], { maxCount: maxAvatarCount, appearance: "stack", size: "small", data: users.map(function (user) { return ({
                    name: user.name,
                    src: user.icon,
                    size: 'small',
                }); }), onAvatarClick: this.handleAvatarClick, onMoreClick: this.handleMoreAvatarsClick })));
    };
    BlockCardResolvedView.prototype.renderActions = function () {
        var _this = this;
        var _a = this.props.actions, actions = _a === void 0 ? [] : _a;
        var _b = this.state, alert = _b.alert, pendingActionsById = _b.pendingActionsById;
        if (!actions.length) {
            return null;
        }
        var isAnyActionFailed = alert && alert.type === 'failure';
        return (react["createElement"](ActionsWrapper, null, actions.slice(0, 3).map(function (action) {
            var id = action.id, text = action.text;
            var isPending = pendingActionsById[id];
            return (react["createElement"](Button["a" /* default */], { key: id, spacing: "compact", isDisabled: isPending || isAnyActionFailed, isLoading: isPending, onClick: _this.createActionHandler(action) }, text));
        })));
    };
    BlockCardResolvedView.prototype.renderAlert = function () {
        var alert = this.state.alert;
        return (react["createElement"](AlertWrapper, null,
            react["createElement"](ResolvedView_Transition, { enter: ['fade', 'slide-up'], exit: ['fade', 'slide-down'], timeout: 300 }, alert ? (react["createElement"](ResolvedView_AlertView, { type: alert.type === 'success' ? 'success' : 'failure', text: alert.text, onRetry: this.handleActionRetry, onDismis: this.handleActionDismis })) : null)));
    };
    BlockCardResolvedView.prototype.renderWithToolTip = function (Elem, model) {
        if (model.tooltip) {
            return (react["createElement"](Tooltip["a" /* default */], { content: model.tooltip },
                react["createElement"](Elem, null, model.text)));
        }
        else {
            return react["createElement"](Elem, null, model.text);
        }
    };
    BlockCardResolvedView.prototype.render = function () {
        var _a = this.props, link = _a.link, context = _a.context, title = _a.title, byline = _a.byline, description = _a.description, icon = _a.icon, user = _a.user, preview = _a.preview, details = _a.details, onClick = _a.onClick, isSelected = _a.isSelected;
        return (react["createElement"](ExpandedFrame_ExpandedFrame, { minWidth: dimensions["b" /* minWidth */], maxWidth: dimensions["a" /* maxWidth */], isSelected: isSelected, href: link, icon: react["createElement"](ImageIcon["a" /* ImageIcon */], { src: context && context.icon, default: react["createElement"](link_default.a, { label: "icon", size: "small" }) }), text: context && context.text, onClick: onClick },
            preview && react["createElement"](PreviewView_PreviewView, { url: preview }),
            react["createElement"](ContentWrapper, null,
                this.renderAlert(),
                (icon || user) && (react["createElement"](LeftWrapper, null,
                    this.renderIcon(),
                    !icon && this.renderUser())),
                react["createElement"](RightWrapper, null,
                    this.renderThumbnail(),
                    title && title.text && this.renderWithToolTip(styled_Title, title),
                    !byline ? null : !byline.text ? (react["createElement"](Byline, null, byline)) : (this.renderWithToolTip(Byline, byline)),
                    description &&
                        description.text &&
                        this.renderWithToolTip(Description, description),
                    react["createElement"](ResolvedView_Widgets, { details: details }),
                    this.renderUsers(),
                    this.renderActions()))));
    };
    return BlockCardResolvedView;
}(react["Component"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Generic16Icon = function Generic16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#5E6C84\" fill-rule=\"evenodd\" d=\"M8 3H5.333C4.597 3 4 3.617 4 4.378v7.244C4 12.382 4.597 13 5.333 13h5.334c.736 0 1.333-.617 1.333-1.378V8h-1.333v3.622H5.333V4.378H8v1.414c0 .736.597 1.333 1.333 1.333h2.334c.184 0 .333-.15.333-.333v-.903a.333.333 0 0 0-.093-.231l-2.164-2.25A1.333 1.333 0 0 0 8.782 3H8zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Generic16Icon.displayName = 'Generic16Icon';
var _default = Generic16Icon;
exports.default = _default;

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(563);

var _interopRequireDefault = __webpack_require__(394);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = exports.default = exports.IconWrapper = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(21));

var _createClass2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(23));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(20));

var _inherits2 = _interopRequireDefault(__webpack_require__(24));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _styledComponents = _interopRequireDefault(__webpack_require__(3));

var _theme = __webpack_require__(2);

var sizes = {
  small: {
    height: '16px',
    width: '16px'
  },
  medium: {
    height: '24px',
    width: '24px'
  },
  xlarge: {
    height: '64px',
    width: '48px'
  }
};

var getSize = function getSize(props) {
  if (props.size) {
    return "height: ".concat(sizes[props.size].height, "; width: ").concat(sizes[props.size].width, ";");
  }

  return null;
};

var IconWrapper = _styledComponents.default.span.withConfig({
  displayName: "Icon__IconWrapper",
  componentId: "sc-1wxtf9c-0"
})(["\n  ", " color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", " max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"], getSize, function (p) {
  return p.primaryColor || 'currentColor';
}, function (p) {
  return p.secondaryColor || _theme.colors.background;
}, getSize);

exports.IconWrapper = IconWrapper;

var Icon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck2.default)(this, Icon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dangerouslySetGlyph = _this$props.dangerouslySetGlyph,
          size = _this$props.size;
      return _react.default.createElement(IconWrapper, {
        size: size,
        "aria-label": this.props.label,
        dangerouslySetInnerHTML: {
          __html: dangerouslySetGlyph
        }
      });
    }
  }]);
  return Icon;
}(_react.Component);

exports.default = Icon;
var size = Object.keys(sizes).reduce(function (p, c) {
  return Object.assign(p, (0, _defineProperty2.default)({}, c, c));
}, {});
exports.size = size;

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(563);

var _interopRequireDefault = __webpack_require__(394);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = exports.default = exports.IconWrapper = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(21));

var _createClass2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(23));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(20));

var _inherits2 = _interopRequireDefault(__webpack_require__(24));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _styledComponents = _interopRequireDefault(__webpack_require__(3));

var _theme = __webpack_require__(2);

var sizes = {
  small: {
    height: '16px',
    width: '16px'
  },
  medium: {
    height: '24px',
    width: '24px'
  }
};

var getSize = function getSize(props) {
  if (props.size) {
    return "height: ".concat(sizes[props.size].height, "; width: ").concat(sizes[props.size].width, ";");
  }

  return null;
};

var IconWrapper = _styledComponents.default.span.withConfig({
  displayName: "Icon__IconWrapper",
  componentId: "zi76n5-0"
})(["\n  ", " color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", " max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"], getSize, function (p) {
  return p.primaryColor || 'currentColor';
}, function (p) {
  return p.secondaryColor || _theme.colors.background;
}, getSize);

exports.IconWrapper = IconWrapper;

var Icon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck2.default)(this, Icon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dangerouslySetGlyph = _this$props.dangerouslySetGlyph,
          size = _this$props.size;
      return _react.default.createElement(IconWrapper, {
        size: size,
        "aria-label": this.props.label,
        dangerouslySetInnerHTML: {
          __html: dangerouslySetGlyph
        }
      });
    }
  }]);
  return Icon;
}(_react.Component);

exports.default = Icon;
var size = Object.keys(sizes).reduce(function (p, c) {
  return Object.assign(p, (0, _defineProperty2.default)({}, c, c));
}, {});
exports.size = size;

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconAndTitleLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(965);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(966);




var CHAR_LENGTH_BREAK_AT = 7;
var IconAndTitleLayout = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconAndTitleLayout, _super);
    function IconAndTitleLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconAndTitleLayout.prototype.renderIcon = function () {
        var icon = this.props.icon;
        // We render two kinds of icons here:
        // - Image: acquired from either DAC or Teamwork Platform Apps;
        // - Atlaskit Icon: an Atlaskit SVG;
        // Each of these are scaled down to 12x12.
        if (icon) {
            if (typeof icon === 'string') {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__[/* Icon */ "b"], { src: icon });
            }
            else {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__[/* IconWrapper */ "c"], null, icon);
            }
        }
        return null;
    };
    IconAndTitleLayout.prototype.render = function () {
        var _a = this.props, title = _a.title, titleColor = _a.titleColor;
        var head = title.slice(0, CHAR_LENGTH_BREAK_AT);
        var rest = title.slice(CHAR_LENGTH_BREAK_AT);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__[/* IconTitleWrapper */ "b"], { style: { color: titleColor } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__[/* IconTitleHeadNoBreakWrapper */ "a"], null,
                    this.renderIcon(),
                    head),
                rest)));
    };
    return IconAndTitleLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return maxWidth; });
var minWidth = 200;
var maxWidth = 400;
//# sourceMappingURL=dimensions.js.map

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(105)))

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IconObjectOverrides */
/* unused harmony export IconOverrides */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IconTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconTitleHeadNoBreakWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LozengeWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


// TODO: remove this override behaviour for @atlaskit/icon-object
var IconObjectOverrides = "\n  & > span {\n    height: 100%;\n    width: 14px;\n    & > svg {\n      vertical-align: top;\n    }\n  }\n";
// TODO: remove this override behaviour for @atlaskit/icon
var IconOverrides = "\n  & > span > span {\n    height: 100%;\n    width: 14px;\n    & > svg {\n      vertical-align: top;\n    }\n  }\n";
// Wraps all icons represented in Inline Links. Icons have three sources/types:
// - JSON-LD: from the generator.icon property coming back from ORS.
// - @atlaskit/icon: for lock icons, unauthorized, etc.
// - @atlaskit/icon-object: for object icons, e.g. repository, branch, etc.
// NB: the first set of overrides style icons imported from @atlaskit/icon-object correctly.
// NB: the second set of overrides style icons imported from @atlaskit/icon correctly.
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  margin-right: 4px;\n  user-select: none;\n  ", "\n  ", "\n"], ["\n  margin-right: 4px;\n  user-select: none;\n  ", "\n  ", "\n"])), IconOverrides, IconObjectOverrides);
// The main 'wrapping' element, title of the content.
// NB: `white-space` adds little whitespace before wrapping.
// NB: `hyphens` enables hyphenation on word break.
var IconTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n  hyphens: auto;\n"], ["\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n  hyphens: auto;\n"])));
var IconTitleHeadNoBreakWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  white-space: nowrap;\n  overflow-wrap: break-word;\n  min-width: 8ch;\n"], ["\n  white-space: nowrap;\n  overflow-wrap: break-word;\n  min-width: 8ch;\n"])));
// TODO: Replace overrides with proper AtlasKit solution.
var LozengeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  display: inline-block;\n  vertical-align: text-bottom;\n  & > span {\n    margin-left: 4px;\n    padding: 2px 0 1px 0;\n  }\n"], ["\n  display: inline-block;\n  vertical-align: text-bottom;\n  & > span {\n    margin-left: 4px;\n    padding: 2px 0 1px 0;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AKIconWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


// TODO: Figure out a more scalable/responsive solution
// for vertical alignment.
// Current rationale: vertically positioned at the top of
// the smart card container (when set to 0). Offset this
// to position it with appropriate whitespace from the top.
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  height: 14px;\n  width: 14px;\n  margin-right: 4px;\n  border-radius: 2px;\n  user-select: none;\n  vertical-align: text-bottom;\n"], ["\n  height: 14px;\n  width: 14px;\n  margin-right: 4px;\n  border-radius: 2px;\n  user-select: none;\n  vertical-align: text-bottom;\n"])));
// Used for 'untrue' icons which claim to be 16x16 but
// are less than that in height/width.
// TODO: Replace this override with proper AtlasKit solution.
var AKIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  margin-right: -2px;\n"], ["\n  margin-right: -2px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Icon.js.map

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ImageIcon = function ImageIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM10.5 16.5L9 15l-3 3h12v-2.7L15 12l-4.5 4.5zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

ImageIcon.displayName = 'ImageIcon';
var _default = ImageIcon;
exports.default = _default;

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-render-image/dist/cjs/index.js
var cjs = __webpack_require__(991);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/mixins.js
var mixins = __webpack_require__(395);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ImageIcon/styled.js



var Image = styled_components_browser_esm["default"].img(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", " ", ";\n\n  /* hide the alt text when the image cannot be found */\n  overflow: hidden;\n"], ["\n  ", " ", ";\n\n  /* hide the alt text when the image cannot be found */\n  overflow: hidden;\n"])), function (_a) {
    var size = _a.size;
    return Object(mixins["g" /* size */])(size);
}, mixins["b" /* borderRadius */]);
var templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ImageIcon/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageIcon_ImageIcon; });




var ImageIcon_ImageIcon = /** @class */ (function (_super) {
    tslib_es6["__extends"](ImageIcon, _super);
    function ImageIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageIcon.prototype.render = function () {
        var _a = this.props, _b = _a.alt, alt = _b === void 0 ? '' : _b, src = _a.src, _c = _a.size, size = _c === void 0 ? 16 : _c, title = _a.title;
        if (!src) {
            return this.props.default || null;
        }
        return (react["createElement"](cjs_default.a, { src: src, loading: this.props.default, loaded: react["createElement"](Image, { src: src, alt: alt, size: size, title: title }), errored: this.props.default }));
    };
    return ImageIcon;
}(react["Component"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genericExtractPropsFromJSONLD; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function genericExtractPropsFromJSONLD(options) {
    var e_1, _a;
    var defaultExtractorFunction = options.defaultExtractorFunction, extractorPrioritiesByType = options.extractorPrioritiesByType, extractorFunctionsByType = options.extractorFunctionsByType, json = options.json;
    if (json) {
        var type = json['@type'];
        if (type && Array.isArray(type)) {
            var highestPriority = 0;
            var highestPriorityExtractorFunction = defaultExtractorFunction;
            try {
                for (var type_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](type), type_1_1 = type_1.next(); !type_1_1.done; type_1_1 = type_1.next()) {
                    var t = type_1_1.value;
                    if (extractorPrioritiesByType[t] > highestPriority) {
                        highestPriority = extractorPrioritiesByType[t];
                        highestPriorityExtractorFunction = extractorFunctionsByType[t];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (type_1_1 && !type_1_1.done && (_a = type_1.return)) _a.call(type_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return highestPriorityExtractorFunction(json);
        }
        if (type && extractorFunctionsByType[type]) {
            return extractorFunctionsByType[type](json);
        }
    }
    return defaultExtractorFunction(json);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(935));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Task16Icon = function Task16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#2684FF\" fill-rule=\"evenodd\" d=\"M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994zM4.667 3C3.747 3 3 3.746 3 4.667v6.666C3 12.253 3.746 13 4.667 13h6.666c.92 0 1.667-.746 1.667-1.667V4.667C13 3.747 12.254 3 11.333 3H4.667zM5 5v6h6V5H5z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Task16Icon.displayName = 'Task16Icon';
var _default = Task16Icon;
exports.default = _default;

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CommentIcon = function CommentIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M4.998 11.513c0-3.038 3.141-5.51 7.002-5.51 3.861 0 7.002 2.472 7.002 5.51 0 3.039-3.141 5.51-7.002 5.51-3.861 0-7.002-2.471-7.002-5.51zm14.84 7.771v-.002s-1.564-2.26-.767-3.116l-.037.02C20.261 14.902 21 13.279 21 11.513 21 7.371 16.963 4 12 4s-9 3.37-9 7.513 4.037 7.514 9 7.514c1.42 0 2.76-.285 3.957-.776 1.003 1.022 2.287 1.572 3.24 1.719l.002-.003a.524.524 0 0 0 .164.033.515.515 0 0 0 .474-.716z\"/><rect x=\"7\" y=\"9\" width=\"10\" height=\"2\" rx=\"1\"/><rect x=\"7\" y=\"12\" width=\"5\" height=\"2\" rx=\"1\"/></g></svg>"
  }, props));
};

CommentIcon.displayName = 'CommentIcon';
var _default = CommentIcon;
exports.default = _default;

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GoogleSheet24Icon = function GoogleSheet24Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"#0A9D58\" fill-rule=\"evenodd\" d=\"M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm12.049 5l-5.422.055 4.677 8.15 5.422-.055L15.049 5zM4 14.108l2.757 4.697 4.677-8.15-2.757-4.697L4 14.108zm6.646.141L7.982 19h9.354L20 14.249h-9.354z\"/></svg>"
  }, props, {
    size: "medium"
  }));
};

GoogleSheet24Icon.displayName = 'GoogleSheet24Icon';
var _default = GoogleSheet24Icon;
exports.default = _default;

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loading(image) {
  return {
    image: image,
    isLoaded: false,
    isErrored: false
  };
}

function loaded() {
  return {
    isLoaded: true
  };
}

function errored() {
  return {
    isErrored: true
  };
}

function hasPropsChanged(prevProps, nextProps) {
  var prevSrc = prevProps.src;
  var nextSrc = nextProps.src;

  return prevSrc !== nextSrc;
}

var ImageRenderer = function (_React$Component) {
  _inherits(ImageRenderer, _React$Component);

  function ImageRenderer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageRenderer.__proto__ || Object.getPrototypeOf(ImageRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoaded: false,
      isErrored: false
    }, _this.handleLoad = function () {
      var onLoad = _this.props.onLoad;

      _this.unload();
      _this.setState(loaded(), function () {
        if (onLoad) {
          onLoad();
        }
      });
    }, _this.handleError = function () {
      var onError = _this.props.onError;

      _this.unload();
      _this.setState(errored(), function () {
        if (onError) {
          onError();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageRenderer, [{
    key: 'load',
    value: function load() {
      var src = this.props.src;
      var image = this.state.image;


      if (image) {
        image.onload = this.handleLoad;
        image.onerror = this.handleError;
        image.src = src;
      }
    }
  }, {
    key: 'unload',
    value: function unload() {
      var image = this.state.image;

      if (image) {
        image.onload = undefined;
        image.onerror = undefined;
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window === 'undefined') {
        return;
      }
      this.setState(loading(new Image()));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (hasPropsChanged(this.props, nextProps)) {
        this.setState(loading(new Image()));
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (hasPropsChanged(prevProps, this.props)) {
        this.unload();
        this.load();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unload();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          loaded = _props.loaded,
          errored = _props.errored,
          children = _props.children;
      var _state = this.state,
          image = _state.image,
          isLoaded = _state.isLoaded,
          isErrored = _state.isErrored;


      if (isLoaded && loaded) {
        return loaded;
      }

      if (isErrored && errored) {
        return errored;
      }

      if (!isLoaded && !isErrored && loading) {
        return loading;
      }

      if (children) {
        return children({
          image: isLoaded ? image : undefined,
          loaded: isLoaded,
          errored: isErrored
        });
      }

      return null;
    }
  }]);

  return ImageRenderer;
}(React.Component);

exports.default = ImageRenderer;

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ellipsify; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_3__);




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var inline = _a.inline;
    return (inline && 'display: inline;') || '';
});
Wrapper.displayName = 'Ellipsify';
var Ellipsify = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, { className: "ellipsed-text", innerRef: setEllipsis(props), "aria-label": props.text, inline: props.inline }, props.text));
};
var setEllipsis = function (props) { return function (element) {
    if (!element) {
        return;
    }
    var maximumLines = props.lines;
    var height = element.getBoundingClientRect().height;
    var text = element.textContent;
    element.textContent = 'a';
    var lineHeight = element.getBoundingClientRect().height;
    var lineCount = height / lineHeight;
    var maximumHeight = lineHeight * maximumLines;
    if (lineCount <= maximumLines) {
        element.textContent = text;
        return;
    }
    var textContent = text;
    var endLength = typeof props.endLength === 'number' && props.endLength >= 0
        ? props.endLength
        : 8;
    var beginningText = text.substr(0, (text.length * maximumLines) / lineCount - endLength);
    var endText = text.substr(text.length - endLength, endLength);
    element.textContent = textContent = beginningText + "..." + endText;
    var finalHeight = element.getBoundingClientRect().height;
    if (finalHeight > maximumHeight) {
        var adjustedBeginningText = beginningText.substr(0, beginningText.length - (beginningText.length / maximumLines) * 0.25);
        textContent = adjustedBeginningText + "..." + endText;
    }
    delayRun(function () { return (element.textContent = textContent); });
}; };
var timeout = function (fn) { return setTimeout(fn, 1); };
var delayRun = exenv__WEBPACK_IMPORTED_MODULE_3__["canUseDOM"] && window.requestAnimationFrame
    ? window.requestAnimationFrame
    : timeout;
/* unused harmony default export */ var _unused_webpack_default_export = (Ellipsify);
var templateObject_1;
//# sourceMappingURL=ellipsify.js.map

/***/ })

}]);