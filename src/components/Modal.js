/** @format */

import React, { Component } from "react";
import "./Todo.css";

export default class Modal extends Component {
  state = { isOpen: true };

  toggleModal = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        {" "}
        {isOpen && (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <h2 className='modal-text'>Instructions</h2>
              <p className='modal-text'>
                1. Click on the particular tab to get the data
              </p>
              <p className='modal-text'>2. Click on the todo to complete</p>
              <p className='modal-text'>3. Click again to cancel the todo</p>
              <button onClick={this.toggleModal} className='btn-close add-todo'>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
