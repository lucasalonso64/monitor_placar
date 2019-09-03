import React from 'react';

import Time from './Time';
import Partida from './Partida';


export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
            num1:0,num2:0,resultado:0,
            }
            this.calcular = this.calcular.bind(this)
    }


    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }

    calcular(){
        let soma = parseInt(this.state.num1) + parseInt(this.state.num2)
        let r = this.state
        r.res = soma
        this.setState(r)
    }


    render() {
        return (
            <div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Casa</h3>
                    <Time nome={this.props.casa.nome}
                        gols={this.state.gols_casa}
                        marcarGol={this.marcarGolCasa.bind(this)} />

                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <Partida estadio={this.props.partida.estadio}
                        data={this.props.partida.data}
                        horario={this.props.partida.horario}
                    />
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.visitante.nome}
                        gols={this.state.gols_visitante}
                        marcarGol={this.marcarGolVisitante.bind(this)}
                    />
                </div>
                <div style={{ clear: "both" }}></div>
                <div>
                    <br />
                    <label>Valor 1: </label>
                    <input type="text" value={this.props.num1} />
                    <br />  <br />
                    <label>Valor 2: </label>
                    <input type="text" value={this.props.num2} />
                    <br />  <br />
                    <label>Resultado: </label>
                    <input type="text" value={this.props.resultado} />
                    <button id="somar" onClick="calcular()">Calcular</button>
                    
                </div>

            </div>


        )

    }

}