const I = actor();
Given('User go to gitHub url', () => {
    I.amOnPage('https://github.com/join?source=header-home');
});

When('User provide invalid data', () => {
    // I.click("//A[@href='/join?source=header-home'][contains(text(),'Sign')]");
    I.appendField("//INPUT[@id='user_login']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='user_email']", "ganesh.tatipamul@successive.tech");
    I.appendField("//INPUT[@id='user_password']", "Ganesh Tatipamul");
});

Then('User should get error', () => {
    I.seeElement("//dd[@class='error']","Email is invalid or already taken");
});

When('User provide invalid credential', () => {

    I.click("//BUTTON[@class='btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3'][text()='Sign up for GitHub']");
    I.appendField("//INPUT[@id='user_login']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='user_email']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='user_password']", "Ganesh Tatipamul")

});

Then('User should get error invalid username or password', () => {
    I.seeElement("//DIV[@class='container']", "Incorrect username or password.")
});

When('User provide invalid credential', () => {
    I.amOnPage('https://github.com');
    I.click("//button[@class=\"btn-link d-lg-none mt-1 js-details-target\"]")
    I.click("//a[@class=\"HeaderMenu-link no-underline mr-3\"]");
    I.appendField("//INPUT[@id='login_field']", "Ganesh Tatipamul");
    I.appendField("//INPUT[@id='password']", "Ganesh Tatipamul");
    I.click("//INPUT[@type='submit']");
});

Then('User should get error  invalid username or password', () => {
    I.seeElement("//DIV[@class='container']", "Incorrect username or password.")
});

When('User provide valid credential', () => {
    I.amOnPage('http://localhost:4000');
    I.see('Login');
    I.appendField("//INPUT[@id='email']", "head.trainer@successive.tech");
    I.appendField("//INPUT[@id='password']", "Training@123");
    I.click("//BUTTON[@class='MuiButtonBase-root MuiButton-root Login-submit-19 MuiButton-containedPrimary MuiButton-contained MuiButton-fullWidth']");
});

Then('User should check the functionality of app', () => {
    // I.click("//BUTTON[@class='MuiButtonBase-root MuiButton-root Login-submit-19 MuiButton-containedPrimary MuiButton-contained MuiButton-fullWidth']");
    I.wait(10);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[2]");
    I.wait(10);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[3]");
    I.appendField("//INPUT[@type='text']", "Ganesh");
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[4]");
    I.wait(5);
    I.click("(//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'])[5]");
    I.wait(5);
});
