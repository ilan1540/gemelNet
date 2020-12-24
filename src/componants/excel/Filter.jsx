import React from 'react'

export const Filter = ({filter,setFilter}) => {
  return (
    <div>
         <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          value={filter || ''}
          onChange={(e)=>setFilter(e.target.value)}
/>
</div>
     
    
    </div>
  )
}
