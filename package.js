Package.describe({
    summary: 'Blaze configuration templates for HP ID OAuth.',
    version: '0.0.1',
});

Package.onUse(api => {
    api.use('ecmascript', 'client');
    api.use('templating@1.2.13', 'client');
    api.addFiles('hpid_login_button.css', 'client');
    api.addFiles(
        ['hpid_configure.html', 'hpid_configure.js'],
        'client'
    );
});