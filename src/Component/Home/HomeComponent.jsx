import react , {Component} from 'react';
import {connect} from "react-redux";
import { FormattedMessage } from 'react-intl';
import './Home.css';
import {add_locale, fetchGetTarget} from "../../Store/Actions/TargetActions";



class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : {name: "hello"} ,
            selectedLanguage : {code : 'en' , name : 'English'} ,
        }
       
    }
    render() {
        return (
            <div className='ui segment' style={{backgroundColor:'gray'}}>
                 <h3>
                        <FormattedMessage
                            id="btnCheckout"
                            values={ this.state.selectedLanguage.code }
                            />
                </h3>
                <h3>
                    <FormattedMessage id="btnTermsandConditions" />
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
const MapDispatchToProps = dispatch => {
    return {
        onGetTarget: () => dispatch(fetchGetTarget()),
        changeLocale : (value) => dispatch(add_locale(value))
    };
};

export default connect(MapStateToProps , MapDispatchToProps) (HomeComponent) ;