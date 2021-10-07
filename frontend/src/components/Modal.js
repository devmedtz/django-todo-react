import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    ModalBody
} from 'reactstrap';

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    };

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]:value};

        this.setState({activeItem});
    };

    render () {
        const { toggle, onsave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle} >

                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-tiltle">Title</Label>
                            <Input 
                            type="text" 
                            id="todo-title" 
                            name="title" 
                            value={this.state.activeItem.title} 
                            onChange={this.handleChange} 
                            placeholder="Enter Todo Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Description</Label>
                            <Input type="text" id="todo-description"  name="description" value={this.state.activeItem.description} onChange={this.handleChange} placeholder="Enter Todo decription" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="completed" checked={this.state.activeItem.completed} onChange={this.handleChange} />
                                Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onsave(this.state.activeItem)}>Save</Button>
                </ModalFooter>
            </Modal>
        )
    }
}