
const I = actor();
Given('User go to url', () => {
    I.amOnPage('https://marketplace.marketcube.io/register');
});
When('User hitting create user endpoint with valid details', () => {
    I.wait(10);
    I.appendField("//INPUT[@id='email']", "abc@gmail.com");
    I.appendField("//INPUT[@id='password']", "abcdefgh");
    I.appendField("//INPUT[@id='confirmPassword']", "abcdefgh");
    I.click("//BUTTON[@id='registerButton']");
});

Then('User should get success message', () => {

});
When('User provide invalid email address', () => {
    I.appendField("//INPUT[@id='email']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='password']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='confirmPassword']", "Ganesh Tatipamul");
    I.click("//BUTTON[@id='registerButton']");
});

Then(/^User should get error (.*)$/, (arg0) => {

    I.see("//DIV[@id='emailError']", "dsjfksd")
});
When('User provide blank email address', () => {
    I.appendField("//INPUT[@id='email']", "");
    I.appendField("//INPUT[@id='password']", "abcdefgh");
    I.appendField("//INPUT[@id='confirmPassword']", "abcdefgh");
    I.click("//BUTTON[@id='registerButton']");
});

Then(/^User should get error (.*)$/, (arg0) => {

});
When('User provide invalid password', () => {
    I.appendField("//INPUT[@id='email']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='password']", "abcde");
    I.appendField("//INPUT[@id='confirmPassword']", "abcdefgh");
    I.click("//BUTTON[@id='registerButton']");
});

Then(/^User should get error (.*)$/, (arg0) => {

});
When('User provide invalid password', () => {

});

Then(/^User should get error (.*)$/, (arg0) => {

});
When('User provide blank password', () => {

});

Then(/^User should get error (.*)$/, (arg0) => {

});
When('User provide password', () => {

});

// And('User provide invalid confirm password', () => {

// });

Then(/^User should get error (.*)$/, (arg0) => {

});
