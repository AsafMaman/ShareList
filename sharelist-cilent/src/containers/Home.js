import React from 'react'

const Home=()=>{
    console.log('Home screen');
    return(
        <div>
        <h1>Home screen</h1>
        <button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
        </div>
    )
}

export default Home;