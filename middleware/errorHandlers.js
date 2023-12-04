// middleware/errorHandlers.js

exports.handleErrors = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: 'An error occured' });
}