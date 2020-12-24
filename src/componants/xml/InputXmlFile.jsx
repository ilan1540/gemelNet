import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setExcelWb,setExcelJson } from '../redux/actionHelper';
import {xmlToJson} from './xml-render'

export const InputXmlFlle = () => {
  const [fileName, setFileName] = useState('Choose File');

  const dispatch = useDispatch();

  const onGetExcelFilel =(e)=>{
    if (e.target.files[0].name) {
     //  setFile(e.target.files[0]);
       setFileName(e.target.files[0].name);
 let fileObj = e.target.files[0]

      xmlToJson(fileObj,(err,resp)=>{
        if(err){
          console.log(err);            
        }
        else{
        // dispatch(setExcelWb(resp));
         console.log(resp);
        } 
      })

  }

  }

 
  return (
    <form>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            accept=".xml "
            onChange={onGetExcelFilel}
            
          />
          <label className="custom-file-label text-center" htmlFor="customFile">{fileName}</label>
        </div>
       
      </form>
  )
}
