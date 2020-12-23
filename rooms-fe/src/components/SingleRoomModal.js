import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class SingleRoomModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Your Room";

        return (
            <Fragment>
                <p>Blue</p>
            </Fragment>
        );
    }
}

export default SingleRoomModal;