### About
This is just an example of webpack conf for multiple-entries.

### See it in action
- `npm install` in the root dir of this project.
- `npm run-script build` in the root dir of this project.
- open `./build/index.html` in your browser. Open the dev tools with the Network panel. See the downloaded files.

### Notes
1. Hack around entry. I had to wrap them into arrays to deal with the bug "dependency to an entry point is not allowed" https://github.com/webpack/webpack/issues/300.
2. To finally separate 'vendor' module I had to describe it twice. First as an entry point `vendor`. Second as a common module. Bha!
3. Still have dirty separation. `module-clicks` appears twice in `1.1.js` and `3.3.js`. Of course it's better that the duplication of the whole vendor but still... 
