import { useEffect, useState } from "react";

export const useDebouncedSetValue = ( input: string = '' , time: number = 500 ) => {
    
    const [debouncedValue , setDebouncedValue] = useState(input);

    useEffect(() => {

        const timeOut =  setTimeout( () => {
            setDebouncedValue( input );
        }, time )

        return () => {
            clearTimeout( timeOut );
        }

    } , [input]);

    return debouncedValue;

};
