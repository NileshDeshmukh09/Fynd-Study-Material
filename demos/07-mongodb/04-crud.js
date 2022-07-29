// Add to a collection
db.users.insertOne({
    name: 'Mark Smith',
    emails: [
        'mark.smith@example.com',
        'mark.smith@yahoo.com'
    ],
    password: 'password345',
    prime: true,
    address: {
        city: 'Delhi',
        pinCode: 100001
    }
});

db.users.insertMany(
    [
        {
            name: 'Mary Smith',
            emails: [
                'mary.smith@example.com',
                'mary.smith@yahoo.com'
            ],
            password: 'password345',
            prime: true,
            address: {
                city: 'Delhi',
                pinCode: 100001
            }
        },
        {
            name: 'David Smith',
            emails: [
                'david.smith@example.com',
                'david.smith@yahoo.com'
            ],
            password: 'password345',
            prime: true,
            address: {
                city: 'Bangalore',
                pinCode: 560101
            }
        }
    ]
);

// find users who live in Delhi
db.users.find({
    "address.city": "Delhi"
}).pretty()

// search by name
db.users.find({
    name: "David Smith"
}).pretty()

// no filtering -> we get all users!
db.users.find().pretty();

// query array-valued attributes like they have simple values (and not array!)
db.users.find({
    emails: 'jane.doe@example.com'
}).pretty();

// multiple filtering criteria (all criteria have to match)
db.users.find({
    prime: true,
    "address.city": "Delhi"
}).pretty();

// how to get only specific fields in the results??...
// 1st argument (filtering condition), 2nd argument (fields to select)
// pass 1st argument empty object - {}, to get all records
db.users.find(
    {
        prime: true,
        "address.city": "Delhi"
    },
    {
        _id: false,
        name: true,
        password: true
    }
).pretty();

// get all users (no filtering), but only selected fields
db.users.find(
    {},
    {
        _id: false,
        name: true,
        password: true
    }
).pretty();

// query by id
db.users.find({
    _id : ObjectId("62e3ccee5faa4530e1f7fbd1")
}).pretty();

// 1st argument is same as in find() - which document(s) to update - updateOne() will update only the first matched document
// 2nd argument is the update clause
// $set is an "update clause operator"
db.users.updateOne(
    {
        _id : ObjectId("62e3ccee5faa4530e1f7fbd1")
    },
    {
        $set: {
            name: 'Jonathan Doe'
        }
    }
);

// $push operator to add a new entry at the end of an array field
db.users.updateOne(
    {
        emails: 'jane.doe@example.com'
    },
    {
        $push: {
            emails: 'jane.doe@fynd.com'
        }
    }
);
