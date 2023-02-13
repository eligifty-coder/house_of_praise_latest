import HopContext from "./hopContext";
import { useReducer } from "react";
const defaultValues = {
   scrollVal: ''
}
const scrollReducer = (state, action) => {
   switch (action.type) {
      case 'ADD':
         return {
            ...state,
            scrollVal: action.value
         }
         
      default:
         return { ...defaultValues }
   }
}
const HopProvider = (props) => {
   const [scrollState, dispatchScrollAction] = useReducer(scrollReducer, defaultValues)
   const handleScrollUpdate = value => {
      dispatchScrollAction({ type: 'ADD', value: value })
   }
   const contextItem = {
      scrollVal: scrollState.scrollVal,
      updateScroll: handleScrollUpdate
   }
   return <HopContext.Provider value={contextItem}>
      {props.children}
   </HopContext.Provider>
}
export default HopProvider