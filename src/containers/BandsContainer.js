import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    // console.log(this.props.bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { bands: state.bands }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    deleteBand: id => dispatch({ type: "DELETE_BAND", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
