import React from 'react'

const BarChart = ({value} : {value: number}) => {
  const barStyling = `w-14 text-center`
  console.log(barStyling)
  console.log("value "+value)
  let barChartBgColor;

  if(value >=0 && value <= 25) {
    barChartBgColor = "bg-emerald-400"
  } else if (value >= 26 && value <= 50) {
    barChartBgColor = "bg-yellow-400"
  } else if (value >= 51 && value <= 75) {
    barChartBgColor = "bg-red-400"
  } else {
    barChartBgColor = "bg-blue-400"
  }

  return (
    <div className={`${barStyling} ${barChartBgColor}` } style={{ height: `${value}px`}}>{value}</div>
  )
}

export default BarChart