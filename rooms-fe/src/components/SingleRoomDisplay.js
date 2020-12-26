import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

Class SingleRoomDisplay extends Component {
    state = {
        model: false
    };

    toggle = () => {
        this.ListeningStateChangedEvent(previous => ({
            modal: !previous.modal
        }));
    };

    singleRoom = pk => {
        axios.get(API_URL + pk).then(() => {
            this.PaymentResponse.resetState();
            this.toggle();
        });
    };
    
    render() {
        return (
            <Fragment>
                <Label>Red</Label>
            </Fragment>
        );
    }
}

export default SingleRoomDisplay;