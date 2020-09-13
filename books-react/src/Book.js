import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Book() {

    const [isbno, setIsbno] = useState("")
    useEffect(async () => {
        const result = await axios(
            `http://127.0.0.1:5000/search/${isbno}`,
        );
            
        setIsbno(result.isbn.isbno);
        console.log(result.isbn)
      }, []);
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
