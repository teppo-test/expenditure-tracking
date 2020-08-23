export const addReceiptStateReducer = (state = false, action) => {
    switch(action.type){
        case "ADDRECEIPT":
            return true;
        case "CANCELRECEIPT":
            return false;
        default:
            return state;
    }
}

let receiptObject = {receipt : {market_name: null, receipt_create_date: null}, receipt_items: []}
//let receiptItemObject = {product_name: null, price: null, sale: null, sale_amount: null, real_price: null, market_name: null};


export const receiptModelReducer = (state = receiptObject,action ) => {
    switch(action.type){
        case "CHANGEMARKETNAME":
            state.receipt.market_name = action.payload
            return state;
        case "CHANGECREATEDATE":
            state.receipt.receipt_create_date = action.payload
            return state;
        default:
            return state;
    }
}