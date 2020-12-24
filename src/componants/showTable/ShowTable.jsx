import React,{useMemo,useEffect,useState} from 'react'
import {useTable ,useGlobalFilter} from 'react-table'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import { GlobalFilter } from '../excel/GlobalFilter'
//import  './table.css'

export const ShowTable = () => {
  const [myData, setMyData] =useState([])
  const [header, setHeader] =useState([])

  useFirestoreConnect([
    {
      collection: 'afickNo',
      doc: 'short'
    }
  ])

 
 const getData = useSelector(
  ({ firestore: { ordered } }) => ordered.afickNo && ordered.afickNo[0]
)


 
 useEffect(()=>{
  if(getData){
    setMyData(getData.sheetData)
    setHeader(getData.columns)
  }
  
 },[getData])
 

const columns = useMemo(()=> header,[header])
const data = useMemo(()=> myData ,[myData])




const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  state,
  setGlobalFilter,
  preGlobalFilteredRows,
} = useTable({
  columns,
  data},useGlobalFilter)

//  const {globalfilter} = state
//const ttt = useGlobalFilter()
 // const {globalfilter} = state
 
 // console.log(state)


 console.log(state)
  
  
  return (
    <>
    <GlobalFilter
     preGlobalFilteredRows={preGlobalFilteredRows}
     globalFilter={state.globalFilter}
     setGlobalFilter={setGlobalFilter}
     />
    <div className="container mt-5">
      {data ?(
       <table className="table" {...getTableProps()} >
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     ):null}
    </div>
    </>
  )
}

