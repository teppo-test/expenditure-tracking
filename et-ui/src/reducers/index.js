import {combineReducers} from 'redux';
import {addReceiptStateReducer,receiptModelReducer,addReceiptItemModalStateReducer} from './addReceipt';

const allReducers = combineReducers({
    addReceiptState : addReceiptStateReducer,
    receipt: receiptModelReducer,
    modalState : addReceiptItemModalStateReducer
})

export default allReducers;