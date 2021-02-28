import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { withRouter } from "react-router";
import { Dropdown } from 'primereact/dropdown';
import {connect} from "react-redux";
import {add_locale} from "../../Store/Actions/TargetActions";
// import '../Home/Home.css'

 class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage : null,

        }

        this.items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home' , link : '/'},
            {label: 'About', link : '/about'},
            {label: 'Info',  link : '/Info'},
           
        ];
        this.languages = [
            { name: 'English', code: 'en' },
            { name: 'Arabic', code: 'ar' },
        ];

    }
    onLanguageChange = (e) =>  {
        this.setState({ selectedLanguage: e.value });
        this.props.changelang(e.value.code);
    }
    onTabChange = (e) => {
        console.log(e);
        this.setState({activeItem: e.value})
        this.props.history.push({
            pathname: e.value.link,
        })

    }
    render() {
        return (
            <div>
                <div className="ui container">
                {/* <button>english</button>
                <button>arabic </button> */}

                <Dropdown className="center" value={this.props.locale} options={this.languages} onChange={this.onLanguageChange} optionLabel="name" placeholder="Select a Language" />
                     <hr/>
                    <TabMenu model={this.items} onTabChange={this.onTabChange}/>
                </div>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        locale : state.locale
    };
};
const MapDispatchToProps = dispatch => {
    return {
        changelang : (value) => dispatch(add_locale(value))
    };
};
export default connect(MapDispatchToProps , MapDispatchToProps) (withRouter(Navbar));