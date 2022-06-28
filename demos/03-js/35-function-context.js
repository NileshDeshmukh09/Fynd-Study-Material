const john = {
    name: 'john',
    printName() {
        // capitalize has "this" set to global / window
        function capitalize() {
            console.log( this ); // global / window
            // return this.name[0].toUpperCase() + this.name.substr( 1 );
        }
        console.log( capitalize() );
    }
}

john.printName(); // "this" -> john;