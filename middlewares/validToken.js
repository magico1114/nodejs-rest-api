const jwt = require('jsonwebtoken');
const { JWT } = require('../config');

// Really basic token verification!
// TODO: More complete token verification with decode method of jwt to check if the token has been expired or log data.
const validToken = (req, res, next) => {
    const token = req.headers['access-token'];

    if (!token)
      return res.status(401).send({ error: "Missing token" });

    // Syncronic jwt verification in a few lines
    try {
      let data = jwt.verify(token, JWT.key, JWT.options);
      console.log(JSON.stringify(data));
      next();
    } catch (e) {
      //console.log("Error: " + e);
      return res.status(401).send({ error: "Invalid token" });
    }
 };

 module.exports = validToken;