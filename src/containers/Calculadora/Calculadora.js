import React, { Component } from 'react';
import Mexp from 'math-expression-evaluator';
import './Calculadora.scss';
import NumbersKeyboard from '../../components/NumbersKeyboard/NumbersKeyboard';
import OperationKeyboard from '../../components/OperationKeyBoard/OperationKeyboard';
import Input from '../../components/Input/Input';

class Calculadora extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statement: '',
    };
  }

  addCharacters(char) {
    const { statement } = this.state;

    if (char !== '') {
      if (char === 'Del') {
        if (statement.length > 0) {
          this.setState({
            statement: statement.slice(0, -1),
          });
        }
        return;
      }

      if (char === 'Ac') {
        this.setState({
          statement: '',
        });
        return;
      }

      if (char === '=') {
        try {
          const result = Mexp.eval(statement);
          if (result > 999999999) {
            this.setState({
              statement: 'ERROR',
            });
          } else {
            if (result.toString().length > 9) {
              this.setState({
                statement: result.toString().substring(0, 9),
              });
              return;
            }

            this.setState({
              statement: result.toString(),
            });
          }
        } catch (e) {
          this.setState({
            statement: 'ERROR',
          });
        }
      } else {
        if (char === '%') {
          this.setState({
            statement: `${statement}Mod`,
          });
          return;
        }
        this.setState({
          statement: statement + char,
        });
      }
    }
  }

  render() {
    const { statement } = this.state;
    return (
      <div className="all-content">
        <div className="calculadora" data-testid="calculadora-test">
          <div className="input-area">
            <Input text={statement} />
          </div>
          <div className="bottom-keyboard">
            <NumbersKeyboard setValue={this.addCharacters.bind(this)} />
            <div className="vert-divider"> </div>
            <OperationKeyboard setValue={this.addCharacters.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
