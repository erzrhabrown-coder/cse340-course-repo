import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';

// Define the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
  * Configure Express middleware
  */
 const app = express();


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));  



/**
  * Routes
  */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});

app.get('/organizations', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/organizations.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/projects.html'));
});

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello Ezra, from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});