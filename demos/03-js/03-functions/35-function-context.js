const john = {
    name: 'john',
    printName() {
        const that = this;

        // capitalize has "this" set to global / window
        function capitalize() {
            console.log( this ); // global / window
            // return this.name[0].toUpperCase() + this.name.substr( 1 );
            return that.name[0].toUpperCase() + that.name.substr( 1 );
        }
        console.log( capitalize() );
    }
}

john.printName(); // "this" -> john;