import React,{useMemo,useEffect,useState} from 'react'
import {useTable,useGlobalFilter} from 'react-table'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import { GlobalFilter } from './GlobalFilter'
//import  './table.css'

export const ShowTable = () => {
  const [myData, setMyData] =useState([])
  const [header, setHeader] =useState([])

  const jsonData = useSelector(jsonData => jsonData.helpers.json)
 // console.log(jsonData)


 
 useEffect(()=>{
  if(jsonData && jsonData[0]){
    setMyData(jsonData[0].sheetData)
  }
 
   
 
 },[jsonData])
 

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
} = useTable({
  columns,
  data},useGlobalFilter)

  const {globalfilter} = state
  
  return (
    <>
    <GlobalFilter filrer={globalfilter} setFilter={setGlobalFilter} />
    <div className="container mt-5">
      {data ?(
       <table {...getTableProps()} >
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

