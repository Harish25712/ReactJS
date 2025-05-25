npm - manages packages, but it does not stand for node package manager, standard repository for all packages

package.json - a configuration for npm, keeps track of which version of that package is installed in your system, uses tilde or carat before version

packages/dependencies

bundlers - bundles/packages you app, so that it can be pushed to production..eg: webpack,parcel,vite,babel

two types of dependencies:
1) Dev - required for develeopment phase
2) Normal - used in production also

1) To install npm: npm init (package.json file is created)
2) To install parcel: npm install -D parcel (package-lock.json and node modules file is created)
3) npx parcel index(source file).html -> it builds a development build (which is put inside dist folder) for our app and it hosts the buid in localhost:1234,,
dist and parcel-cache folders are created
4) npm install react (or) npm i react
5) npm install react-dom (or) npm i react-dom

npm-> installing a package
npx -> executing a package

carat(^) vs tilde(~):
2.15.3 ->(2-major,15-minor,3-patch): 
carat -> update you to all future minor/patch versions, without incrementing the major version (2.x.x)
tilde -> update you to all future patch versions, without incrementing the minor version (2.15.x)

package-lock.json - keeps track of exact version of all packages,, keeps a hash(sha-512) to verify whatever is there in the dev machine is the same version that is being deployed on to the production

node modules - collrction of packages (or) its a database that contains actual data of that packages/dependencies,, its huge

transitive dependencies - our project is dependent on parcel, parcel as a package is dependent on a dependency -> node modules

gitignore= - contains all the files which need not to be pushed to github

dont push node modules inside github, move it to gitignore. Reason - if u have package and package-lock.json files , u can recreate node modules using command - npm install

push package.json and package-lock.json files to github

whatever u can regenarate dont move those to github

ways to get react into our app:
1) CDN links (not prefereed) -> costly operation (network call to unpkg.com)
2) NPM

After instaling react and react=dom if u run the script- React is not defined err-> solution need to import react and react-dom from node modules where react and react-dom folders are present.

import React from "react";
import ReactDOM from "react-dom/client";

after writing imports, if u run the script -> err: Browser scripts cannot have imports or exports.

sol: <script src="./App.js"> ..it consider this a normal JS file and thereby normal js files cant have imports and hence the error....we have to mention this as a module to solve the issue
script type="module" src="./App.js">

Features of parcel:
Dev build
local server
Hot module replacement- automatically refreshes the browser
file watching algorithm (written in C++)
caching- faster builds using parcel-cache
image optimization (costlier operation in browser)
minification
bundling and optimization
compressing
consistent hashing
code splitting
differential bundling - to support older browsers
diagnostics
error handling
HTTPs
tree shaking - removes unused code
lazy mode
Different dev and prod bundles

your app is faster not just beacause of React, instead these bundlers like (parcel,vite,webpack) make it faster

production build - npx parcel build index.html; -> after compressing/minification and much more, it goes to dist folder
development build - npx parcel index.html;

dist and .parcel-cache need not be moved to github as they can be regenreated using npx parcel index.html;

we push the code from local to git,, server fetches it from git,,server host the app to end user

broweserslist