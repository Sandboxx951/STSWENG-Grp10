# How to use:
  Because CI pipeline is work in progress, perform the following to run (IN ORDER):  
    - npm run build  
    - npm run test  
    - npm run prod

# Webpack integration
- For the build step, webpack will compile the html, js, and css files to be used for the website users will see(dist = distribution)
- Note: Server.js and app.js will NOT be included in webpack because it is not needed by users (it will only run)

## Uploading web page
To add a web page, do the following:
1. Go to webpack.config.js in root directory
2. Navigate to 'plugins' array, and add a new HtmlWebpackPlugin, here is a template:
   
```
new HtmlWebpackPlugin({
    filename: 'FILENAME.html', (PAGE TO BE INCLUDED IN DIST)
    title: 'CONTENTS OF <title></title> TAG',
    template: './src/pages/FILENAME.html', (THE WEB PAGE YOU CREATED - FOLLOW FILE STRUCTURE INDICATED)
    chunks: ['ENTRY_FILE'], (IF YOU USED A JS FILE FOR THE WEBSITE INCLUDE IT HERE)
    })
```

## Bundling JavaScript
In code template above, there is a ENTRY_FILE. To have this file be recognizable by webpack, do the following:
1. Open webpack.config.js in root directory
2. Look for 'entry', and give a name to the entry point (MAKE A ENTRY FILE PER WEB PAGE)
3. Follow this format:
```
    CHUNK_NAME: './src/scripts/FILENAME.js'
```

## ENTRY FILES
In the entry file of each webpage, declare things such as:
- Static assets (e.g. css, imgs, etc.) used by the webpage
- Other scripts to be used
  - NOTE: Use 'import' for this (e.g. import '../css/home.css';)
  - NOTE: To use images / videos in webpage, simply import, no need to use in the file, just import it

## SANITY CHECK
To check if you did everything right, the dist folder should contain:
- Your HTML web page
- Your entry point (js file)
- Your static assets (if used)

## ADDITIONAL NOTE: Asset scoping
When working on the webpage itself, things like importing images and all, should be done under the assumption that EVERYTHING IS IN A SINGLE FILE, because that is the case in the 'dist' file

### FINAL PULL TEST;lplpl

### Deployed to render
- https://stsweng-grp10-1.onrender.com
