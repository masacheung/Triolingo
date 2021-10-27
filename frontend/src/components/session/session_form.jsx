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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(()=> this.props.login(user));
    }

    renderErrors() {
        return(
            <div>
                {Object.values(this.props.errors).map((err, i) => (
                    <p key={`error- ${i}`}>{err}</p>
                ))}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleDemoLogin(e) {
        const demo = {
            username: "demo",
            password: "password"
        }

        this.props.login(demo);
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
                                <div className="switch"><a onClick={() => this.handleDemoLogin()}>Log in with Demo user</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default SessionForm;