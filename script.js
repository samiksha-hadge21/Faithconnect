const events = [
    { title: "Music Concert", date: "2025-06-21", location: "New York", occasion: "Music" },
    { title: "Charity Gala", date: "2025-07-10", location: "London", occasion: "Charity" },
    { title: "Religious Gathering", date: "2025-08-01", location: "Paris", occasion: "Religious" },
    { title: "Social Meetup", date: "2025-06-25", location: "San Francisco", occasion: "Social" },
    { title: "Music Concert", date: "2025-07-05", location: "Los Angeles", occasion: "Music" },
    { title: "Charity Run", date: "2025-06-30", location: "Toronto", occasion: "Charity" },
    { title: "Religious Ceremony", date: "2025-07-20", location: "Rome", occasion: "Religious" },
    { title: "Community Picnic", date: "2025-06-28", location: "Chicago", occasion: "Social" },
    { title: "Music Festival", date: "2025-08-15", location: "Berlin", occasion: "Music" },
    { title: "Charity Auction", date: "2025-06-19", location: "Sydney", occasion: "Charity" },
    { title: "Religious Retreat", date: "2025-07-12", location: "Mumbai", occasion: "Religious" },
    { title: "Social Party", date: "2025-06-18", location: "Boston", occasion: "Social" },
    { title: "Food Festival", date: "2025-08-22", location: "New York", occasion: "Social" },
    { title: "Comedy Night", date: "2025-07-17", location: "Los Angeles", occasion: "Social" },
    { title: "Dance Party", date: "2025-09-05", location: "Chicago", occasion: "Music" },
    { title: "Tech Conference", date: "2025-10-02", location: "San Francisco", occasion: "Social" }
];

function displayEvents(eventsToDisplay) {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ''; 

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    eventsToDisplay.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Occasion:</strong> ${event.occasion}</p>
        `;

   
        eventCard.style.backgroundImage = `url('https://via.placeholder.com/500x300?text=${event.occasion}')`; // Placeholder image for each occasion

        gridContainer.appendChild(eventCard);
    });

    eventList.appendChild(gridContainer);
}

document.getElementById('apply-filters').addEventListener('click', function() {
    const occasion = document.getElementById('filter-occasion').value;

    const filteredEvents = events.filter(event => {
        return occasion === "" || event.occasion === occasion;
    });

    displayEvents(filteredEvents);
});

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const location = document.getElementById('event-location').value;
    const occasion = document.getElementById('event-occasion').value;

    const newEvent = { title, date, location, occasion };

    events.push(newEvent);
    displayEvents(events);

    document.getElementById('event-form').reset();
});


displayEvents(events);
