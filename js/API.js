// Define a function that returns some data
function getData() {
  return {
    name: "Calis Ji",
    age: 25,
    city: "Da Nang",
  };
}

// Define an API endpoint that calls the getData() function
const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  const data = getData();
  res.json(data);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
