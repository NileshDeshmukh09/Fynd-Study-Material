const john = {
    'name': 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@fynd.com'
    ],
    children: [
        'Jack',
        'Jill'
    ],
    address: {
        city: 'Mumbai',
        area: 'Bandra',
        pinCode: 400010
    },
    // celebrateBirthday: function() {
    //     this.age++;
    // }
    celebrateBirthday() { // ES2015
        this.age++;
    },
    addChild( child ) {
        this.children.push( child );
    },
    changeAddress( city, area, pinCode ) {
        this.address.city = city;
        this.address.area = area;
        this.address.pinCode = pinCode;
    }
};

john.celebrateBirthday();
john.addChild( 'Jamie' );
john.changeAddress( 'Bangalore', 'Indiranagar', 560050 )
console.log( john );