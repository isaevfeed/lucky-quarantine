import './App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {array, object} from 'prop-types';
import Nav from '../../components/nav';
import Home from '../../components/home';
import Events from '../../components/events';
import Tasks from '../../components/tasks';
import Header from '../../components/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
    const events = this.props.events;
    const images = this.props.images;
    const colors = this.props.colors;
    const tasks = this.props.tasks;

    if (this.state.isLoading) {
      return (
        <div className="preloader">
          <div className="preloader-text">L<span className="preloader-text-span">Q</span></div>
          <FontAwesomeIcon icon={faCircleNotch} pulse />
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className="App">
          <Router>
            <section className="content">
              <Switch>
                <Route exact path="/" component={() => <Home items={events} images={images} colors={colors} />}  />
                <Route exact path="/events" component={() => <Events items={events} images={images} colors={colors} />} />
                <Route exact path="/tasks" component={() => 
                  <Tasks 
                    tasks={tasks} 
                    onComplete={this.props.onComplete}                   
                    onAddTask={this.props.onAddTask} 
                    onClearTasks={this.props.onClearTasks} 
                    />
                } />
              </Switch>
            </section>
            <Nav />
          </Router>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  events: array,
  images: object,
  colors: object,
  tasks: array,
};

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