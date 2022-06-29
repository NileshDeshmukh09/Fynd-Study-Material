console.log( this ); // "global" / "window"

const john = {
    name: 'john',
    printName() {
        // capitalize has "this" set to john (because it is an arrow it "borrows" its "this" from the enclosing function)
        const capitalize = () => {
            console.log( this ); // john
            return this.name[0].toUpperCase() + this.name.substr( 1 );
        };

        console.log( capitalize() );
    }
}

john.printName(); // "this" -> john;