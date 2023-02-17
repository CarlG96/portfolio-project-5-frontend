# Testing

## Manual Testing

Here are a list of manual tests carried out to ensure that the Taskosaurus frontend website works correctly at time of deployment. These tests are designed to test the functionality of the website; to make sure that it is interacting correctly with the backend and usable for the user of Taskosaurus.

## Welcome Page

* The Welcome Page or the landing page introduces people to Taskosaurus.

    * Test: A non-logged in user should see the 'Click here to sign up!' button.
    * Result: A non-logged in user can see the button.

    * Test: The 'Click here to sign up!' button should send the non-logged in user to the Sign Up Page.
    * Result: The user is directed to the Sign Up Page.

    * Test: A logged-in user should not be able to see the 'Click here to sign up!' button.
    * Result: A logged-in user cannot see this button.

    * Test: A logged-in user should be able to see the 'Click here to create a Task!' and 'Click here to create an Event!' buttons.
    * Result: A logged-in user can see these buttons.

    * Test: The 'Click here to create a Task!' button should direct the user to the Create Task Page.
    * Result: The user is directed there.

    * Test: The 'Click here to create an Event!' button should direct the user to the Create Event Page.
    * Result: The user is directed there.

    * Test: When loadi the page as a logged-out user, the loading spinner for the buttons should appear.
    * Result: The loading spinner appears.

    * Test: When loading the page as a logged-in user, the loading spinner for the buttons should appear.
    * Result: The loading spinner appears.

    * Lighthouse check:

    * Responsiveness check:

## Sign In Page

* The page for signing in for already signed up users

    * Test: A non-logged in user can access this page.
    * Result: A non-logged in user can access this page.

    * Test: a logged-user should be blocked from accessing the Sign In Page.
    * Result: A loading spinner is set to timeout, from there the user is pushed back to the homepage if they attempt to access the page.

    * Test: A non-logged in user should be able to type in a valid username and password and should be logged in and returned to the homepage.
    * Result: A non-logged in user is signed in and returned to the homepage.

    * Test: False credentials should throw up a warning and not log in the user.
    * Result: False credentials throw up a warning and do not log in the user.

    * Test: The 'Don't have an account? Sign up now!' link should go to the Sign Up Page.
    * Result: This link works.

    * Test: The 'This field may not be blank.' error is shown if any fields are left blank in the sign in form.
    * Result: The error is shown.

    * Lighthouse check:

    * Responsiveness check:

## Sign Up Page

* The page for signing up for an account on Taskosaurus.

    * Test: A non-logged in user can access this page.
    * Result: A non-logged in user can access this page.

    * Test: a logged-user should be blocked from accessing the Sign Up Page.
    * Result: A loading spinner is set to timeout, from there the user is pushed back to the homepage if they attempt to access the page.

    * Test: An attempt to use a password that is too short will result in an error being shown.
    * Result: The 'This password is too short. It must contain at least 8 characters.' error is shown.

    * Test: An attempt to use a password that is too common will result in an error being shown.
    * Result: The 'This password is too common.' error is shown.

    * Test: If the passwords do not match on signing up, an error will be shown.
    * Result: The 'The two password fields didn't match.' error is shown.

    * Test: The 'This field may not be blank.' error is shown if any fields are left blank in the sign up form.
    * Result: The error is shown.

    * Test: If legitimate credentials are provided, then the user is added to the list of users in the backend and redirected to the Sign In Page, where they can sign in.
    * Result: Users are redirected, and can sign in.

    * Test: The 'Already have an account? Sign In' link redirects the user to the Sign In Page.
    * Result: User is redirected to the Sign In Page.

    * Lighthouse check:

    * Responsiveness check:

## Navbar

* The navigation bar for the entire site. Changes to a burger menu based on device size.

    * Test: A logged out user can see the logo, the Home, Sign In and Sign Up links.
    * Result: A logged out user can see this.

    * Test: A logged in user can see the logo, the Home, Tasks, Create Task, Events, Create Event, Logout and Profile links.
    * Result: A logged in user can see this.
    
    * Lighthouse check:

    * Responsiveness check:

## Tasks Page

    
    * Lighthouse check:

    * Responsiveness check:

## Task Detail Page

    
    * Lighthouse check:

    * Responsiveness check:

## Create Task Page

    
    * Lighthouse check:

    * Responsiveness check:

## Events Page

    
    * Lighthouse check:

    * Responsiveness check:

## Create Event Page

    
    * Lighthouse check:

    * Responsiveness check:

## Profile Page

    
    * Lighthouse check:

    * Responsiveness check:
