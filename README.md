# meteor-peer-npm-issue

This repository reproduces an issue with peer NPM dependencies defined on a Meteor package and how they affect to the meteor app and package run.

## Problem

The project environment is as follow:

```
- meteor-peer-npm-issue (meteor app)
-- one (meteor package)
---- two (meteor package)
------ moment (peer npm dependency)
------ simpl-schema (peer npm dependency)
```

As you can see we have the `meteor-peer-npm-issue` app that depends on the `one` and `two` packages. At the same time, the `two` package has defined two peer npm depencencies, the `moment` and `simpl-schema` libs.

For handling peer dependencies we use [`check-npm-versions`](https://github.com/tmeasday/check-npm-versions), so when we start the  run package tests we get that dependencies are missing.


## Reproduction

First, we install dependencies on app and the packages by running:
```
npm install
```

Then we execute tests for the `one` package by doing:

```
npm run test-package-one
```

You will immediately get:

```
WARNING: npm peer requirements (for moment) not installed:
- moment@2.18.1 not installed.

Error: Can't find npm module 'moment'. Did you forget to call 'Npm.depends' in package.js within the 'modules-runtime' package?
```

## Solution

`check-npm-versions` warns us to include the missing NPM dependencies. But even wanting to run only package tests, we need to include the peer deps in the app level only, **it doesn't need to include them on the package itself**. If we have an infrastructure of several apps that has included the package, dependencies must be installed in the **ALL** apps, because it feels like the package test server goes to the app contexts in order to get dependencies bundled somehow.

Then for being able to see the package test server to run:

```
npm install moment simpl-schema
```

```
npm run test-package-one
```
