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
    },
    getNumChildren() {
        return this.children.length;
    }
};

john.celebrateBirthday();
john.addChild( 'Jamie' );
john.changeAddress( 'Bangalore', 'Indiranagar', 560050 )

// add a new function at runtime
john.addEmail = function( email ) {
    this.emails.push( email );
};

john.addEmail( 'john@yahoo.com' );

console.log( john );
console.log( john.getNumChildren() );