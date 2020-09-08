import React from 'react'

let List=(props)=>{

    


    return(
<>
       <div className="To_do_style">
       <button onClick={()=>{

        props.onSelect(props.id)

       }}>X</button>

       <li>{props.text}</li>
       </div>

        </>

    )
}

export default List;