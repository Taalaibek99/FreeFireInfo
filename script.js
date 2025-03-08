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
                document.getElementById('accountName').textContent = data.message.AccountName || "N/A";
                document.getElementById('accountUID').textContent = data.message.AccountUID || "N/A";
                document.getElementById('accountLevel').textContent = data.message.AccountLevel || "N/A";
                document.getElementById('accountXP').textContent = data.message.AccountXP || "N/A";
                document.getElementById('accountRegion').textContent = data.message.AccountRegion || "N/A";
                document.getElementById('accountLastLogin').textContent = data.message.AccountLastLogin || "N/A";
                document.getElementById('brRank').textContent = data.message.BRRankPoints || "N/A";
                document.getElementById('csRank').textContent = data.message.CSRankPoints || "N/A";
                document.getElementById('guildName').textContent = data.message.GuildInformation.GuildName || "N/A";
                document.getElementById('guildLevel').textContent = data.message.GuildInformation.GuildLevel || "N/A";
                document.getElementById('petName').textContent = data.message.EquippedPetInformation.PetName || "N/A";
                document.getElementById('petLevel').textContent = data.message.EquippedPetInformation.PetLevel || "N/A";
            } else {
                document.getElementById('apiResponse').innerHTML = `<p>Error: ${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('API Error:', error);
            document.getElementById('apiResponse').innerHTML = '<p>Error fetching data.</p>';
        });
});
