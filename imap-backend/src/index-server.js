const express = require("express");
const env = require("dotenv");
const app = express();
var stream = require("./dbChangeStream");
const mongoose = require("mongoose");

var cors = require("cors");
app.use(express.json());
app.use(cors()); 

// Routes
const userRoutes = require("./routes/user");
const issueRoutes = require("./routes/issues");
const announcementRoutes = require("./routes/announcements");
const filterRoutes = require("./routes/filters");
// Environment Vars
env.config();

//establish socket.io connection
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

// Connecting to Database
const mongoUri = `${process.env.MONGO_URI}`;
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database is connected now!");
  });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected");
  console.log("Setting change streams");
  const filtersChangeStream = connection.collection("filters").watch();
  stream.filterStream(filtersChangeStream, io);
  const issuesChangeStream = connection.collection("issues").watch();
  stream.issueStream(issuesChangeStream, io);
  const announcementsChangeStream = connection
    .collection("announcements")
    .watch();
  stream.announcementStream(announcementsChangeStream, io);
});

app.use("/login", userRoutes); 
app.use("/dashboard", issueRoutes);
app.use("/announcement", announcementRoutes);
app.use("/filter", filterRoutes);

const port = 9005;

server.listen(port, () => console.log(`Server now running on port ${port}!`));
