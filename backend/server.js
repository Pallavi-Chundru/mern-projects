// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const {reportIssue} =require('./controllers/issueController')

//import routes
const authRoutes = require('./routes/auth');
const authRoutess=require('./routes/authRoutes')
const issueApi=require('./routes/issueApi')



// Use CORS middlewar
app.use(cors());

// Load environment variables
dotenv.config();




// Use body-parser middleware to handle JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutess);
app.use('/api',issueApi);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});


//deployment
const path = require("path");

app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..//"));
});

// Serve other HTML files based on their URL
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../about.html"));
});

app.get("/report-issue", (req, res) => {
  res.sendFile(path.join(__dirname, "../blog.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../blogPage.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../dashboard.html"));
});

app.get("/FAQ", (req, res) => {
  res.sendFile(path.join(__dirname, "../FAQ.html"));
});

app.get("/features", (req, res) => {
  res.sendFile(path.join(__dirname, "../feature.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..//login"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../service.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../signup.html"));
});

app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "../team.html"));
});

app.get("/testimonial", (req, res) => {
  res.sendFile(path.join(__dirname, "../testimonial.html"));
});

// Handle 404 errors by serving 404.html
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../404.html"));
});






