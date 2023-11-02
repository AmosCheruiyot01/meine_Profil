import React, { useState } from 'react';

function Fetcher()  {


const [data, setData] = useState(null);


fetch('http://localhost:5173/skills')
    .then(response => response.json())
    .then(data => setData(data));

        console.log(data);

    return (
        <div>
            <h1>Fetcher</h1>
        </div>
    )
}