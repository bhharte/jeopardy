import React from 'react';

function Welcome(props) {
    let name= props.match.params.name || props.name;
return (
    

    <div className="Welcome">
        Welcome to the Jeopardy Challenge!
    </div>

)

}

export default Welcome;