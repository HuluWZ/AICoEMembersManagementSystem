const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:5500/api/members")
    .then(function (response) {
      res.render("index", { members: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:5500/api/members", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { members: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
