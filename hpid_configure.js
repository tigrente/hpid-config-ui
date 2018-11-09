Template.configureLoginServiceDialogForHpid.helpers({
    siteUrl: () => Meteor.absoluteUrl(),
});

Template.configureLoginServiceDialogForHpid.fields = () => [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
];