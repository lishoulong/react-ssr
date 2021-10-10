export function fetchCircuits( ) {
    return new Promise( ( res ) => {
        setTimeout( () => {
            res( [
                { circuitId: 123, circuitName: "fred", Location: "heilongjiang" },
                { circuitId: 456, circuitName: "helen", Location: "jiangxi" },
            ] );
        }, 500 );
    } );
}
