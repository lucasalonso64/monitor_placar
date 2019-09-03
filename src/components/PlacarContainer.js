import React from 'react';

import Time from './Time';
import Partida from './Partida';


export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
            num1: undefined, 
            num2: undefined, 
            resultado: 0,

            n: 0,
            pagar:0,
            valor:1000
        }
        this.calcular = this.calcular.bind(this)
    }
    limparCampos = () => {
        this.setState({
            num1: '',
            num2: '',
            resultado: '',
        })
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
        let resultado = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({ resultado})    
        }
        

    Pagar(){
        this.setState({
           // pagar:this.state.valor/(Math.pow(1.03,this.state.n+1))
           resultado: this.state.resultado         
        })
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
                    <input type="text" value={this.state.num1} onChange={e => this.setState({ num1: e.target.value })}/>
                    <br />  <br />
                    <label>Valor 2: </label>
                    <input type="text" value={this.state.num2} onChange={e => this.setState({ num2: e.target.value })} />
                    <br />  <br />
                    <label>Resultado: </label>
                    <input type="text" value={this.state.resultado} />
                    <button onClick={this.calcular.bind(this)}>Calcular</button>
                    <button onClick={this.limparCampos.bind(this)}>Limpar</button>

                </div>

     

            </div>


        )

    }

}