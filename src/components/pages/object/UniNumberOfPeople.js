import React from 'react';
import { Alert, Spinner,  Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class UniNumberOfPeople extends React.Component {
  constructor(props)
  {
      super(props)
      this.state ={
          university: this.props.university,
          isLoaded: false,
          numberOfPeople: ""
              }
      console.log(this.props.university)
  }

  componentDidMount()
  {
      const link='http://localhost:8008/getNumberOfPeopleByUni/'+ this.state.university
      console.log(link)
      fetch(link)
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true, 
              numberOfPeople: json.result,
          })
          console.log(json.result)
          console.log (this.state.university)
      })
  }
  render() {
      var {isLoaded, numberOfPeople} = this.state;
      if (!isLoaded)
      {
          return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
      }
      else 
      {
          console.log(numberOfPeople)
         
              return (
              <> 
                      <span >{numberOfPeople}</span>
                  
              </>
               )
          }
       
      }
  }
export default UniNumberOfPeople