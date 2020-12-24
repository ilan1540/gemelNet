import React,{useEffect} from 'react'
import {useSelector}  from 'react-redux'


export const GetDirList = () => {

   const data = useSelector(state => state.helpers.json)

  useEffect(()=>{
    const myFile= 'gemelnet_data_current.csv'
    fetch(myFile).then((res)=>{
     console.log(res)
    })
    
  },[])

  const onClick =()=>{
   console.log(data)
  }
 
 


  return (
    <div>
      <button 
      type="button"
       className="btn btn-primary"
       onClick={onClick}
       >Primary</button>
    </div>
  )
}
