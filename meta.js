/**
 * @file templte config file inspired by vue-cli
 * @author jady
 */

module.exports = {
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A San.js project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "router": {
            "type": "confirm",
            "message": "Install san-router?"
        }
    },
    "filters": {
        "src/routes.js": "router"
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n"
};
