# Code-W3
Requirements

For this project, you must:

Have a well-written README file.
Fetch data from a local server running JSON DB server.

##Pre-requisite Data

You can use this JSON file for your server DB.

db.json

Download db.json

 ##Project Setup

Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository (NB: ENSURE IT IS PUBLIC)
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
Please make sure you regularly commit to the repository.

##Project Guidelines

Your project should conform to the following set of guidelines: Core Deliverables

As a user, I can:

See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads. The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity. You will need to make a GET request to the following endpoint to retrieve the film data:

GET /films/1

Example Response: { "id": "1", "title": "The Giant Gila Monster", "runtime": "108", "capacity": 30, "showtime": "04:00PM", "tickets_sold": 27, "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.", "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" }

See a menu of all movies on the left side of the page in the ul#films element when the page loads. (optional: you can style each film in the list by adding the classes film item to each li element.) There is a placeholder li in the ul#films element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. You will need to make a GET request to the following endpoint to retrieve the film data:

GET /films

Example response: [ { "id": "1", "title": "The Giant Gila Monster", "runtime": "108", "capacity": 30, "showtime": "04:00PM", "tickets_sold": 27, "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.", "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" }, { "id": "2", "title": "Manos: The Hands Of Fate", "runtime": "118", "capacity": 50, "showtime": "06:45PM", "tickets_sold": 44, "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.", "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg" } ]

Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). No persistence is needed for this feature. Bonus Deliverables





