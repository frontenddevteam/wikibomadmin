const q = require("q");

const findAccount = (db, user) => {
    let account = undefined;
    if (user) {
        const defer = q.defer();
        const collection = db.collection("account");
        collection.findOne({user}, (err, result) => {
            if (err) {
                defer.reject(err);
                console.log(`Can not find user ${user}.`);
            } else {
                defer.resolve();
                console.log(`Found the following records: ${result.name}`);
                account = result;
                console.log(`account: ${account}`);
            }
          });
    } else {
        console.log("Account user name is empty or undefined.");
    }
    return account;
}

const insertAccount = (db, account) => {
    let isAddedAccount = false;
    if (account) {
        const defer = q.defer();
        // Get the documents collection
        const collection = db.collection("account");
        // Insert some documents
        collection.insertMany([{
            "user": account.user,
            "password": account.password,
            "firstName": account.firstName,
            "lastName": account.lastName
        }], (err, result) => {
            if (err) {
                defer.reject(err);
                console.log(`Insert documents failed: ${err}`);
            } else {
                defer.resolve(result);
                console.log("Inserted  documents into the collection");
                
            }
        });
        isAddedAccount = defer.promise;
    } else {
        console.log("Account is empty or undefined.");
    }
    return isAddedAccount;
};

module.exports = {
    findAccount,
    insertAccount
}