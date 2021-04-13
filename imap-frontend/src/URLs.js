let URLs = {};
let url = process.env.NODE_ENV === "production"
? "/socket.io/"
: "http://localhost:5000/";

URLs = {
  socketURL: url,
};

export default URLs;
