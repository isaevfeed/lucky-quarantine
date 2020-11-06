import './App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../../components/nav';
import Home from '../../components/home';
import Events from '../../components/events';
import Tasks from '../../components/tasks';
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
    const tasks = this.props.tasks;

    return (
      <div className="App">
        <Router>
          <section className="content">
            <Route exact path="/home" component={() => <Home items={events} images={images} colors={colors} />} />
            <Route exact path="/events" component={() => <Events items={events} images={images} colors={colors} />} />
            <Route exact path="/" component={() => 
              <Tasks tasks={tasks} 
                     onComplete={this.props.onComplete} 
                     onAddTask={this.props.onAddTask} 
                     onClearTasks={this.props.onClearTasks} />
            } />
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
    tasks: store.tasks,
    colors: store.colors,
    images: store.images,
  };
}

function setDispatchToProps(dispatch) {
  return {
    onComplete: id => dispatch({type: 'COMPLETE', id}),
    onAddTask: task => dispatch({type: 'ADD', task}),
    onClearTasks: () => dispatch({type: 'CLEAR'}),
  };
}

export default connect(setStateToProps, setDispatchToProps)(App);