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

