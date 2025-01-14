module.exports ={
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", {
      "npmPublish": true
    }],
    [
      "@semantic-release/git",
      {
        "assets": [
         "CHANGELOG.md",
         "package.json",
         "docs",
         "yarn.lock"
        ]
      }
    ]
  ]
}
