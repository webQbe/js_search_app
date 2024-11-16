# JavaScript Search App

- Using HTML5 and Vanilla JS.
- Using live SASS to CSS3 compiler
- Responsive Mobile First Design 
- Accessibiliy Features with Semantic elements.
- Using `Fetch()` with `Async` / `Await` to request data from Wikipedia API to feed search results.
- Using FontAwesome Icons and Roboto Font

## Installing & Configuring Live Sass Compiler

1. Search & Install `Live Sass Compiler by Glenn Marks` on VS Code

2. On VSCode, Go to `File` menu > `Preferences` > `Settings`

3. Enter `live sass` and Search

4. Go to `Live Sass Compile › Settings: Exclude List` 
   > Add folders to exclude as `/**/folder_name/**`

5. Go to `Live Sass Compile › Settings: Formats`
   > `Edit in settings.json` > Modify array:
   
    ` "liveSassCompile.settings.formats": [`

       `{`
            `"format": "compressed",`
            `"extensionName": ".min.css",`
            `"savePath": "/dist/css",`
            `"savePathReplacementPairs": null`
        `}`
    `]`






