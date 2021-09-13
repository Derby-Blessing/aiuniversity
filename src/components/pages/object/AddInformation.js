import React from 'react';
import ReactStars from 'react-stars';
import GetUniByCourse from "./GetUniByCourse";
import ReviewAlgorithm from "../subpages/ReviewAlgorithm";
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AddInformation extends React.Component {
    constructor(props)
    {
        super(props)
        const feedbackAnswers = JSON.parse(localStorage.getItem('feedbackAI'))
        const surveyAnwers=JSON.parse(localStorage.getItem('infoSubscription'))
        
        if(surveyAnwers != null && feedbackAnswers!=null)
        {
        
            this.state ={
                infoSubscription: surveyAnwers, 
                feedback: feedbackAnswers,
                type: surveyAnwers.subscription_type ,
                isLoaded: false,
                error:false, 
                errorName: "",
                feedbackResult:"",
                addSubscriptionResult:"",
                addStudentResult:"",
          }
        }
          else
          {
            this.state ={
              infoSubscription: "", 
              feedback: "",
              type: 'null' ,
              isLoaded: false,
              error:true, 
              errorName: "",
              feedbackResult:"",
                addSubscriptionResult:"",
                addStudentResult:"",
        }
          }

          console.log('inizio')
          console.log(JSON.stringify(this.state.infoSubscription) )
          console.log(JSON.stringify(this.state.feedback) )
        }

 
    componentDidMount()
    {

      const linkFeedback='https://aiuniversity-api.herokuapp.com/addPredictReview'
      const linkAddSubscription = 'https://aiuniversity-api.herokuapp.com/addNewSubscriptions'
      var linkAnswerSurvey ='';
      
      if (this.state.infoSubscription != "" )
      {
        if (this.state.type == 'student')
        {
          linkAnswerSurvey='https://aiuniversity-api.herokuapp.com/addNewStudent'
        }
        else
        {
          linkAnswerSurvey='https://aiuniversity-api.herokuapp.com/addNewGraduate'
        }
      

          /*FETCH FEEDBACK*/
          const feedbackOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.state.feedback)
            };
            fetch(linkFeedback,feedbackOptions)
          .then(response => response.json())
          .then(json => this.setState({
            feedbackResult: json.result,
            isLoaded: true,
          })).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
          
        /*FETCH SUBSCRIPTIONS*/
        const subscriptionOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.state.infoSubscription)
        };
          fetch(linkAddSubscription,subscriptionOptions)
        .then(response => response.json())
        .then(json => this.setState({
          addSubscriptionResult: json.result,
          isLoaded: true,
        })).catch(e => {this.setState({
          error:true, 
          errorName: e,
          isLoaded:true, 
           })
         })

         /*FETCH STUDENTS/GRADUATES*/
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.state.infoSubscription)
        };
          fetch(linkAnswerSurvey,requestOptions)
        .then(response => response.json())
        .then(json => this.setState({
          addStudentResult: json.result,
          isLoaded: true,
        })).catch(e => {this.setState({
          error:true, 
          errorName: e,
          isLoaded:true, 
           })
         })
          
        }
        
        console.log('chiamata')
        console.log(this.state.feedbackResult)
        console.log(this.state.addSubscriptionResult)
        console.log(this.state.addStudentResult)
    }
     
  
    render() {
        var {isLoaded, error} = this.state;
        const color = { color: "#1A237E" };
        if (!isLoaded)
        {
          return(<>
            <Card>
            <Card.Body>
            <p>Memorizzazione dei dati in corso{'\u00A0'}<Spinner animation="grow" variant="dark" size="sm" />{'\u00A0'}<Spinner animation="grow" variant="secondary" size="sm" />{'\u00A0'}<Spinner animation="grow" variant="light" size="sm" />   </p>
            </Card.Body>
            </Card>
          </>)
            
        }
        else 
        {
            if(!error)
            {
                    
                    return (<>
                    <Card>
                      <Card.Header>
                      <Alert variant="success"><h1><b>Grazie per averci raccontato la tua esperienza!</b></h1></Alert>
                      </Card.Header>
                    <Card.Body>
                    <Card.Title ><h3>Condividi il link con i tuoi colleghi</h3></Card.Title> 

                    </Card.Body>
                    <p>Se condividi il link, possiamo raccogliere ulteriori informazioni sui corsi di laurea e quindi aiuterai gli studenti delle superiori nel scegliere il percorso migliore.</p>
                    </Card>

                    </>)
                
              
                
             }
             else
             {
               return <Alert variant="danger">Impossibile effettuare il consiglio, contatta l'amministratore se il problema persiste</Alert>
             }
            
            
        }
      
    }
}
export default AddInformation