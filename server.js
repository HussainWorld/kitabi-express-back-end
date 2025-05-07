// npm
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

// Import routers
const authRouter = require('./controllers/auth');
const testJwtRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');

const adsRouter = require('./controllers/ads');
const wantedAdsRouter = require('./controllers/wantedAds');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
const corsOptions = {
  origin: 'https://kitabi-react-front-end-git-main-hussains-projects-06bdfe2e.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies, authorization headers, etc.
};

app.use(cors(corsOptions));  // Use this instead of app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);
app.use('/users', usersRouter);

app.use('/ads', adsRouter);
app.use('/wantedAds', wantedAdsRouter);

const port = process.env.PORT || 3000;

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log('The express app is ready!');
});
