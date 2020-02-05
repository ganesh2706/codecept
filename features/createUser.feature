Feature: Allow user to create user account

    Background:
        Given User go to url

    Scenario: User create account with valid details
        When User hitting create user endpoint with valid details
        Then User should get success message

    Scenario: User create account with invalid email address
        When User provide invalid email address
        Then User should get error as Please enter a email

    Scenario: User create account with blank email address
        When User provide blank email address
        Then User should get error as Email is Required

    Scenario: User create account with short length password
        When User provide invalid password
        Then User should get error as This Field must be 8 Characters long

    Scenario: User create account with blank password
        When User provide blank password
        Then User should get error as Password is Required

 Scenario: User create account with invalid confirm password
     When  User provide invalid confirm password
     Then User should get error as Passwords do not match

