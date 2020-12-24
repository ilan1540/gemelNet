import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import {useFirestoreConnect} from 'react-redux-firebase'
import {setAfic} from '../redux/actionHelper'

export const SaveToFirestore = ({history}) => {
  const [data, setData] = useState({});
  const [year, setYear] = useState('');
  //const [id, setId] = useState('');
  //const [doc, setDoc] = useState('');
  //const [filterData, setFilterData] = useState({});
  //const [isSave, setIsSave] = useState(false);
  const [fundIdList, setFundIdList] = useState([]);
  const [afickToSave, setAfickToSave] = useState();

  useFirestoreConnect(['afickNo'])


  const objToSave = useSelector(
    (state) => state.helpers && state.helpers.json[0]
  )

  const afickList = useSelector(
    (state) => state.firestore.ordered.afickNo
  )

  
  useEffect(()=>{
   
    if(afickList && afickList[1]){
    //  console.log(afickList[1].sheetData)
      setFundIdList(afickList[1].sheetData)
    }
   },[afickList])
  
  useEffect(()=>{
  if(objToSave && objToSave.sheetData){
  setData(objToSave.sheetData)
  }
  },[objToSave,data])

  //console.log(data)
  
  const firestore = useFirestore();
const dispatch = useDispatch()

  const mackRecToSave = async (rec)=>{
    let months = []
    let newDoc= {} 
    rec.map((r)=>{
       newDoc= {
        FUND_ID:r.FUND_ID,
        FUND_NAME: r.FUND_NAME,
        year: year,
        monts:months
      }

      months.push(
        {
          REPORT_PERIOD:r.REPORT_PERIOD,
          DEPOSITS: r.DEPOSITS,
          WITHDRAWLS:r.WITHDRAWLS,
          INTERNAL_TRANSFERS:r.INTERNAL_TRANSFERS,
          NET_MONTHLY_DEPOSITS:r.NET_MONTHLY_DEPOSITS,
          TOTAL_ASSETS:r.TOTAL_ASSETS,
          AVG_ANNUAL_MANAGEMENT_FEE:r.AVG_ANNUAL_MANAGEMENT_FEE,
          AVG_DEPOSIT_FEE:r.AVG_DEPOSIT_FEE,
          MONTHLY_YIELD:r.MONTHLY_YIELD,
          YEAR_TO_DATE_YIELD:r.YEAR_TO_DATE_YIELD,
          YIELD_TRAILING_3_YRS:r.YIELD_TRAILING_3_YRS,
          YIELD_TRAILING_5_YRS:r.YIELD_TRAILING_5_YRS,
          AVG_ANNUAL_YIELD_TRAILING_3YRS:r.AVG_ANNUAL_YIELD_TRAILING_3YRS,
        	AVG_ANNUAL_YIELD_TRAILING_5YRS:r.AVG_ANNUAL_YIELD_TRAILING_5YRS,
          STANDARD_DEVIATION:r.STANDARD_DEVIATION,
          ALPHA:r.ALPHA,
          SHARPE_RATIO:r.SHARPE_RATIO,
          LIQUID_ASSETS_PERCENT:r.LIQUID_ASSETS_PERCENT,
          STOCK_MARKET_EXPOSURE:r.STOCK_MARKET_EXPOSURE,
        	FOREIGN_EXPOSURE:r.FOREIGN_EXPOSURE,
          FOREIGN_CURRENCY_EXPOSURE:r.FOREIGN_CURRENCY_EXPOSURE
          }
      )
      const toState ={
       ...afickToSave ,afickToSave: {...afickToSave, newDoc} 
      }
    //  afickList

      setAfickToSave(toSave)
      console.log(toSave)
    }
    )
  //console.log(newDoc.FUND_ID) 
  const aficId=newDoc.FUND_ID
  const toSave= {
   afick:newDoc.FUND_ID,
   data:newDoc
  }
//  console.log(toSave)
//  dispatch(setAfic(toSave))
  
//  return await  firestore.collection('gemel').doc('2020').set(toSave).then(() => console.log('seved') ).catch((err) => console.log(err))
  }
  

  const onClickFilter = () =>{
    const data =objToSave.sheetData

    if(fundIdList && data){
      fundIdList.map((key)=>{
      //  console.log(key.FUND_ID)
        const filter=  data.filter((rec)=>rec.FUND_ID ==key.FUND_ID)
        mackRecToSave(filter)
        
      })
    }
  }



  async function  onClickSaveAcount() { 
    const new1 = {
      '022020': data
    }   
    console.log(new1)// stop save
    await  firestore.collection('data').doc("2020").set(objToSave).then(() => console.log('seved') ).catch((err) => console.log(err))
    
  }

  
  return (
    <div>
      <form className= "mt-3">
      <div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">שנה</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
  placeholder="inseret collection"
  value={year}
  onChange={(e)=>setYear(e.target.value)}
  />
</div>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">חודש</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
  placeholder="insert doc id"
  value={'id'}
  onChange='{(e)=>setId(e.target.value)}'
  />
</div>
<div className="d-grid gap-2">
<button className="btn btn-primary sm" type="button"
onClick={onClickFilter}
>  סננן נמצאו  '{'filterData.recNo'}' רשומות </button>
</div>



      <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ cursor: 'pointer' }}
        onClick={onClickSaveAcount}
      >
       שמור נתונים לחודש 
      </button>
      </form>
       
      
      
    </div>
  );
};
