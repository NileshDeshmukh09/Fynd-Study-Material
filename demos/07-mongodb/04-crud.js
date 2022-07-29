// Add to a collection
db.users.insertOne({
    name: 'Jane Doe',
    emails: [
        'jane.doe@example.com',
        'jane.doe@yahoo.com'
    ],
    password: 'password123',
    prime: true,
    address: {
        city: 'Chennai',
        pinCode: 600101
    }
});