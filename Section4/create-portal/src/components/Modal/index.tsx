import React from "react";
import './style.css'
import ReactDom from 'react-dom'
import {ModalProps} from './interface'

class Modal extends React.Component<ModalProps> {
    root: HTMLElement;
    el: HTMLDivElement;
    constructor(props: ModalProps){
        super(props);
        this.root = document.getElementById('root') as HTMLElement;
        this.el = document.createElement('div');
    }
    componentDidMount(){
        this.root.append(this.el);
    }

    componentWillUnmount(){
        this.root.removeChild(this.el);
    }

    handleCloseModal = () => {
        this.props.onClose();
    }

    render() {
        const {show = true} = this.props;
        const modalUI = ReactDom.createPortal(
            <div className="modal-container">
                <div className="modal-overlay"/>
                <div className="modal-body">
                    <h2>Modal</h2>
                    <button onClick={this.handleCloseModal} className="modal-button">Close Button </button>
                </div>
            </div>,
            this.el
        )
        return show ? modalUI : null;
    }
}

export default Modal