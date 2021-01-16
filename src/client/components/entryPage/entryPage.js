import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Auth } from 'aws-amplify'

class SignUp extends Component {
    constructor(){
        super(),
        this.state = {
            username: "",
            email: "",
            password: "",
            signUp: true,
        }
    }
    handleSubmit = async (event) =>{
      event.preventDefault();
      const { username, email, password } = this.state;
      try {
        const signUpResponse = await Auth.signUp({
          username,
          password,
          attributes: {
            email: email
          }
        })
        console.log(signUpResponse)
      }catch(err){
          console.error(err)
        }
    }
    handleChange = (e) =>{
      this.setState({[e.target.id]:e.target.value})
    }
    componentDidMount(){
      if(this.props.location.pathname){
         if(this.props.location.pathname==="/login") this.setState({signUp: false})
         else if(this.props.location.pathname==="/signup") this.setState({signUp: true})
         console.log
      }
    }
    render() {
        return (
        
            <section className="section">
                <div className="container d-flex justify-content-center mt-5">
                
                   Hello

                </div>
            </section>
        )
    }
}

export default SignUp