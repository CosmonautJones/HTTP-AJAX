import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriends } from '../actions';
import axios from 'axios';

class AddFriend extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        email: '',
      };
      this.addName = this.addName.bind(this);
      this.updateAddName = this.updateName.bind(this);
      this.addAge = this.addAge.bind(this);
      this.updateAge = this.updateAge.bind(this);
      this.addEmail = this.addEmail.bind(this);
      this.updateEmail = this.updateEmail.bind(this);
    }

    addName(event) {
      this.props.addName({
        value: this.state.name,
      });
      this.setState({
        name: ''
      });
    }
    updateName(event) {
      console.log(this.state.name);
      this.setState({
        name: event.target.value
      });
    }
    addAge(event) {
      this.props.addAge({
        value: this.state.age,
      });
      this.setState({
        age: ''
      });
    }
    updateAge(event) {
      console.log(this.state.age);
      this.setState({
        age: event.target.value
      });
    }
    addEmail(event) {
      this.props.addEmail({
        value: this.state.email,
      });
      this.setState({
        email: ''
      });
    }
    updateEmail(event) {
      console.log(this.state.email);
      this.setState({
        email: event.target.value
      });
    }

render() {
  return (
    <div className="AddFriend">
      <form onSubmit={this.addName}>
        <input
          onChange={this.updateName}
          placeholder="Add Name"
          value={this.state.name}
          ref={this.state.name}
        />
      </form>
      <form onSubmit={this.addAge}>
        <input
          onChange={this.updateAge}
          placeholder="Add Age"
          value={this.state.age}
          ref={this.state.age}
        />
      </form>
      <form onSubmit={this.addEmail}>
        <input
          onChange={this.updateEmail}
          placeholder="Add Email"
          value={this.state.email}
          ref={this.state.email}
        />
      </form>
      <button onClick={this.updateName} onClick={this.updateAge} onClick={this.updateEmail}>Submit</button>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { addFriends })(AddFriend);