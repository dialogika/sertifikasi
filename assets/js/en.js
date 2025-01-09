// Dapatkan alamat IP pengunjung
const ipAddress = await fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => data.ip);

// Gunakan API Geolocation untuk mendapatkan negara pengunjung
const countryCode = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=b699fc3c2ce745a2a72cadf285867e6d
&ip=${ipAddress}`)
  .then(response => response.json())
  .then(data => data.country_code);

// Periksa apakah negara pengunjung adalah Indonesia
if (countryCode !== 'ID') {
  // Alihkan pengunjung ke dialogika.co/en
  window.location.href = 'https://dialogika.co/en';
}

