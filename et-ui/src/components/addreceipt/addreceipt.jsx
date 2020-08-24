import React, { Component } from 'react';
import './../../resources/styles/common.css';
import './addreceipt.css'
import ReceiptItemModal from './../receipt_item_modal/receipt_item_modal';

class AddReceipt extends Component {
    constructor() {
        super();

        this.state = {
            receiptState: false,
            modalState: false,
            receiptMetadata: { market_name: "", receipt_create_date: "" },
            receiptItems: []
        }
    }

    //Handlers for data
    handleBoolStates = (statee, action) => {
        let stateValue = (action === "activate") ? true : false;
        this.setState({ [statee]: stateValue });
    }

    handleMetadataChange = (field, value) => {
        let tempMetadata = this.state.receiptMetadata;
        tempMetadata[field] = value;
        this.setState({ receiptMetadata: tempMetadata });
    }

    handleReceiptItemAdd = (item) => {
        let tempItems = this.state.receiptItems;
        tempItems.push(item);
        this.setState({ receiptItems: tempItems });
    }


    render() {
        if (!this.state.receiptState) {
            return (
                <div>
                    <button className="centered-element add-button" onClick={() => this.handleBoolStates("receiptState", "activate")} >+ Add new receipt</button>
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
                                        <input className="form-control" type="date" value={this.state.receiptMetadata.receipt_create_date} onChange={(e) => this.handleMetadataChange("receipt_create_date", e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="space-elements">
                                    <div>
                                        Market:
                                </div>
                                    <div>
                                        <input className="form-control" type="text" value={this.state.receiptMetadata.market_name} onChange={(e) => this.handleMetadataChange("market_name", e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className="btn btn-primary" onClick={() => this.handleBoolStates("modalState", "activate")}>Add new receiptItem</button>
                        </div>
                        <div>
                            <button className="" >Cancel adding receipt</button>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-header">
                                Receipt items
                        </div>
                            <div className="card-body">
                                {this.state.receiptItems.length}
                            </div>
                        </div>
                    </div>
                    <ReceiptItemModal modalState={this.state.modalState} stateChange={this.handleBoolStates} itemAdd={this.handleReceiptItemAdd}></ReceiptItemModal>
                </div>
            )
        }
    }
}

export default AddReceipt;