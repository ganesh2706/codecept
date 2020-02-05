Feature: Allow user to Sign In and Sign Up

  I have to sign up and login into portal

  Background:
    Given User go to gitHub url

  Scenario: User creating account on github
    When User provide invalid data
    Then User should get error

  Scenario: User Login into the gitHub portal with invalid details
    When User provide invalid credential
    Then User should get error invalid username or password

  Scenario: User login into the my own app with invalid details
    When User provide invalid credential
    Then User should get error  invalid username or password

  Scenario: User login into the my own app with valid details
    When User provide valid credential
    Then User should check the functionality of app
