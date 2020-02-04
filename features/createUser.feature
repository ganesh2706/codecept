Feature: Allow user to create user account

    Background:
        Given User go to url

    Scenario: User create account with valid details
        When User hitting create user endpoint with valid details
        Then User should get success message

    Scenario: User create account with invalid email address
        When User provide invalid email address
        Then User should get error "Please enter a valid email"

    Scenario: User create account with blank email address
        When User provide blank email address
        Then User should get error "Email is Required"

    Scenario: User create account with short length password
        When User provide invalid password
        Then User should get error "This Field must be 8 Characters long"

    Scenario: User create account with blank password
        When User provide blank password
        Then User should get error "Password is Required"

    Scenario: User create account with short length confirm password
        When User provide invalid password
        Then User should get error "This Field must be 8 Characters long"

# Scenario: User create account with invalid confirm password
#     When User provide password
#     And User provide invalid confirm password
#     Then User should get error "Passwords do not match."

# Scenario: To check user details
#     When User hitting create user endpoint with invalid email address
#     Then User should get error message with invalid email

# Scenario: To check user should enter mobile number
#     When User hitting facebook account by enter mobile number
#     Then User should get ok response status

# Scenario: To check user should not enter invalid mobile number
#     When User hitting facebook account by entering invalid mobile number
#     Then User should get error response

# Scenario: To check that user is already exist or not
#     When User hitting facebook endpoint
#     When User is enter email
#     When User get already exist message
#     Then User should get error message


