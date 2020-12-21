import Modal from '../../../assets/components/modal'
import React from 'react';
import '../stylesheets/restorePassword.css';
import {cross} from 'react-icons-kit/icomoon/cross'
import Icon from 'react-icons-kit';
export default class restorePassword extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            validationKeyInvalid: false,
            PasswordInvalid: false,
            PasswordRepeatInvalid: false,
            PasswordEqualInvalid: false,
        }


    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.undisplayModal = this.undisplayModal.bind(this);
    this.handleValidationInputChange = this.handleValidationInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
    }


    handleEmailInput(){
    }

    redirectToLogin() {
        window.location.href = "/";
    }

     // Method called to display the registration Modal
     displayModal(){
        this.setState({
            displayModal: true
        })
    }

    // Method to undisplay the registration Modal
    undisplayModal(){
        this.setState({
            displayModal: false
        })
    }

    handleValidationInputChange(){
        this.validationKey = e.target.value;
    }

    handlePasswordChange(){
        this.Password = e.target.value;
    }

    handlePasswordRepeatChange(){
        this.PasswordRepeat = e.target.value;
    }

    async handlePassword() {
        if(!this.validationKey){
            this.setState({
                 validationKeyInvalid: true
            })
        } else {
            this.setState({
                 validationKeyInvalid: false
            })
        }

        if(!this.Password){
            this.setState({
                 PasswordInvalid: true
            })
        } else {
            this.setState({
                 passwordInvalid: false
            })
        }

        if(!this.PasswordRepeat){
            this.setState({
                 PasswordRepeatInvalid: true
            })
        } else {
            this.setState({
                 passwordRepeatInvalid: false
            })
        }
        if(this.Password != this.RepeatPassword){
            this.setState({
                PasswordEqualInvalid: true
            })
        }else{this.setState({
            PasswordEqualInvalid: false
        })
        }

       
        // //Übertragung der geänderten Daten an das Backend, vermutlich nicht korrekt.
        // if (this.validationKeyInvalid && this.PasswordInvalid && this.PasswordRepeatInvalid  !== 0) {       
        //     await fetch('http://localhost:10000/', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             validationKey: this.validationKey,
        //             Password: this.Password,
        //             PasswordRepeat: this.PasswordRepeat,
                    
        //         })
        //     })
                
                                
        // } 

    }
        
    render() {
        return (

                <React.Fragment>
                <div className="password-container">
                    <div className="forgot-password-header">Passwort vergessen?</div>
                    <div className="alert-message">Keine Sorgen! Geben Sie Ihre E-Mail Adresse ein und wir unterstützen sie, Ihre Passwort wiederherzustellen.</div>
                    <div className="input-field-container">
                        <p className="label">E-Mail Adresse</p>
                        <input type="text" className="e-mail-address" placeholder="Geben Sie Ihre E-Mail Adresse ein." onChange={(e) => this.handleEmailInput(e)}></input>
                        <button className="send-email"onClick={this.displayModal}>E-Mail schicken </button>
                    </div>
                    

                    <div className="back-to-login"><p className="back-to-login-text" onClick={this.redirectToLogin}>ZÜRUCK ZUM LOGIN</p></div>
                    
                </div>
               
                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="password-reset-head">Passwort Zurücksetzen</h1>
                        <p className="email-info">der Validation Key wurde ihnen per E-Mail zugeschickt.</p>
                        <input className="password-restore-input" type="text" placeholder="Validation-Code-eingeben" onChange={(e) => this.handleValidationInputChange(e)}></input>
                        <p className="password-restore-text" style={this.state.validationKeyInvalid ? void(0) : {display:'none'}}>Validation Key ist ein Pflichtfeld.</p>

                        <input className="password-restore-input" type="text" placeholder="Neues Passwort eingeben" onChange={(e) => this.handlePasswordChange(e)}></input>
                        <p className="password-restore-text" style={this.state.PasswordInvalid ? void(0) : {display:'none'}}>Password ist ein Pflichtfeld.</p>

                        <input className="password-restore-input" type="text" placeholder="Neues Passwort wiederholen" onChange={(e) => this.handlePasswordRepeatChange(e)}></input>
                        <p className="password-restore-text" style={this.state.PasswordRepeatInvalid ? void(0) : {display:'none'}}>Password wiederholen ist ein Pflichtfeld.</p>
                        <p className="password-restore-text" style={this.state.PasswordEqualInvalid ? void(0) : {display:'none'}}>Password ist nicht identisch.</p>

                        <button className="password-change"onClick={this.handlePassword}>Password ändern</button>
                    </div>
              </Modal>

            </React.Fragment>

           
            
           

            
        )
        
    

        
    }



}