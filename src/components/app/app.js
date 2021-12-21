import React, {Component} from "react";

export default class App extends Component {
    render() {
        return (
            <div className="description row card bg-secondary card-body">
                <img className="card-img-top mx-auto" src="https://sun9-40.userapi.com/impg/QrpUo-Di5UKDZF7mSEy_Wtgi2SSwmbgYOz5b3w/nHAPokdwpv4.jpg?size=1075x721&quality=96&sign=9936a8679680c0a5b244f82816456706&type=album"/>
                <div className="card-body">
                    <h5 className="card-text"> Тестовый статический сайтик для docker-compose и dockerfile
                    </h5>
                </div>
            </div>

        )
    }
}