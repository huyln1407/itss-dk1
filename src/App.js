import React,{useState} from 'react';
function App() {
    const [point,setPoint] = useState(1);
    const [name,setName] = useState("Huyen");
    const [data,setData] = useState(["Huyen","Hoa","Hung","Long"])
  return (
    <div style={{margin:20}}>
       <div style={{marginBottom:20}}>
           学生一覧： [Huyen,Hoa,Hung,Long]
       </div>
        <div style={{marginBottom:20}}>
            位置： {point}
        </div>
        <div style={{marginBottom:20}}>
            名前 {name}
        </div>
        <div>
            <button onClick={()=>{if((point+1)%4 !=0)
            {setPoint((point+1)%4);setName(data[(point+1)%4-1])}
            else {
                setPoint(4);setName(data[3]);
            }}}>
                次に
            </button>
            <button style={{marginLeft:30}} onClick={()=>{if((point-1)%4 !=0)
            {setPoint((point-1)%4);setName(data[(point-1)%4-1])}
            else {
                setPoint(4);setName(data[3]);
            }}}>
                前に
            </button>
        </div>
    </div>
  );
}

export default App;
