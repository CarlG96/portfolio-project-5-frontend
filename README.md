# Taskosaurus 

Taskosaurus is a website where the user can sign up and log in with their own profile. From here they are able to create two key items: Tasks and Events. Tasks are things that the user needs to do by a certain date in a work context and Events are things that happen on a certain date and are usually either leisurely or act as milestones in someone's life like a birthday party).

Users can then view their Tasks or Events in the respective list views and can filter based on the Current/ Archived split for the Tasks and whether it is upcoming or in the past for the Events. The Tasks list view will also highlight if the task is overdue and not complete by changing the background color of it in the list view to alert the user.

Users can also view details about a specific Task or Event by clicking on a link from the list view and will then be taken to a detail view. From here they will be able to view details of that specific Task or Event and will be able to edit it or delete the item from their Profile entirely.

The user is also able to edit their profile and change their profile picture which is displayed on the navigation bar.

Taskosaurus has a separate backend API and frontend and this README deals with the frontend React application of the site.

<img src="README-pictures/am-i-responsive.png" />

## Demo

* [Taskosaurus Frontend Deployment](https://taskosaurus.herokuapp.com/)

## Backend Links

* [GitHub Repo for the Backend API](https://github.com/CarlG96/taskosaurus-backend-api)

* [Live Deployment of API](https://taskosaurus-backend.herokuapp.com/)

## User Stories and Kanban Board

The Taskosaurus project was created using a GitHub Projects Kanban Board to simulate an agile workflow. The Kanban board for the project which includes both backend and frontend tasks can be found here:

* [Taskosaurus Kanban Board](https://github.com/users/CarlG96/projects/6)

### Sprint Method

The Taskosaurus project was developed in a series of sprints which were each seven days long, starting at Sprint 0. Each User Story on the Kanban Board except those not completed have been assigned a specific Milestone in order to show which sprint they were completed on. Not all sprints were of equal value because of outside factors but User Stories were split into 'Must Have', 'Should Have' and 'Could Have' labels which designated what I thought they should be categorised as at the start of a sprint as I added items to the 'In Progress' section of the board. 

The 'SP:*' labels were used to designate how long I assumed each task would take based on a number of 'story points'. These were assigned at the start of each Sprint.

### User Stories

Here are links to epics and user stories involving the Taskosaurus fronted:

* [Current Tasks](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=current+tasks)

* [Archived Tasks](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=archived+tasks)

* [View Events](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=view+events)

* [Edit Events](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=edit+events)

* [Profile](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=profile+%28epic%29)

* [Design](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=design)

* [View Task](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=View+Task+%28epic%29)

* [Create Events](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=create+events+%28epic%29)

* [Search and Navbars](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=search+and+navbars)

* [Authorisation](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=authorisation)

* [Homepage](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=Homepage)

* [Edit Tasks](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=edit+tasks)

* [Create Task](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=create+task+%28epic%29)

* [Delete Events](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=delete+events)

* [Bugs](https://github.com/users/CarlG96/projects/6/views/1?filterQuery=bug)

## Features

Here are a list of pages and their features for the Taskosaurus Frontend

### Welcome Page

- The Welcome Page is the landing page for the Taskosaurus website. The page has a hero image and text welcoming the user. If the user is not signed in, the user can see a button advising them to sign up. If the user is signed up, this button is replaced by two buttons which direct the user to create an event or task.

<img src="README-pictures/taskosaurus-welcome-page.png" />

### Welcome Page Wireframes

#### Desktop not logged in

<img src="README-pictures/taskosaurus-welcome-page-wireframe-desktop.png" />

#### Desktop logged in

<img src="README-pictures/taskosaurus-welcome-page-wireframe-desktop-logged-in.png" />

#### Mobile 

<img src="README-pictures/taskosaurus-welcome-page-wireframe-mobile.png" />

### Navbar

- The Navbar allows the user to access the other pages of the site. It changes from a full list of links across the top of the page on larger device sizes to a burger menu on smaller device sizes.

<img src="README-pictures/taskosaurus-navbar-large.png" />
<img src="README-pictures/taskosaurus-navbar-small.png" />

### Sign In Page

- The Sign In Page allows users to sign in using credentials. It requires the user to use a valid username and password and has a link to the Sign Up Page if the user does not currently have an account in the backend.

<img src="README-pictures/taskosaurus-sign-in-page.png" />

### Sign In Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-sign-in-page-wireframe-desktop.png" />

#### Mobile

<img src="README-pictures/taskosaurus-sign-in-page-wireframe-mobile.png" />

### Sign Up Page

- The Sign Up Page allows users to sign up to Taskosaurus so they will be stored in the backend as a User and can log in to use Taskosaurus. The Sign Up Page requires the user to type a valid username and then a valid password twice in order to sign up. After confirming their sign up credentials they will be redirected to the Sign In Page. The Sign Up Page also has a link to the Sign In Page.

<img src="README-pictures/taskosaurus-sign-up-page.png" />

### Sign Up Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-sign-up-page-wireframe-desktop.png" />

#### Mobile

<img src="README-pictures/taskosaurus-sign-up-page-wireframe-mobile.png" />

### Tasks Page

- The Tasks Page allows you to view Tasks that you have previously created. You can click on the 'view task' button to view the Task Detail Page of that specific Task. If a Task is overdue, it will appear with an orange border around it and the button will say '(overdue)'. Clicking on the 'View Archived Tasks' button will allow you to switch from seeing Tasks that are considered 'Current' to Tasks that have been designated 'Archived'. This button will then show 'View Current Tasks' and the user can switch between the two states.

<img src="README-pictures/taskosaurus-tasks-page.png" />

### Tasks Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-tasks-page-wireframe-desktop.png" />

#### Midsize devices

<img src="README-pictures/taskosaurus-tasks-page-wireframe-midsize.png" />

#### Mobile

<img src="README-pictures/taskosaurus-tasks-page-wireframe-mobile.png" />

### Task Detail Page

- The Task Detail Page is where the the details of each Task are shown. It shows the Title, Description, Priority, Due date and State fields. The fields are initially disabled but the details can be changed by clicking on the Edit Task? button and consequently the Change Date? button. The Save button will save the Task details and the Delete Task? accordion opens up when clicked on to allow you to delete the Task.

<img src="README-pictures/taskosaurus-task-detail.png" />

### Task Detail Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-task-detail-wireframe-desktop.png" />

#### Mobile

<img src="README-pictures/taskosaurus-task-detail-wireframe-mobile.png" />

### Create Task Page

- The Create Task Page is the page in which you can create Tasks. The Title and Due date fields must be correctly set and all Tasks initially have a State of Current when created by default.

<img src="README-pictures/taskosaurus-create-task.png" />

### Create Task Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-create-task-wireframe-desktop.png" /> 

#### Mobile

<img src="README-pictures/taskosaurus-create-task-wireframe-mobile.png" />

### Events Page

- The Events Page allows you to view Eventss that you have previously created. You can click on the 'view event' button to view the Event Detail Page of that specific Event.  Clicking on the 'View Past Events' button will allow you to switch from seeing Events that are considered 'Upcoming' to Eventss that have been designated 'Past'. This button will then show 'View Upcoming Events' and the user can switch between the two states.

<img src="README-pictures/taskosaurus-events.png" />

### Events Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-events-wireframe-desktop.png" />

#### Midsize

<img src="README-pictures/taskosaurus-events-wireframe-midsize.png" />

#### Mobile

<img src="README-pictures/taskosaurus-events-wireframe-mobile.png" />

### Event Detail Page

- The Event Detail Page is where the the details of each Event are shown. It shows the Title, Date of event, Amount of money required and Need to travel? fields. The fields are initially disabled but the details can be changed by clicking on the Edit Event? button and consequently the Change Date? button. The Save button will save the Event details and the Delete Event? accordion opens up when clicked on to allow you to delete the Event.

<img src="README-pictures/taskosaurus-event-detail.png" />

### Event Detail Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-event-detail-wireframe-desktop.png" />

#### Mobile

<img src="README-pictures/taskosaurus-event-detail-wireframe-mobile.png" />

### Create Event Page

- The Create Event Page is the page in which you can create Events. The Title and Date of event date fields must be correctly set.

<img src="README-pictures/taskosaurus-create-event.png" />

### Create Event Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-create-event-wireframe-desktop.png" />

#### Mobile

<img src="README-pictures/taskosaurus-create-event-wireframe-mobile.png" />

### Profile Page

- The Profile Page allows a user to change their profile picture and set a preferred name. The fields are initially disabled until the Edit Profile? button is pressed.

<img src="README-pictures/taskosaurus-profile.png" />

### Profile Page Wireframes

#### Desktop

<img src="README-pictures/taskosaurus-profile-wireframe-desktop.png" />

#### Mobile

<img src="README-pictures/taskosaurus-profile-wireframe-mobile.png" />

### Footer

- The Footer is present on all pages and contains social media links to Facebook, Twitter and Instagram.

<img src="README-pictures/taskosaurus-footer.png" />

## Future Features

* Searchbar - Search through the Tasks or Events pages to find the exact item you want.

* Notes - Feature that was originally planned but could not be implemented in time, would involve the ability to attach multiple notes to each Task or Event item.

## Testing

I targetted the Taskosaurus React frontend with manual testing in order to make sure that things were working as expected.

### Manual Testing

The markdown file describing the manual tests can be found in the [MANUAL_TESTS.md](MANUAL_TESTS.md) file. It describes the steps I went through to manually ensure that the React frontend worked correctly.

## Colors

For the Taskosaurus App I decided to use a mostly monochromatic color scheme of white and green because these color schemes often look clean and professional. Variations of a bluish-green were the decided on colors because blue is often used for tech websites (think Facebook or Twitter) and green is pleasing to the eye. An orange color was also used to indicate when a task was overdue but incomplete and orange was chosen because of its good contrast with the other colors. Here are the hex values of the colors that I used:

- #175F3F - For darker shades such as borders
- #9BFBCE - For lighter shades 
- #50FAAB - For medium shades and background colors
- #277a54 - For more medium shades and background colors
- #FB7F00 - For the orange warning colors.
- #FFFFFF - White color to make the other colors stand out/ text
- #000000 - black color to make the other colors stand out/ text due to contrast with the white color.

## Typography
Montserrat and Lato were imported from Google Fonts to be used in this project.

Montserrat - Chosen for generic headers and larger text and for its legibility.
Lato - Chose to contrast with Montserrat for the smaller paragraph-style texts. Also has good legibility.

## Technology

### Languages

* JavaScript (specifically the JSX of React)
* CSS
* HTML

### Libraries/ Dependencies

React JS - The library upon which this project was built.
axios - For interceptors and to make requests and respond to the backend API.
React Bootstrap - Frontend library used to style Taskosaurus.
jwt-decode - Used to handle JSON Web Tokens.
moment - Package to handle the discrepencies between the datetimes of the frontend and the backend.
react-infinite-scroll-component - Used to create an infinite scroll component for the Tasks and Events Pages.
react-router-dom - Used for navigation of the Taskosaurus site.

### Programs used for development

- [drawSQL](https://drawsql.app/) - For the ERD (Entity Relationship Diagram).
- Gitpod - Used for the development of the project as a cloud based IDE.
- Git - Used for version control
- GitHub - Used for the remote repo of the project but also used for the Kanban Board.

### Gitpod extensions

- ES7 + React/Redux/React-Native Snippets for making boilerplate code easier to write.
- Prettier for code formatting.
- ESLint for linting and JSX validation.

## Deployment 

### Forking/ Cloning

You can fork the repository with the following steps:

1. Login to your GitHub account
1. Locate the repository you wish to fork
1. Click the 'Fork' button and you'll have a copy of the repo on your own account.

You can clone the repo with the following steps:

1. Under the 'Code' button in the repository, copy the HTTPS link.
1. With Git on your local machine, find the directory you want to clone into and set up a Git Bash terminal there.
1. Type git clone followed by the link to set up the clone on your own system.
Note: Your own environment will be different from the original so you will need to set up environment variables and install the requirements for it to run.

### Deployment to Heroku

Most of the complicated handling on environment variables happened in the backend API, so setting up the Taskosaurus frontend was relatively simple, with most of the calls dealing with separate resources being performed in the code.

1. I logged in and created the app.
1. Set the Deployment of the project by clicking on the 'Deploy' tab and choosing the method of deployment (I connected to my GitHub and had automatic deploys).
1. The application deployed after an initial manual deploy.

## Credits

* Code Institute and the Slack community, especially the tutors Sean and Oisin.
* The Moments walkthrough project from Code Institute, upon which this project was based.
* [CSS Jigsaw validator](https://jigsaw.w3.org/css-validator/) for validation of the CSS.
* [Google Fonts](https://fonts.google.com/) for the fonts used.
* [FreeLogoDesign](https://www.freelogodesign.org/) for the logo.
* [Favicon.io](https://favicon.io/) for the favicons used on the site.
* [pexels](https://www.pexels.com/) for the landing page picture.
* [Font Awesome](https://fontawesome.com/) for the icons used in the navbar and footers.
* [Am I Responsive?](https://ui.dev/amiresponsive) for the image used at the top of this README.
* [Heroku](https://id.heroku.com/login) for deployment of the final project.

## Bugs

### Date bug
The date for the forms in the DetailedTask and DetailedEvent detail views were not showing the values when pulling from the backend. To combat this I added a conditional to initially show the date in a text field and then if the user wanted to update during an edit they would have to click the Change Date? button after the Edit? buttons in either the DetailedTask or DetailedEvent components. 

### value/defaultValue on form bug
The handleChange() function would not update the forms in the DetailedTask and DetailedEvent components due to the fact they were being given value properties instead of defaultValue properties. This was a holdover from taking code from the CreateForm components and was easily fixed by changing value props to defaultValue props.

## bug on loading events
Due to the way pagination is handled, the past events/ current events split won't pull directly from the back end and you must scroll down with the infinite scroll component if you have too many items and are switching between them as it will appear that nothing is showing up however it is just the order of the meta class in django which defines whether they get pulled. Because the list view displays based on overdue status this can cause problems.

To solve this I set pagination from 10 to 15 and changed the ordering of events to date updated as this is less likely to not show the event lists which is based on due date at the higher number of items.