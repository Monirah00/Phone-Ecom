export const  additem = (Product) => {
    return{
        type:'ADDITEM',
        payload : Product
    }
}


export const deletItem = (Product) => {
    return{
        type:'DELETITEM',
        payload:Product
    }
}



