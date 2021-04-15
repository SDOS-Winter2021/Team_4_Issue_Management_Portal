let URLs = {};

let url =
  process.env.NODE_ENV === "production"
    ? "/socket.io/"
    : "http://localhost:9005/";

URLs = {
  socketURL: url,
};

export default URLs;
