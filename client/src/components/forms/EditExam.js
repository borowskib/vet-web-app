import React, { Component } from "react";
import * as rb from "react-bootstrap";
import axios from "axios";
import "./../../App.css";

class EditExam extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number_pig: '',
            exam_id: '',
            exam_date: '',
            exam_time: '',
            feces: '',
            tissue: '',
            exam_result: '',
            medicine: '',
            medicine_qty: '',
            medicine_type: '',
            diarrhea: '',
            weight: '',
            temperature: '',
            lameness: '',
            respiratory_system: '',
            skin_changes: '',
            examByNumberResponse: []
        };
    }
    // Link poprawić
    getExamByNumber() {
        fetch(`http://localhost:9000/examinations`)
        .then(res => res.json())
        .then(res => this.setState({ examByNumberResponse: res}))
        .catch(err => err);
    }

    handleNumberPigChange = event => {
        this.setState({ number_pig: event.target.value });
    };
    handleExamIdChange = event => {
        this.setState({ exam_id: event.target.value});
    };
    handleExamDateChange = event => {
        this.setState({ exam_date: event.target.value});
    };
    handleExamTimeChange = event => {
        this.setState({ exam_time: event.target.value});
    };
    handleFecesChange = event => {
        this.setState({ feces: event.target.value});
    };
    handleTissueChange = event => {
        this.setState({ tissue: event.target.value});
    };
    handleExamResultChange = event => {
        this.setState({ exam_result: event.target.value})
    };
    handleMedicineChange = event => {
        this.setState({ medicine: event.target.value})
    };
    handleMedicineQtyChange = event => {
        this.setState({ medicine_qty: event.target.value})
    };
    handleMedicineTypeChange = event =>{
        this.setState({ medicine_type: event.target.value})
    };
    handleDiarrheaChange = event => {
        this.setState({ diarrhea: event.target.value})
    };
    handleWeightChange = event => {
        this.setState({ weight: event.target.value})
    };
    handleTemperatureChange = event => {
        this.setState({ temperature: event.target.value})
    };
    handleLamenessChange = event => {
        this.setState({ lameness: event.target.value})
    };
    handleRespiratorySystemChange = event => {
        this.setState({ respiratory_system: event.target.value})
    };
    handleSkinChangesChange = event =>{
        this.setState({ skin_changes: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:900/examinations`, {
                number_pig: this.state.number_pig,
                exam_id: this.state.exam_id,
                exam_date: this.state.exam_date,
                exam_time: this.state.exam_time,
                feces: this.state.feces,
                tissue: this.state.tissue,
                exam_result: this.state.exam_result,
                medicine: this.state.medicine,
                medicine_qty: this.state.medicine_qty,
                medicine_type: this.state.medicine_type,
                diarrhea: this.state.diarrhea,
                weight: this.state.weight,
                temperature: this.state.temperature,
                lameness: this.state.lameness,
                respiratory_system: this.state.respiratory_system,
                skin_changes: this.state.skin_changes,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        window.location.reload();
    };

    componentDidMount() {
        this.getExamByNumber();
    }

    render () {
        return (
            <div className="edit-exam-form">
                        <rb.Form onSubmit={this.handleSubmit}>
                            <rb.FormGroup>
                                <rb.Form>
                                    <rb.Row>
                                        <rb.Col>
                                            <rb.Form.Label> Numer świni </rb.Form.Label>
                                            <rb.Form.Control
                                                placeholder="* 10 znaków"
                                                type="number"
                                                onChange={this.handleNumberPigChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Id badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleExamIdChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Data badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="date"
                                                onChange={this.handleExamDateChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Czas badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="time"
                                                onChange={this.handleExamTimeChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Kał </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleFecesChange}
                                                required
                                            >
                                            <option> 0 </option>
                                            <option> 1 </option>
                                            <option> 2 </option>
                                            <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Tkanka </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleTissueChange}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Wynik badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleExamResultChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Lek </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleMedicineChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Ilość leku </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleMedicineQtyChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Typ leku </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleMedicineTypeChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Biegunka </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleDiarrheaChange}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Waga </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleWeightChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Temperatura </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleTemperatureChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Kulawizna </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleLamenessChange}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Układ oddechowy </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleRespiratorySystemChange}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Zmiany skórne </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleSkinChangesChange}
                                                required
                                            />
                                        </rb.Col>
                                    </rb.Row>
                                    <br/>
                                    <rb.Button type="submit" variant="success" size="md" block>
                                        Zatwierdź edycję
                                    </rb.Button>
                                </rb.Form>
                            </rb.FormGroup>
                        </rb.Form>
            </div>
        )
    }
}