### About
This is just an example of webpack conf for multiple-entries.

### See it in action
- `npm install` in the root dir of this project.
- `npm run-script build` in the root dir of this project.
- open `./build/single-page/index.html` in your browser. Open the dev tools with the Network panel. See the downloaded files.

### Notes
1. Hack around entry. I had to wrap them into arrays to deal with the bug "dependency to an entry point is not allowed" https://github.com/webpack/webpack/issues/300.
2. Pay attention to how the images url are put inside `.less` files. The details are here https://github.com/webpack/css-loader#usage.

# Webpack for dummies.

When I was reading the webpack docu, I felt as the dumbest person ever to live. That is why I decided to write this small tutorial where I will decompose the principles of webpack.

1. Webpack is a module bundler(packaging tool) for all your static files. All. Even font files.
2. Webpack is distributed as an npm package, so in your project you still need to have a package.json file with a dependency to webpack. I prefer to have it as a dev one. Of course, you choose another way. You can have it without the package.json file and don't install it into your local project. You can install it globally, but still as the npm package, and use it in your Composer, Maven, etc. project as a bash script. But IMO it is a not clear and not easy portable method. 
3. Webpack is configured by its special javascript file that must export some proper webpack options. The only requirement for it is the export of webpack options. The name and format of this special file do not matter and you can have a multiple of these config files per project. Of course there are some conventions. It would be good to call it `webpack.config.js` or something close to it and have it somewhere near to `package.json` if you have it. Because this config is the javascript file, you can write inside it any helper function you like and use it. Just the same as we used to do in `Gruntfile.js`. The simplest config would be:
  ```js
  var path = require('path');
  
  module.exports = {
    output: {
      path: path.join(__dirname, 'build/static'),
      filename: '[name].js'
    }
  };
  ```
  Of course, it will not produce any output. For output you need to have an entry point:
  ```js
  var path = require('path');
  
  module.exports = {
    entry: "./vendor/underscore",
    output: {
      path: path.join(__dirname, 'build/static'),
      filename: '[name].js'
    }
  };
  ```
  The part with entries actually is described quite understandable for dummies in the [home docu of webpack](http://webpack.github.io/docs/configuration.html#configuration-object-content)
4. When you have a config, you want to test it. To do this you need to run webpack with your config. You can do it in a various ways. Here we will look at the way when you have installed webpack as the local npm package.
  - Add a script to your package.json:

  ```json
    "scripts": {
      "build": "webpack --config ./webpack.config.js"
    },
  ```
  - Run it in your npm project's root installation(in 99% it's the dir where your package.json is located).
  ```
  npm run-script build
  ```
5. Now please look at [webpack.config.json](webpack.config.json) of this project. Here are the properties you need to pay attention to:

  - `context:` The base directory (absolute path!) for resolving the entry option. [Home docu](http://webpack.github.io/docs/configuration.html#context). 

  - Two descriptions of vendor. The first in entries `'vendor': ['jquery', 'underscore', 'backbone'],`. The second in plugins
   ```js
       , new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor',
         chunks: ['page-clicks', 'page-module']
       })
   ```
   We need to describe it twice to force merging of jquery, underscore, backbone into the single module `vendor`.

  - Resolve
  ```js
    resolve: {
      modulesDirectories: ['vendor', 'src/js', 'src/styles', 'src/img', 'node_modules']
    },

  ```
  This is a very important property. It declares all the directories where node modules will be searched. [Home docu](http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories). It has such values as `src/styles` or `src/img` because webpack can treat all the static files as node modules. So, for example in [ModuleAbstract.js](src/js/Module/Abstract.js) we declare the dependencies
  ```js
  define(['backbone', 'Module/Abstract.less'], function(backbone) {
  ```
  `backbone` is resolved because of `node_modules` and `Module/Abstract.less` because of `src/styles`. All the image `url()` lines inside css files are resolved because of `src/img`. More about images [here](https://github.com/webpack/css-loader#usage).

  - ProvidePlugin. Defines the strings that are automatically inject dependencies into the source files where the strings are found. [Home docu](http://webpack.github.io/docs/list-of-plugins.html#provideplugin).

  - CommonsChunkPlugin. Extracts common modules into separate bundles. Example:
  ```js
    , new webpack.optimize.CommonsChunkPlugin({
      name: 'page-b',
      chunks: ['Page/B-A', 'Page/B-B']
    })
  ```
  Will extract `Module/B.js` into the separate file `page-b`. You can see the result in `build/multiple-page/page-b.js`.

