import {combineReducers} from 'redux';
import {addReceiptStateReducer,receiptModelReducer} from './addReceipt';

const allReducers = combineReducers({
    addReceiptState : addReceiptStateReducer,
    receipt: receiptModelReducer
})

export default allReducers;