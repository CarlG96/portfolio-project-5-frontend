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
    
    * Test: Clicking on the logo returns the user to the Welcome Page.
    * Result: The user is returned to the Welcome Page.

    * Test: Clicking on the Home link returns the user to the Welcome Page.
    * Result: The user is returned to the Welcome Page.

    * Test: Clicking on the Tasks link takes the user to the Tasks Page.
    * Result: The user is taken to the Tasks Page.

    * Test: Clicking on the Create Task link takes the user to the Create Task Page.
    * Result: The user is taken to the Create Task Page.

    * Test: Clicking on the Events link takes the user to the Events Page.
    * Result: The user is taken to the Events Page.

    * Test: Clicking on the Create Event link takes the user to the Create Event Page.
    * Result: The user is taken to the Create Event Page.

    * Test: Clicking on the Profile link takes the user to the Profile Page.
    * Result: The user is taken to the Profile Page.

    * Test: Clicking on the Logout link logs the signed in user out and they are returned to the Welcome Page.
    * Result: The user is logged out and returned to the Welcome Page.

    * Test: On smaller screen sizes, the burger menu can be clicked to open up.
    * Result: This happens.

    * Test: Clicking on another part of the screen once the burger menu is open closes the burger menu.
    * Result: Clicking on another part of the screen closes the burger menu.

    * Lighthouse check

    * Responsiveness check:

## Tasks Page

* The page for displaying Tasks that the user has created.
    
    * Test: A non-logged in user should not have any Tasks showing if they attempt to access this page due to backend authentication.
    * Result: A 'Sorry, the page you are looking for couldn't be found!' error is displayed to the user who tries to force this url.

    * Test: A logged in user can access the Tasks Page.
    * Result: A logged in user can access the Tasks Page.

    * Test: A user can switch the button between 'View Archived Tasks' and 'View Current Tasks' states. A loading spinner will be present when this is done, pulling data from the backend.
    * Result: This happens.

    * Test: A user without any Current Tasks will see the 'No Current Tasks' message when opening up the Tasks Page.
    * Result: A user without any Current Tasks will see this.

    * Test: A user without any Archived Tasks will see the 'No Archived Tasks' message when switching to the Archived section with the button.
    * Result: This happens.

    * Test: A user will only see Current Tasks when in the Current Tasks section.
    * Result: Only Current Tasks are shown in the Current Tasks section.

    * Test: Current Tasks that are overdue will be highlighted orange and have an overdue warning on them.
    * Result: Overdue tasks have this.

    * Test: A user will only see Archived Tasks in the Archived Tasks section after switching with the button.
    * Result: This is true.

    * Test: Scrolling down will make the Infinite Scroll pull more data from the backend.
    * Result: This is true.

    * Test: Clicking on the button links on each Task will take you to the respective Task Detail Page.
    * Result: The user is taken to the respective Task Detail Page.
    
    * Lighthouse check:

    * Responsiveness check:

## Task Detail Page

* The page for displaying the details of Tasks and also to Edit and Delete them.

    * Test: A non-logged in user should not be able to access the specific Tasks of another user by forcing the url.
    * Result: A response of 'Task not available' appears on the Task Detail page due to backend authentication.

    * Test: A logged in user should not be able to access the specific Tasks of another user by forcing the url.
    * Result: A response of 'Task not available' appears on the Task Detail page due to backend authentication.

    * Test: A logged in user should be able to access their specific Tasks by forcing the url.
    * Result: A logged in user can view their Tasks via forcing the url.

    * Test: The fields of the Task Detail form are initially disabled upon viewing the Task Detail Page.
    * Result: The fields are initially disabled.

    * Test: Clicking the 'Edit?' button enables all fields but the due date field.
    * Result: All fields except date are enabled.

    * Test: All fields except the due date are interactable once the 'Edit?' button has been clicked.
    * Result: All these fields are interactable.

    * Test: Clicking the 'Change Date' button allows you to edit the date.
    * Result: This is true.

    * Test: A user cannot Save the Task edits if the Title is removed. It should show an error.
    * Result: A 'This field may not be blank.' error is shown.

    * Test: If the user changes the Title field and clicks Save then the title of the Task will change and the user is returned to the Tasks Page.
    * Result: The title is changed.

    * Test: If the user changes the Description field and clicks Save then the description will change in the backend for the Task and the user will be returned to the Tasks Page.
    * Result: The description is changed.

    * Test: If the user changes the Priority field and clicks Save then the priority will change in the backend for the Task and the user will be returned to the Tasks Page.
    * Result: The priority is changed.

    * Test: If the user changes the State and clicks Save then the state will change in the backend for the Task and the user will be returned to the Tasks Page.
    * Result: The state is changed.

    * Test: If the user enables the Due date field with the 'Change Date?' button and then Saves without changing the date the date will remain the same in the backend and will return the user to the Tasks Page.
    * Result: This is true.

    * Test: If the user changes the Due date field in a valid way and then Saves the date will be changed in the backend and the user is returned to the Tasks Page.
    * Result: This is true.

    * Test: The user cannot save an item if the Due date is less than one day away from the current time. This is to prevent the user from making a due date in the past.
    * Result: An 'Ensure this value is greater than or equal to {Current Time + 1 days}' error is shown.

    * Test: The user can delete the Task by dropping down the accordion and clicking on 'Confirm Deletion'.
    * Result: This deletes the Task.
    
    * Lighthouse check:

    * Responsiveness check:

## Create Task Page

* The page for creating Tasks.
    
    * Test: A non-logged in user cannot access the page.
    * Result: A loading spinner is set to timeout, from there the user is pushed back to the homepage if they attempt to access the page.

    * Test: A logged in user can access the page.
    * Result: A logged in user can access the page.

    * Test: Leaving the Title field blank shows an error.
    * Result: A 'This field may not be blank.' is shown.

    * Test: The user cannot save an item if the Due date is less than one day away from the current time. This is to prevent the user from making a due date in the past.
    * Result: A 'Ensure this value is greater than or equal to {Current Time + 1 days}' error is shown.

    * Test: A submission with a valid response creates a new Task and directs the user to the specific Task Detail Page.
    * Result: The correct information is created and the user is redirected.

    * Lighthouse check:

    * Responsiveness check:

## Events Page

* The page for displaying Events that the user has created.

    * Test: A non-logged in user should not have any Eventss showing if they attempt to access this page due to backend authentication.
    * Result: A 'Sorry, the page you are looking for couldn't be found!' error is displayed to the user who tries to force this url.

    * Test: A logged in user can access the Events Page.
    * Result: A logged in user can access the Events Page.

    * Test: A user can switch the button between 'View Past Events' and 'View Upcoming Events' states. A loading spinner will be present when this is done, pulling data from the backend.
    * Result: This happens.

    * Test: A user without any Upcoming Events will see the 'No Upcoming Events' message when opening up the Events Page.
    * Result: A user without any Upcoming Events will see this.

    * Test: A user without any Past Events will see the 'No Past Events' message when switching to the Past Events section with the button.
    * Result: This happens.

    * Test: A user will only see Upcoming Events when in the Upcoming Events section.
    * Result: Only Upcoming Events are shown in the Upcoming Events section.

    * Test: A user will only see Past Events in the Past Events section after switching with the button.
    * Result: This is true.

    * Test: Scrolling down will make the Infinite Scroll pull more data from the backend.
    * Result: This is true.

    * Test: Clicking on the button links on each Event will take you to the respective Event Detail Page.
    * Result: The user is taken to the respective Event Detail Page.

    * Lighthouse check:

    * Responsiveness check:

## Event Detail Page

* The page for displaying the details of Events and also to Edit and Delete them.

    * Test: A non-logged in user should not be able to access the specific Events of another user by forcing the url.
    * Result: A response of 'Event not available' appears on the Event Detail page due to backend authentication.

    * Test: A logged in user should not be able to access the specific Events of another user by forcing the url.
    * Result: A response of 'Event not available' appears on the Event Detail page due to backend authentication.

    * Test: A logged in user should be able to access their specific Events by forcing the url.
    * Result: A logged in user can view their Events via forcing the url.

    * Test: The fields of the Event Detail form are initially disabled upon viewing the Event Detail Page.
    * Result: The fields are initially disabled.

    * Test: Clicking the 'Edit?' button enables all fields but the Date of event field.
    * Result: All fields except Date of event are enabled.

    * Test: All fields except the Date of event are interactable once the 'Edit?' button has been clicked.
    * Result: All these fields are interactable.

    * Test: Clicking the 'Change Date' button allows you to edit the date.
    * Result: This is true.

    * Test: A user cannot Save the Event edits if the Title is removed. It should show an error.
    * Result: A 'This field may not be blank.' error is shown.

    * Test: If the user changes the Title field and clicks Save then the title of the Event will change and the user is returned to the Events Page.
    * Result: The title is changed.

    * Test: If the user changes the number in the Amount of money required field and then clicks Save then the amount of money of the Event will change and the user is returned to the Events Page.
    * Result: The Amount of money is changed.

    * Test: If the user changes the checkbox value for the Need to travel there? field and then clicks Save then the value will be stored in the backend and the user is returned to the Events Page.
    * Result: The Need to travel there? value changes.

     * Test: If the user enables the Date of event field with the 'Change Date?' button and then Saves without changing the date the date will remain the same in the backend and will return the user to the Events Page.
    * Result: This is true.

    * Test: If the user changes the Date of event field in a valid way and then Saves the date will be changed in the backend and the user is returned to the Events Page.
    * Result: This is true.

    * Test: The user cannot save an item if the Date of event is less than one day away from the current time. This is to prevent the user from making an Event for the past.
    * Result: An 'Ensure this value is greater than or equal to {Current Time + 1 days}' error is shown.

    * Test: The user can delete the Event by dropping down the accordion and clicking on 'Confirm Deletion'.
    * Result: This deletes the Event.

    * Lighthouse check:

    * Responsiveness check:


## Create Event Page

* The page for creating Events.

    * Test: A non-logged in user cannot access the page.
    * Result: A loading spinner is set to timeout, from there the user is pushed back to the homepage if they attempt to access the page.

    * Test: A logged in user can access the page.
    * Result: A logged in user can access the page.

    * Test: Leaving the Title field blank shows an error.
    * Result: A 'This field may not be blank.' is shown.

    * Test: The user cannot save an item if the Date of event is less than one day away from the current time. This is to prevent the user from making an Event for the past.
    * Result: A 'Ensure this value is greater than or equal to {Current Time + 1 days}' error is shown.

    * Test: A submission with a valid response creates a new Event and directs the user to the specific Event Detail Page.
    * Result: The correct information is created and the user is redirected.
    
    * Lighthouse check:

    * Responsiveness check:

## Profile Page

    
    * Lighthouse check:

    * Responsiveness check:

## Footer

* Footer at the bottom of all pages.

    * Test: Twitter link opens up Twitter homepage in new tab.
    * Result: User is directed to Twitter homepage in new tab.

    * Test: Facebook link opens up Facebook homepage in new tab.
    * Result: User is directed to Facebook homepage in new tab.

    * Test: Instagram link opens up Instagram homepage in new tab.
    * Result: User is directed to Instagram homepage in new tab.

    * Lighthouse check:

    * Responsiveness check: