// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by hpid-config-ui.js.
import { name as packageName } from "meteor/hpid-config-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('hpid-config-ui - example', function (test) {
  test.equal(packageName, "hpid-config-ui");
});
