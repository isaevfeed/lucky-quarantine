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
    const images = this.props.images;
    const colors = this.props.colors;
    return (
      <div className="App">
        <Router>
          <section className="content">
            <Route exact path="/" component={() => <Home items={events} images={images} colors={colors} />} />
            <Route exact path="/events" component={() => <Events items={events} images={images} colors={colors} />} />
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
    colors: store.colors,
    images: store.images,
  };
}

function setDispatchToProps(dispatch) {
  return {};
}

export default connect(setStateToProps, setDispatchToProps)(App);