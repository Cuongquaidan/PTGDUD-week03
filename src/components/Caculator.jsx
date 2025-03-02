import React, { useState } from 'react'

function Caculator() {
    let currentYear = new Date().getFullYear()
    const [money,setMoney] = useState("")
    const [rate,setRate] = useState("")
    const [goal,setGoal] = useState("")
    const [resultCal,setResultCal] = useState([])
    const handleCaculate = ()=>{
        let temp = [
            {
                year: "Year",
                money: "Money",
                rate: "Rate",
                result: "Result"
            }
        ]
        let currentMoney = parseFloat(money);
        const rateCurrent = parseFloat(rate);
        let result = currentMoney;

        while(result< goal){
            result=currentMoney*(1+parseFloat(rate)/100)
            temp.push(
                {year:currentYear,money:currentMoney.toFixed(2),rate:rateCurrent,result:result.toFixed(2)}
            )
            currentYear+=1;
            currentMoney = result;
           
        }
        setResultCal(temp)
    }
  return (
    <section className=' w-[500px] p-8 shadow flex flex-col gap-8 min-h-screen'>
        <h2 className='text-xl font-bold text-center'>Investment calculation</h2>
        <div className='flex flex-col gap-4'>
        <input value={money} onChange={(e)=>setMoney(e.target.value)} type="text" placeholder='Enter your money' className='bg-slate-200 shadow p-4 rounded-2xl' />
        <input  value={rate} onChange={(e)=>setRate(e.target.value)} type="text" placeholder='Enter your rate' className='bg-slate-200 shadow p-4 rounded-2xl' />
        <input value={goal} onChange={(e)=>setGoal(e.target.value)} type="text" placeholder='Enter your goal' className='bg-slate-200 shadow p-4 rounded-2xl'  />

        <button className='p-4 rounded-2xl cursor-pointer !bg-green-500 text-white text-2xl' onClick={handleCaculate}>Calulate</button>
        </div>

        <div>
      
        <table>
            {
                resultCal[0] &&
                <thead>
                    <tr className=''>
                            <td>{resultCal[0].year}</td>
                            <td>{resultCal[0].money}</td>
                            <td>{resultCal[0].rate}</td>
                            <td>{resultCal[0].result}</td>
                    </tr>
                </thead>
            }
           <tbody>
           {
                resultCal.slice(1).map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.money}</td>
                            <td>{item.rate}</td>
                            <td>{item.result}</td>
                        </tr>
                    )
                })
            }
           </tbody>
        </table>
        </div>
    </section>
  )
}

export default Caculator