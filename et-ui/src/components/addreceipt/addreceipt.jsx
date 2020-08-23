import React from 'react';
import './../../resources/styles/common.css';
import './addreceipt.css'
import { useSelector, useDispatch } from 'react-redux';
import { addreceipt, cancelreceipt, addmarketname, addcreatedate, openReceiptItemModal } from './../../actions'
import ReceiptItemModal from './../receipt_item_modal/receipt_item_modal';

function AddReceipt() {

    const dispatch = useDispatch();
    const receiptState = useSelector(state => state.addReceiptState)

    if (!receiptState) {
        return (
            <div>
                <button className="centered-element add-button" onClick={() => dispatch(addreceipt())}>+ Add new receipt</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="centered-element receipt-metadata">
                    <div className="card">
                        <div className="card-header">
                            Receipt metadata
                        </div>
                        <div className="card-body">
                            <div className="space-elements">
                                <div>
                                    Receipt creation date:
                                </div>
                                <div>
                                    <input className="form-control" type="date" onChange={(e) => dispatch(addcreatedate(e.target.value))}></input>
                                </div>
                            </div>
                            <div className="space-elements">
                                <div>
                                    Market:
                                </div>
                                <div>
                                    <input className="form-control" type="text" onChange={(e) => dispatch(addmarketname(e.target.value))}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btn-primary" onClick={() => dispatch(openReceiptItemModal())}>Add new receiptItem</button>
                    </div>
                    <div>
                        <button className="" onClick={() => dispatch(cancelreceipt())}>Cancel adding receipt</button>
                    </div>
                </div>
                <ReceiptItemModal></ReceiptItemModal>
            </div>
        )
    }
}

export default AddReceipt;