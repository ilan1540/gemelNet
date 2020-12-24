import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';

export const FilterData = () => {
  const [year, setYear] = useState('2020');
  const [month, setMonth] = useState('02');
  const [afick, setAfick] = useState('101');
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState({});
  const state = useSelector(state => state.helpers.json)
 // console.log(state[0].sheetData)
  console.log(filterData)

  useEffect(()=>{
    if(state && state[0] && state[0].sheetData){
      setData(state[0].sheetData)
    }
  },[state])

//data &&  data.map((rec)=>console.log(rec))

  const onClickFilter = () =>{
    const filterKey= afick
    data &&  data.map((rec)=>console.log(rec))
   
  const filter=  data &&  data.filter((rec)=>rec.ID_KUPA==filterKey)
  setFilterData({
    data:filter,
    recNo:filter.length
  })
   
  }
  return (
    <div>
    <form className= "mt-3">
    <div className="input-group input-group-sm mb-3">
<span className="input-group-text" id="inputGroup-sizing-sm">שנה</span>
<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
value={year}
onChange={(e)=>setYear(e.target.value)}
/>
</div>
<div className="input-group input-group-sm mb-3">
<span className="input-group-text" id="inputGroup-sizing-sm">חודש</span>
<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
value={month}
onChange={(e)=>setMonth(e.target.value)}
/>
</div>
<div className="d-grid gap-2">
<button className="btn btn-primary sm" type="button"
onClick={onClickFilter}
>  סננן נמצאו   רשומות </button>
</div>



    
    </form>
     
    
    
  </div>
  )
}
