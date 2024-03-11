## NODEMON

`nodemon` is a utility that monitors for changes in your Node.js application and automatically restarts the server. It is a development dependency that helps you save time by automatically restarting your application when changes are detected.

Here's a brief overview of its features:

1. **Automatic Restart**: Nodemon watches the files in the directory where it was started, and if any files are added, changed, or deleted, it will automatically restart your application.

2. **Cross-Platform**: Nodemon is a cross-platform tool, so it works on Windows, macOS, and Linux.

3. **Customization**: Nodemon can be configured to ignore specific files or directories, and you can also specify which file extensions to watch.

4. **Hot Reload**: Nodemon can be used in conjunction with other tools like `webpack` or `babel` to provide hot reloading, which means your application can be updated without a full reload of the page.

To use Nodemon, you need to install it globally or locally in your project:

```bash
# Install globally
npm install -g nodemon

# Install locally in your project
npm install --save-dev nodemon
```


Then, you can start your application with Nodemon:

```bash
nodemon your_script.js
```


In this command, `your_script.js` is the entry point of your application. Nodemon will start your application and watch for changes in the current directory.


## use gitignore generator to generate gitignore for tech used in projects