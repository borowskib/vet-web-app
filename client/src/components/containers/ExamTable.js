import React, { Component } from "react";
import "./../../App.css";
import * as rb from "react-bootstrap";
import EditExam from './../forms/EditExam';
import AddExam from './../forms/AddExam';


class ExamTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditExam: false,
            showAddExam: false,
            examResponse: [],
        };
        this.toogleEditExam = this.toggle.bind(this);
        this.toggleAddExam = this.toggleAddExam.bind(this);
    }

    getExamData() {
        fetch(`http://localhost:9000/examinations`)
            .then(res => res.json())
            .then(res => this.setState({ examResponse: res}))
            //.then(console.log(this.state.exam_number))
            .catch(err => err);
    }

    toggleEditExam() {
        const { showEditExam } = this.state;
        this.setState({ showEditExam: !showEditExam });
        this.setState({ showAddExam: false});
        console.log(this.state.showEditExam)
    }

    toggleAddExam() {
        const { showAddExam } = this.state;
        this.setState({ showAddExam: !showAddExam });
        this.setState({ showEditExam: false });
        console.log(this.state.showAddExam)
    }

    componentDidMount() {
        this.getExamData();
    }

    render() {
        return (
            <div id="exam-table-container" >
                        <rb.Table striped bordered hover>
                            <thead>
                            <tr>
                                <th> Numer świni </th>
                                <th> Id badania </th>
                                <th> Data badadnia </th>
                                <th> Czas badania </th>
                                <th> Kał </th>
                                <th> Tkanka </th>
                                <th> Wynik badania </th>
                                <th> Leki </th>
                                <th> Ilość leku </th>
                                <th> Typ leku </th>
                                <th> Biegunka </th>
                                <th> Waga </th>
                                <th> Temperatura </th>
                                <th> Kulawizna </th>
                                <th> Układ oddechowy </th>
                                <th> Zmiany skórne </th>

                            </tr>
                            </thead>
                            {this.state.examResponse.map(resp => (
                            <tbody>

                            <tr>
                                <td><strong>{resp.number_pig}</strong></td>
                                <td>{resp.exam_id}</td>
                                <td>{resp.exam_date}</td>
                                <td>{resp.exam_time}</td>
                                <td>{resp.feces}</td>
                                <td>{resp.tissue}</td>
                                <td>{resp.exam_result}</td>
                                <td>{resp.medicine}</td>
                                <td>{resp.medicine_qty}</td>
                                <td>{resp.medicine_type}</td>
                                <td>{resp.diarrhea}</td>
                                <td>{resp.weight}</td>
                                <td>{resp.temperature}</td>
                                <td>{resp.lameness}</td>
                                <td>{resp.respiratory_system}</td>
                                <td>{resp.skin_changes}</td>
                            </tr>
                            <rb.ButttonGroup arial-label="Basic exmple">
                                <rb.Button
                                    variant="primary"
                                    onClick={this.toggleEditExam}
                                >
                                    Edytuj
                                </rb.Button>
                                <rb.Button
                                variant="danger"
                                >
                                    Usuń
                                </rb.Button>
                            </rb.ButttonGroup>
                            </tbody>
                            ))}
                        </rb.Table>
                <rb.Button
                    variant="primary"
                    onClick={this.toggleAddExam}
                >
                    Dodaj
                </rb.Button>
                {this.state.showAddExam && <AddExam />}
                {this.state.showEditExam && <EditExam />}
            </div>
        );
    }
}

export default ExamTable;