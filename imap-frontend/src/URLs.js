let URLs = {};
let url = process.env.NODE_ENV === "production"
? "/back"
: "http://localhost:5000/api";

URLs = {
  socketURL: url,
};

export default URLs;
