import React, { Component } from 'react';
import { FormattedMessage} from 'react-intl';
import {connect} from "react-redux";


class Info extends Component {
    
    constructor(props) {
        super(props);
       console.log(this.props)
      
    }
  render() {
    return (
      <div className='ui segment' style={{backgroundColor:'gray'}}>
                 <h3>
                        <FormattedMessage
                            id="btnAscending"
                            values={ this.props.locale }
                        />
                  </h3>      
                        <br />
                    <h3>  
                        <FormattedMessage id="lblAmountinAED"/>
                    </h3>
      </div>
      
    );
  }
}

const MapStateToProps = state => {
    return {
        Target : state.Target , 
        locale : state.locale
    };
};


export default  connect(MapStateToProps) (Info);