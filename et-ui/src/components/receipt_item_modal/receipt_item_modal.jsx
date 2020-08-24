import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReceiptItemModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receiptItem: {
                product_name: "",
                price: 0,
                sale: false,
                sale_amount: 0,
                real_price: 0
            }
        }
    }

    handleReceiptItemData = (field, value) => {
        let tempMetadata = this.state.receiptItem;
        tempMetadata[field] = value;
        this.setState({ receiptItem: tempMetadata });
    }

    addNewItem = () => {
        let tempItem = this.state.receiptItem;
        let itemObject = { product_name: tempItem.product_name, price: tempItem.price, sale: tempItem.sale, sale_amount: tempItem.sale_amount, real_price: tempItem.real_price }
        this.props.itemAdd(itemObject);
        this.props.stateChange("modalState","");
    }

    resetReceiptItem = () => {
        let itemObject = { product_name: "", price: 0, sale: false, sale_amount: 0, real_price: 0}
        this.setState({receiptItem : itemObject});
    }

    render() {

        return (
            <Modal isOpen={this.props.modalState} fade={false}>
                <ModalHeader>
                    <label>Add item to receipt</label>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <label>Product name</label>
                        <input className="form-control" type="text" value={this.state.receiptItem.product_name} onChange={(e) => this.handleReceiptItemData("product_name", e.target.value)} ></input>
                    </div>
                    <div>
                        <label>Price</label>
                        <input className="form-control" type="number" value={this.state.receiptItem.price} onChange={(e) => this.handleReceiptItemData("price", e.target.value)} ></input>
                    </div>
                    <div>
                        <label>Sale</label>
                        <input className="form-control" type="checkbox" checked={this.state.receiptItem.sale} onClick={(e) => this.handleReceiptItemData("sale", e.target.checked)} ></input>
                    </div>
                    <div>
                        <label>Sale %</label>
                        <input className="form-control" type="number" value={this.state.receiptItem.sale_amount} onChange={(e) => this.handleReceiptItemData("sale_amount", e.target.value)}></input>
                    </div>
                    <div>
                        <label>Products original price</label>
                        <input className="form-control" type="number" value={this.state.receiptItem.real_price} onChange={(e) => this.handleReceiptItemData("real_price", e.target.value)} ></input>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => this.addNewItem()}>Save item</button>
                    <button className="btn btn-secondary" onClick={() => this.props.stateChange("modalState", "")}>Cancel</button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ReceiptItemModal;