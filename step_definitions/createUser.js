const I = actor()
const assert = require('chai')

const { email, password, confirmPassword, button } = require('../locator/createUser')
Given('User go to url', () => {
    I.amOnPage('https://marketplace.marketcube.io/register');
})
When('User hitting create user endpoint with valid details', () => {

});

Then('User should get success message', () => {

});
When('User provide invalid email address', () => {
    I.wait(3);
    I.appendField(email, "Ganesh Tatipamul");
    I.appendField(password, "Ganesh Tatipamul");
    I.appendField(confirmPassword, "Ganesh Tatipamul");
    I.click(button);
});

Then('User should get error as Please enter a email', async () => {
    I.waitForVisible("//div[@class='Polaris-InlineError']", 3);
    let error = await I.grabTextFrom("//div[@class='Polaris-InlineError']");
    console.log("hello " + error);
    // assert.equal(error, "Please enter a valid email");
    I.seeElement("//div[@id='emailError']", "Please enter a valid email");

});


When('User provide blank email address', () => {
    I.wait(10);
    I.appendField(email, "");
    I.appendField(password, "abcdefgh");
    I.appendField(confirmPassword, "abcdefgh");
    I.click(button);

});

Then('User should get error as Email is Required', () => {
    I.seeElement("//DIV[@id='emailError']", "Email isRequired");
});
When('User provide invalid password', () => {
    I.wait(10);
    I.appendField(email, "abc@gmail.com");
    I.appendField(password, "abcd");
    I.appendField(confirmPassword, "abcd");
    I.click(button);
});

Then('User should get error as This Field must be 8 Characters long', () => {
    I.seeElement("//DIV[@id='passwordError']", "This Field must be 8 Characters long")
});
When('User provide blank password', () => {
    I.wait(10);
    I.appendField(email, "abc@gmail.com");
    I.appendField(password, "");
    I.appendField(confirmPassword, "abcd");
    I.click(button);
});

Then('User should get error as Password is Required', () => {
    I.seeElement("//DIV[@id='passwordError']", "Password is Required")
});
When('User provide invalid confirm password', () => {
    I.wait(10);
    I.appendField(email, "");
    I.appendField(password, "abcdefgh");
    I.appendField(confirmPassword, "abcde");
    I.click(button);

});

Then("User should get error as Passwords do not match", (arg0) => {
I.seeElement("//DIV[@id='confirmPasswordError']","Passwords do not match")
});
