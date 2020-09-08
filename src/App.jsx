import React,{useState} from 'react'
import './index.css'
import List from './list'

let App=()=>{

    let[present_state,update_state]=useState("")
    let[items,uitems]=useState([])

    let input_event=(event)=>{

        update_state(event.target.value)

    }

    let item_show=(event)=>{

    event.preventDefault()

    uitems((olditems)=>{

        return [...olditems,present_state]


    }
    
    )

    update_state("")




    }

    let deleteItems=(id)=>
    {
        uitems((olditems)=>{

            return olditems.filter((Arrayelement,index)=>{

                return index!=id



            })

            

            






        })

        
    }

    

    return(

        <div className='main-div'>

        <diV className='center-div'>
        <h1>To do List</h1>
        <hr></hr>

        <input type='text'
         placeholder="What is your next day schedule ?" 
         onChange={input_event}
         value={present_state}
         />

         <button onClick={item_show}>+</button>

         <ol>

         {items.map((itemval,index)=>
            {
                return <List text={itemval} key={index} id={index} onSelect={deleteItems}></List>
                

            }
        
            )}
         
         
         
         </ol>
        
        
        </diV>
        
        
        
        
        </div>






    )







}

export default App;

