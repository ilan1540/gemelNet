import xml2js from 'xml2js';
export const xmlToJson =(file, callback) =>{
const parser = new xml2js.Parser()
let fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = (event) => {
        let data = event.target.result;
        parser.parseString(data,(err,res)=>{
         // console.log(res.ROWSET.Row)
          return callback(null, res.ROWSET.Row);
        })
      }



}