import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../kalkulator/wrapper.js';
import Screen from '../kalkulator/screen.js';
import ButtonBox from '../kalkulator/buttonbox.js';
import Button from '../kalkulator/button.js';


const btnValues = [
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "C",".","/", "="],
  ];

  const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Dashboard = () => {

    

    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0,
      });

      const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
    
        if (removeSpaces(calc.num).length < 16) {
          setCalc({
            ...calc,
            num:
              calc.num === 0 && value === "0"
                ? "0"
                : removeSpaces(calc.num) % 1 === 0
                ? toLocaleString(Number(removeSpaces(calc.num + value)))
                : toLocaleString(calc.num + value),
            res: !calc.sign ? 0 : calc.res,
          });
        }
      };
    
      const commaClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
      
        setCalc({
          ...calc,
          num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
        });
      };

      const signClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
      
        setCalc({
          ...calc,
          sign: value,
          res: !calc.res && calc.num ? calc.num : calc.res,
          num: 0,
        });
      };
    
      const equalsClickHandler = () => {
        if (calc.sign && calc.num) {
          const math = (a, b, sign) =>
            sign === "+"
              ? a + b
              : sign === "-"
              ? a - b
              : sign === "X"
              ? a * b
              : a / b;
      
          setCalc({
            ...calc,
            res:
              calc.num === "0" && calc.sign === "/"
                ? "Can't divide with 0"
                : toLocaleString(
                    math(
                      Number(removeSpaces(calc.res)),
                      Number(removeSpaces(calc.num)),
                      calc.sign
                    )
                  ),
            sign: "",
            num: 0,
          });
        }
      };

      const resetClickHandler = () => {
        setCalc({
          ...calc,
          sign: "",
          num: 0,
          res: 0,
        });
      };
    

  return (
    <div className='kalkulator d-flex justify-content-center'>
    <Wrapper>
      <Screen Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
      {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                    btn === "C"
                  ? resetClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
                }
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
    </div>

    
  )
}

export default Dashboard
