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
)