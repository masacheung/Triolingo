import React from "react";
import logo from "../../styles/img/logo.png";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return(
            <div>
                {Object.keys(this.state.errors).map((err, i) => (
                    <p key={`error- ${i}`}>{this.state.errors[err]}</p>
                ))}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        return(
            <div className="session-form-background">
                <div className="session-form-container">
                    <div className="session-form-body">
                        <div className="session-heading">
                            <Link to="/">
                                <img src={logo} className="user-auth-logo"/>
                            </Link>
                            <h1 className="logo-link" className="logo-link">Triolingo</h1>
                            <div className="errors">{this.renderErrors()}</div>
                        </div>

                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <ul>
                                <li>
                                    <label className="username">
                                        <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="username" className="username-field"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="password">
                                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="password" className="password-field"/>
                                    </label>
                                </li>
                                <li>
                                    <button className="session-form-continue">{this.props.formType}</button>
                                </li>
                            </ul>
                        </form>
                        <div className="context-switch">
                                <div>Don't have an account?</div>
                                <Link to="/signup" className="switch">Create account</Link>
                                <div className="switch">Log in with Demo user</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default SessionForm;