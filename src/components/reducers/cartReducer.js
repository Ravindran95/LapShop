import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1, desc: "Acer Aspire 3 AMD Ryzen 3 15.6-inch Full HD 1366 x 768 Display Thin and Light Laptop (4GB Ram/1TB HDD/Window 10, Home/Integrated Graphics/Pure Silver), A315-233.7 out of 5 stars 17, ex.", price:382,img:Item1},
        {id:2,desc: "HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX, ex.", price:820,img: Item2},
        {id:3,desc: "ASUS VivoBook 14 Intel Core i5-1035G1 10th Gen 14-inch FHD Compact and Light Laptop (8GB RAM/1TB HDD/Windows 10/Integrated Graphics/Transparent Silver/1.60 kg), X409JA-EK581T, ex.",price:628,img: Item3},
        {id:4,desc: "Lenovo IdeaPad Slim 3i 10th Gen Intel Core i5 15.6-inch Full HD IPS Thin and Light Laptop (8GB/512GB SSD/Windows 10/MS Office 2019/Fingerprint Reader/Platinum Grey/1.85Kg), 81WE018TIN, ex.", price:694,img:Item4},
        {id:5, desc: "DELL Inspiron 3501 15.6-inch FHD Laptop (10th Gen Core i3-1035G1/8GB/1TB HDD/Window 10 + Microsoft Office/NoDvD/Integrated Graphics),SoftMint, ex.", price:559,img: Item5},
        {id:6,desc: "Lenovo IdeaPad S340 10th Gen Intel Core i5 14 inch Full HD IPS Thin and Light Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office 2019/Platinum Grey/1.6Kg), 81VV00KKIN, ex.",price:750,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
