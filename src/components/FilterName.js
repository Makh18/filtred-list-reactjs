import React,{useState} from 'react'
import JSONDATA from "./MOCK_DATA.json"


const FilterName = () => {
    const[queryterm, setQueryTerm]=useState("");


    const filterUserName=(event)=>{
             setQueryTerm(event.target.value);
      

    }
  return (
    <div  className="container-users" onChange={filterUserName}>
        <input type="text"/>
        {JSONDATA.filter((item)=>{
          if(queryterm===""){
            return item
          }else if(item.first_name.toLowerCase().includes(queryterm.toLowerCase())){
            return item
          }else{
            return null;
          }
        }).map((item, id)=>{
             return(
            <div key={id}>
                {item.first_name}

            </div>
             )
         })}
        
        
        
        FilterName</div>
  )
}

export default FilterName