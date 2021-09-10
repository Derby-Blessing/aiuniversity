import React from 'react';
import { Alert, Spinner,  Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class Region extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            isLoaded: false,
            region: ""
                }
        console.log(this.props.university)
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getRegionByUni/'+ this.state.university
        console.log(link)
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                region: json.result,
            })
            console.log(json.result)
            console.log (this.state.university)
        })
    }
    render() {
        var {isLoaded, region} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
        }
        else 
        {
            console.log(region)
            if(region=="NO REGION FOUND")
            {
                return (<span>Nessuna regione è stata trovata</span>)
            }
            else
            {
                return (
                <>
                    
                    
                        <span style={{textTransform: 'capitalize'}}>{region}</span>
                    
                </>
                 )
            }
         
        }
    }
}
export default Region