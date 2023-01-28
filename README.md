# Taskosaurus 

Taskosaurus is a website where the user can sign up and log in with their own profile. From here they are able to create two key items: Tasks and Events. Tasks are things that the user needs to do by a certain date in a work context and Events are things that happen on a certain date and are usually either leisurely or act as milestones in someone's life like a birthday party).

Users can then view their Tasks or Events in the respective list views and can filter based on the Current/ Archived split for the Tasks and whether it is upcoming or in the past for the Events. The Tasks list view will also highlight if the task is overdue and not complete by changing the background color of it in the list view to alert the user.

Users can also view details about a specific Task or Event by clicking on a link from the list view and will then be taken to a detail view. From here they will be able to view details of that specific Task or Event and will be able to edit it or delete the item from their Profile entirely.

The user is also able to edit their profile and change their profile picture which is displayed on the navigation bar.

Taskosaurus has a separate backend API and frontend and this README deals with the frontend React application of the site.

## Demo

<!--><-->

## Backend Links

[GitHub Repo for the Backend API](https://github.com/CarlG96/taskosaurus-backend-api)
[Live Deployment of API](https://taskosaurus-backend.herokuapp.com/)

## User Stories and Kanban Board

The Taskosaurus project was created using a GitHub Projects Kanban Board to simulate an agile workflow. The Kanban board for the project which includes both backend and frontend tasks can be found here:

[Taskosaurus Kanban Board](https://github.com/users/CarlG96/projects/6)

### Sprint Method

The Taskosaurus project was developed in a series of sprints which were each seven days long, starting at Sprint 0. Each User Story on the Kanban Board except those not completed have been assigned a specific Milestone in order to show which sprint they were completed on. Not all sprints were of equal value because of outside factors but User Stories were split into 'Must Have', 'Should Have' and 'Could Have' labels which designated what I thought they should be categorised as at the start of a sprint as I added items to the 'In Progress' section of the board. 

The 'SP:*' labels were used to designate how long I assumed each task would take based on a number of 'story points'. These were assigned at the start of each Sprint.

## Features

## Future Features

## Testing

I targetted the Taskosaurus React frontend with both manual and automated testing in order to make sure that things were working as expected.

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

## Wireframes


## Typography
Montserrat and Lato were imported from Google Fonts to be used in this project.

Montserrat - Chosen for generic headers and larger text and for its legibility.
Lato - Chose to contrast with Montserrat for the smaller paragraph-style texts. Also has good legibility.

## Credits
FreeLogoDesign for the logo
https://favicon.io/
pexels
moment package

## Bugs

### Date bug
The date for the forms in the DetailedTask and DetailedEvent detail views were not showing the values when pulling from the backend. To combat this I added a conditional to initially show the date in a text field and then if the user wanted to update during an edit they would have to click the Change Date? button after the Edit? buttons in either the DetailedTask or DetailedEvent components. 

### value/defaultValue on form bug
The handleChange() function would not update the forms in the DetailedTask and DetailedEvent components due to the fact they were being given value properties instead of defaultValue properties. This was a holdover from taking code from the CreateForm components and was easily fixed by changing value props to defaultValue props.