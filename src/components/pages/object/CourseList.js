import React from 'react';
import { Alert, Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class CourseList extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            courses:[],
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        fetch('http://localhost:8008/getAllCourses')
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                courses: json.result,
            })
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    
    render() {
        var {isLoaded, courses, error} = this.state;
        if (!isLoaded)
        {
            return <option selected value="">Loading....</option>
        }
        else 
        {if(!error)
            {
             
            return (
                <>
                        <option selected value="">--SELEZIONA CORSO--</option>
                            {courses.map(item=>(
                                <option value={item} style={{textTransform: 'capitalize'}}>{item}</option>
                            ))}
                    
                </>
                )

             }
             else
             {
               return <option selected value="">Impossibile recuperare i dati richiesti</option>
             }
            
        }
      
    }
}
export default CourseList