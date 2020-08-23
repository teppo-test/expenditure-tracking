export const addreceipt = () => {
    return {
        type: 'ADDRECEIPT'
    }
}

export const cancelreceipt = () => {
    return{
        type: 'CANCELRECEIPT'
    }
}

export const addmarketname = (mName) => {
    return{
        type: 'CHANGEMARKETNAME',
        payload: mName
    }
}

export const addcreatedate = (createDate) => {
    return{
        type: 'CHANGECREATEDATE',
        payload: createDate
    }
}