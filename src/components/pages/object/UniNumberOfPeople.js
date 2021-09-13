import React from 'react';
import { Alert, Spinner,  Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class UniNumberOfPeople extends React.Component {
  constructor(props)
  {
      super(props)
      this.state ={
          university: this.props.university,
          isLoaded: false,
          numberOfPeople: "",
          error:false, 
          errorName: "",
              }
      console.log(this.props.university)
  }

  componentDidMount()
  {
      const link='https://aiuniversity-api.herokuapp.com/getNumberOfPeopleByUni/'+ this.state.university
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
      }).catch(e => {this.setState({
        error:true, 
        errorName: e,
        isLoaded:true, 
    })
      })
  }
  render() {
      var {isLoaded, numberOfPeople, error} = this.state;
      if (!isLoaded)
      {
          return <Spinner animation="border" size="sm" />
          
      }
      else 
      {
        if(!error)
        {
            
            return (
                <> 
                        <span >{numberOfPeople}</span>
                    
                </>
                    )
            
         }
         else
         {
           return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
         }
         
              
          }
       
      }
  }
export default UniNumberOfPeople