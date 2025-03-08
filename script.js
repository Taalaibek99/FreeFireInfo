document.getElementById('submitBtn').addEventListener('click', function () {
    const uid = document.getElementById('uidInput').value;

    if (!uid) {
        alert('Please enter a UID.');
        return;
    }

    // API'ге сурам жөнөтүү
    const apiUrl = `https://freefire-virusteam.vercel.app/info?uid=${uid}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // API жообун көрсөтүү
            if (data.status === "Success") {
                document.getElementById('name').textContent = data.message.Name || "N/A";
                document.getElementById('uid').textContent = data.message.UID || "N/A";
                document.getElementById('level').textContent = data.message.Level || "N/A";
                document.getElementById('rank').textContent = data.message.Rank || "N/A";
                document.getElementById('status').textContent = data.message.Status || "N/A";
            } else {
                document.getElementById('apiResponse').innerHTML = `<p>Error: ${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('API Error:', error);
            document.getElementById('apiResponse').innerHTML = '<p>Error fetching data.</p>';
        });
});
