import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { closeReceiptItemModal} from './../../actions'
import { useSelector, useDispatch } from 'react-redux';

function ReceiptItemModal() {

    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalState)

    return(

        <Modal isOpen={modalState}>
            <ModalHeader>
                <label>Add item to receipt</label>
            </ModalHeader>
            <ModalBody>
                <div>
                    <label>Product name</label>
                    <input className="form-control" type="text" ></input>
                </div>
                <div>
                    <label>Price</label>
                    <input className="form-control" type="number" ></input>
                </div>
                <div>
                    <label>Sale</label>
                    <input className="form-control" type="checkbox" ></input>
                </div>
                <div>
                    <label>Sale %</label>
                    <input className="form-control" type="number" ></input>
                </div>
                <div>
                    <label>Products original price</label>
                    <input className="form-control" type="number" ></input>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary">Save item</button>
                <button className="btn btn-secondary" onClick={() => dispatch(closeReceiptItemModal())}>Cancel</button>
            </ModalFooter>
        </Modal>
    )

}


export default ReceiptItemModal;