'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import * as colorActions from '../actions/colorActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // define state and actions as this.props
    // when exporting, connect to redux and set state
    // as it is defined below
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        color={state.color}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.counter,
    color: state.color
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
