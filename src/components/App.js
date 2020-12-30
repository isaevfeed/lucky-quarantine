import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {array, object} from 'prop-types';
import {
  addTask,
  completeTask,
  clearTasks,
} from '../reducers/actions/tasks-action';
import Preloader from './Preloader';
import Header from './Header';
import Home from './Home';
import Events from './Events';
import Tasks from './Tasks';
import Nav from './Nav/Nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, testText: ""};
    this.testFunc = this.testFunc.bind(this);
  }

  componentDidMount() {
    setTimeout(_ => this.setState({isLoading: false}), 1000);
  }

  testFunc(text) {
    this.setState({testText: text});
  }

  render() {
    const events = this.props.events;
    const images = this.props.images;
    const colors = this.props.colors;
    const tasks = this.props.tasks;
    let {testFunc} = this;
    
    console.log(this.state.testText);

    // if (this.state.isLoading) {
    //   return <Preloader />;
    // }

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
                    testFunc={testFunc}
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
    onComplete: id => dispatch(completeTask(id)),
    onAddTask: task => dispatch(addTask(task)),
    onClearTasks: () => dispatch(clearTasks()),
  };
}

export default connect(setStateToProps, setDispatchToProps)(App);