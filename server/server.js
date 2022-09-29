import app from "./app.js";

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server is running"));

// all games api = http://localhost:5000/api/v1/games/all-games
// all companies api = http://localhost:5000/api/v1/company/all-companies
