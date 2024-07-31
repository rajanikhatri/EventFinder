document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const timeFrom = document.getElementById('timeFrom').value;
    const timeTo = document.getElementById('timeTo').value;

    // Example event data ( I don't know how to fetched from an API) 
    //to-do : fetch data from API ( https://www.visitcincy.com/blog/post/things-to-do-this-weekend/ This is website where we could get live events)
    const events = [
        { name: 'Concert A', city: 'New York', date: '2024-08-01', time: '18:00' },
        { name: 'Art Exhibit B', city: 'New York', date: '2024-08-01', time: '19:00' },
        { name: 'Comedy Show C', city: 'Los Angeles', date: '2024-08-01', time: '20:00' },
    ];

    // Filter events based on form inputs
    const filteredEvents = events.filter(event => {
        return event.city.toLowerCase() === city.toLowerCase() &&
               event.date === date &&
               event.time >= timeFrom && event.time <= timeTo;
    });

    // Display the filtered events
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    if (filteredEvents.length > 0) {
        filteredEvents.forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = `${event.name} at ${event.time}`;
            eventList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No events found for the selected criteria.';
        eventList.appendChild(listItem);
    }
});
