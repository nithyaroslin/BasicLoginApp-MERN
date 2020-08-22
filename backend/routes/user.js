const router = require("express").Router();
let User = require("../models/user.model");

router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    emailAddress,
    password,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/findUser").put((req, res) => {
  // console.log(req.body.emailAddress);
  // console.log(req.body.password);
  User.findOne(
    {
      $and: [
        { emailAddress: req.body.emailAddress },
        { password: req.body.password },
      ],
    },
    { firstName: 1, _id: 0 }
  )
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
