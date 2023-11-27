const config = require('./config/wdio.conf.shared').config;
const featuresPath = ['./script/feature/**/*.feature'];
const tags = config.properties.get('SUITES');

config.cucumberOpts = {
    require: ['script/specs/**/**.js',
        'support/commonHooks.js'],
    timeout: 60000,
    colors: true,
    tagExpression: tags
}

config.specs = featuresPath

exports.config = config;