const user = "intelistyle";
const password = "ZEa01sSQWchnqMUt";
const database = "Intelistyle-challenge";
const mongoURI = `mongodb+srv://intelistyle:${password}@intelistyle-challenge.ykzfk.mongodb.net/${database}?retryWrites=true&w=majority`;

module.exports = {
    user,
    password,
    database,
    mongoURI
}