// // Initialize the map
// const map = L.map("map").setView([0, 0], 2); // Set initial coordinates and zoom level

// // Add a tile layer (e.g., OpenStreetMap)
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
// }).addTo(map);

// // Function to get IP location and add a marker to the map
// async function addMarkerFromIP(ip, token) {
//   const response = await fetch(`https://ipinfo.io/${ip}/json?token=${token}`);
//   const data = await response.json();

//   const { loc, city, region, country } = data;
//   const [lat, lon] = loc.split(",");

//   const marker = L.marker([lat, lon]).addTo(map);
//   marker.bindPopup(
//     `IP: ${ip}<br>City: ${city}<br>Region: ${region}<br>Country: ${country}`
//   );
// }

// const fictionalToken = "5cad74fc6bbb31";

// const getPublicIPAddress = async () => {
//   try {
//     const response = await fetch("https://ipinfo.io/json");

//     if (response.ok) {
//       const data = await response.json();
//       const publicIP = data.ip;
//       console.log("Public IP Address:", publicIP);
//       return publicIP;
//     } else {
//       console.error("Unable to retrieve public IP address");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// };

// var myIp = getPublicIPAddress();
// console.log(getPublicIPAddress);

// addMarkerFromIP(`${myIp}`, fictionalToken);
const map = L.map("map").setView([0, 0], 2); // Set initial coordinates and zoom level

// Add a tile layer (e.g., OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Function to get IP location and add a marker to the map
async function addMarkerFromIP(ip, token) {
  const response = await fetch(`https://ipinfo.io/${ip}/json?token=${token}`);
  const data = await response.json();

  const { loc, city, region, country } = data;
  const [lat, lon] = loc.split(",");

  const marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(
    `IP: ${ip}<br>City: ${city}<br>Region: ${region}<br>Country: ${country}`
  );
}

const fictionalToken = "5cad74fc6bbb31";

const getPublicIPAddress = async () => {
  try {
    const response = await fetch("https://ipinfo.io/json");

    if (response.ok) {
      const data = await response.json();
      const publicIP = data.ip;
      console.log("Public IP Address:", publicIP);
      return publicIP;
    } else {
      console.error("Unable to retrieve public IP address");
      return null; // Handle the error gracefully
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null; // Handle the error gracefully
  }
};

// Use an async function to ensure that you wait for the IP address
async function initMap() {
  const myIp = await getPublicIPAddress();
  if (myIp) {
    addMarkerFromIP(myIp, fictionalToken);
  }
}

initMap();
