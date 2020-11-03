import './App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../../components/nav';
import Home from '../../components/home';
import Events from '../../components/events';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const events = this.props.events;
    return (
      <div className="App">
        <Router>
          <section className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={() => <Events items={events} />} />
            <Route exact path="/tasks" />
          </section>
          <Nav />
        </Router>
      </div>
    );
  }
}

function setStateToProps(store) {
  return {
    events: store.evarr,
  };
}

function setDispatchToProps(dispatch) {
  return {};
}

export default connect(setStateToProps, setDispatchToProps)(App);