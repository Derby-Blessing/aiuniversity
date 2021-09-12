import React from 'react';
import { Alert, Spinner,  Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class CourseNumberOfPeople extends React.Component {
  constructor(props)
  {
      super(props)
      this.state ={
          university: this.props.university,
          course: this.props.course,
          isLoaded: false,
          numberOfPeople: "", 
          error: false,
          errorName: "", 
        }

      console.log(this.props.university)
      console.log(this.props.course)
  }

  componentDidMount()
  {
      const link='http://localhost:8008/getNumberOfPeopleByCourseAndUni/'+ this.state.university+'/'+this.state.course
      console.log(link)
      let response = fetch(link)
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true, 
              numberOfPeople: json.result,
          })
          console.log(json.result)
          console.log (this.props.course)
      }).catch(e => {this.setState({
        error:true, 
        errorName: e,
        isLoaded:true, 
    })
      })
      console.log(this.state.error)
  }
  render() {
      var {isLoaded, numberOfPeople, error} = this.state;
      if (!isLoaded)
      {
          return <Spinner animation="border" size="sm" />
      }
      else 
      {
          console.log(numberOfPeople)
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
export default CourseNumberOfPeople