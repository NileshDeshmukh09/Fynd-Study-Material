const sumTillN = ( n ) => {
    let sum = 0;
    for( let i = 1; i <= n; i++ ) {
        sum += i;
    }
    return sum;
}

process.on( 'message', ( data ) => {
    const result = sumTillN( data.n );

    process.send({
        result: result
    });
})