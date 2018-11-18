Package.describe({
    name: 'tigrente:hpid-config-ui',
    description: 'README.md',
    git: 'https://github.com/tigrente/hpid-config-ui',
    summary: 'Blaze configuration templates for HP ID OAuth.',
    version: '0.0.3',
});

Package.onUse((api) => {
    api.use('ecmascript', 'client');
    api.use('templating@1.2.13', 'client');
    api.addFiles('hpid_login_button.css', 'client');
    api.addFiles(
        ['hpid_configure.html', 'hpid_configure.js'],
        'client',
    );
});
