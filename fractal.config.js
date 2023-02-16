const path = require('path');

// Create a new Fractal instance:
const fractal = module.exports = require('@frctl/fractal').create();

// Title of Fractal project:
fractal.set('project.title', 'IntraCDL UI');

// Fractal components location:
fractal.components.set('path', path.join(__dirname, 'src'));

// Static asset folder for Fractal development:
fractal.web.set('static.path', path.join(__dirname, 'dist'));

// Static asset folder for Fractal builds:
fractal.web.set('static.mount', 'dist');

// Destination of files on 'build' task:
fractal.web.set('builder.dest', path.join(__dirname, 'fractal-dist'));

// Default Fractal template:
fractal.components.set('default.preview', '@template-default');
