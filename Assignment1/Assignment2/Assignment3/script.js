let allUsers = [];


// Fetch users from API

async function getUsers() {

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");

    loading.style.display = "block";
    error.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Check response

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }


        // Convert response to JSON

        allUsers = await response.json();


        // Display users

        displayUsers(allUsers);


        // Update total users

        document.getElementById("totalUsers").innerText =
            allUsers.length;

    }

    catch (err) {

        error.innerHTML =
            "❌ Unable to load data. Please try again.";

        console.log(err);
    }

    finally {

        loading.style.display = "none";
    }
}



// Display users on webpage

function displayUsers(users) {

    const container =
        document.getElementById("userContainer");

    container.innerHTML = "";


    document.getElementById("displayedUsers").innerText =
        users.length;


    if (users.length === 0) {

        container.innerHTML =
            "<h3>No users found.</h3>";

        return;
    }


    users.forEach(user => {

        const card = document.createElement("div");

        card.className = "user-card";


        card.innerHTML = `
            <h2>👤 ${user.name}</h2>

            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${user.phone}
            </p>

            <p>
                <strong>Website:</strong>
                ${user.website}
            </p>

            <p>
                <strong>City:</strong>
                ${user.address.city}
            </p>

            <p>
                <strong>Company:</strong>
                ${user.company.name}
            </p>
        `;


        container.appendChild(card);

    });
}



// Search users

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const searchText =
            this.value.toLowerCase();


        const filteredUsers =
            allUsers.filter(user =>
                user.name
                    .toLowerCase()
                    .includes(searchText)
            );


        displayUsers(filteredUsers);

    });



// Load data automatically

getUsers();



