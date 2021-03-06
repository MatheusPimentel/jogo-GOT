// importar o mongodb
let mongo = require('mongodb').MongoClient;
let assert = require('assert');
const url = "mongodb://localhost:27017";
const dbName = "got";

let connMongoDB = function (dados) {
    mongo.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        query(db, dados);
        client.close();
    });
};

function query(db, dados) {
    let collection = db.collection(dados.collection);
    switch (dados.operacao) {
        case "inserir":
            collection.insertOne(dados.usuario, dados.callback);
            break;
        default:
            break;
    }
}

module.exports = function () {
    return connMongoDB;
};
