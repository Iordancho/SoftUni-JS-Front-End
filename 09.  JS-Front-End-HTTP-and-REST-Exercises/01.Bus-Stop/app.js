async function getInfo() {
    const busStopId = document.querySelector('#stopId').value;
    const listItems = document.querySelector('#buses');
    const stopName = document.querySelector('#stopName');
    listItems.textContent = "";
    stopName.textContent = "";

    

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)
    .then(res => res.json())
    .then(busStop => {
        stopName.textContent = busStop.name;
        Object.entries(busStop.buses).map(([busNumber, timeInMins]) => {
            const item = document.createElement('li');
            item.textContent = `Bus ${busNumber} arrives in ${timeInMins} minutes`;
            listItems.appendChild(item);
        })
    })
    .catch(() => {
        stopName.textContent = "Error";
    })
    
}