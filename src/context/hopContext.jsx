import React from "react"
const defaultValues = {
   updateScroll:(value)=>{},
   scrollVal: 'hello',
}
const HopContext = React.createContext(defaultValues)
export default HopContext
