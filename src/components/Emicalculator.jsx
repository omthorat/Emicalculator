import { useState } from "react"
import "./Emicalculator.css"
const Emicalculator =()=>{
    const [asset ,setAsset]=useState("")
    const [downPayment,setDownPayment]=useState(0)
    const [interest,setInterest]=useState("")
    const [fees,setFees]=useState("")
    const [monthlyEmi,setMonthlyEmi]=useState("")
    const [principalAmount,setPrincipalAmount]=useState(0)
    const [tenure,setTenure]=useState(0)
    const [intrestPaid,setInterestPaid]=useState(0)
    let totalLoanAmount
   const calculateEmi=()=>{
    console.log(asset,fees,downPayment)
    let proceesingFees=asset *(0.01*fees)
    console.log(proceesingFees)
    let totalDownPayent= parseInt(downPayment) + parseInt(proceesingFees)
    totalLoanAmount= (asset - totalDownPayent)
    let monthlyInterestrate= interest/100
    let noYears=tenure/12
    let emi=(totalLoanAmount * monthlyInterestrate * (1+monthlyInterestrate)**noYears)/((1+monthlyInterestrate)**noYears-1)
    
    setPrincipalAmount(((emi/12) * parseInt(tenure)).toFixed(2))
    setMonthlyEmi((emi/12).toFixed(2))
    setInterestPaid(((emi/12).toFixed(2) * tenure)- totalLoanAmount)
   }
  
    return(
        <>
        <div className="emi">
        <div className="emi-calculator">
            <h1>EMI Calculator</h1>
            <div className="total-amount">
                
            <div className=" asset-cost input-cost">
            <label htmlFor="">Total Asset Cost</label>
            <input  type="number" required onChange={(e)=>{setAsset(e.target.value)}} placeholder="Enter Total Cost" />
            </div>
            <div className="interest input-cost">
            <label htmlFor="">Interest Rate In (%)</label>
            <input type="number" required   required  onChange={(e)=>{setInterest(e.target.value)}} placeholder="Interest Rate" />
            </div>
            <div className="fees input-cost">
            <label htmlFor="">Processing Fee</label>
            <input type="number" required  onChange={(e)=>{setFees(e.target.value)}} placeholder="Processing Fee" />
            </div>
            </div>
            <div className="down-payment">
                <h4>Select Down Payment</h4>
                <h4>Total Down Payment- {downPayment}</h4>

                <input className="slider" required  type="range" value={downPayment} onChange={(e)=>{setDownPayment(e.target.value)}} min="0" max={asset} ></input>
            </div>
            <div className="loan-tenure">
                <h4>Select Loan Tenure </h4>
                <h4>Loan Tenure- {tenure} months</h4>
                <input type="range" className="slider" value={tenure} onInput={(e)=>{setTenure(e.target.value)}} min="1" max="120" ></input>
            </div>
            <button className="button-19" onClick={()=>calculateEmi()}>calculate</button>
        </div>
        <div className="show-emi">
           <h1>Your Monthly EMI - {monthlyEmi}</h1>
           <h4>Principal Amount-{principalAmount}</h4>
           <h4>Interest Paid-{intrestPaid}</h4>
        </div>
        </div>
        </>
    )
}
export default Emicalculator