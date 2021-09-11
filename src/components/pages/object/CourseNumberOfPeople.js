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
          numberOfPeople: ""
              }

      console.log(this.props.university)
      console.log(this.props.course)
  }

  componentDidMount()
  {
      const link='http://localhost:8008/getNumberOfPeopleByCourseAndUni/'+ this.state.university+'/'+this.state.course
      console.log(link)
      fetch(link)
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true, 
              numberOfPeople: json.result,
          })
          console.log(json.result)
          console.log (this.props.course)
      })
  }
  render() {
      var {isLoaded, numberOfPeople} = this.state;
      if (!isLoaded)
      {
          return <Spinner animation="border" size="sm" />
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
export default CourseNumberOfPeople