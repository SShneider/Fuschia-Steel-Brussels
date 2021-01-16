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
    render() {
        return (
        
            <section className="section auth">
                <div className="container d-flex justify-content-center mt-5">
                
                    <Form onSubmit = {this.handleSubmit} className="mr-auto ml-auto mt-3 p-3">
                    <h1 >Sign Up</h1>
                        <Form.Group className = "mt-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Username" 
                            value={this.state.username}
                            onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"  value={this.state.email}
                            onChange={this.handleChange}/>
                            <Form.Text className="text-dark">
                                We'll never share your email with anyone else.
                             </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  value={this.state.password}
                            onChange={this.handleChange}/>
                            <Form.Text className="text-dark">
                                <span>   Password must be between 5 and 15 characters long and include at least one of each of the following:
                                    <li>A lower case letter</li>
                                    <li>An upper case letter</li>
                                    <li>A number</li>
                                    <li>A special character</li></span>
                            </Form.Text>
                            <Button variant="primary" type="submit" className = "mt-3">
                                Sign Up
                            </Button>
                        </Form.Group>

                    </Form>


                </div>
            </section>
        )
    }
}

export default SignUp