import React from 'react';
import '../stylesheets/gradingscheme.css';

export default class PresenceTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gradesSchemaData: []
        }

        this.getGradeschemaForStudent = this .getGradeschemaForStudent.bind(this)
    }


    componentDidMount() {
        this.getGradeschemaForStudent();
    }

    async getGradeschemaForStudent() {
        await fetch('http://localhost:10000/eltern/noten/notenschema/'+JSON.parse(localStorage.getItem("loggedIn")).userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
            this.setState({
                gradesSchemaData: data
            })
            
        })
    }


    render() {
        return (
            <div className="gradingscheme-grid">
                    {this.state.gradesSchemaData.map((element,index) => {
                        return(
                            <div key={element.teacherId} className="gradingscheme-card">
                                <div className="gradingscheme-title-container">
                                    <div className="gradingscheme-title">{element.firstName} {element.lastName}</div>
                                </div>

                                <div className="sicknote-content" style={{marginBottom:'20px'}}> 
                                    <div className="gradingscheme-info"><b className="gradingscheme-bold-style">Mündliche Prüfungen: </b>{element.oralNumber}</div>
                                    <div className="gradingscheme-info"><b className="gradingscheme-bold-style">Mündliche Wertung: </b> {element.oralEvaluation}</div>
                                    <div className="gradingscheme-info"><b className="gradingscheme-bold-style">Schriftliche Prüfungen: </b>{element.writtenNumber}</div>
                                    <div className="gradingscheme-info"><b className="gradingscheme-bold-style">Schriftliche Wertung: </b>{element.writtenEvaluation}</div>
                                </div>
                            </div>      
                        )
                    })}
            </div>

        );
      
    }
}
