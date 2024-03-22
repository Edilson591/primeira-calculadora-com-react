
import Input from './components/Inputs';
import Button from './components/Buttons';
import { Container, Content, Row } from './slyles'
import { useState } from 'react';



const App = () =>  {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation,setOperation] = useState("")

  const handleOnClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
  }

  const handleAppNumber = (num) => {
    if(num === "." && currentNumber.includes(".")){
      return
    }

    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("+")
    }else{
      const sum = Number(firstNumber) +  Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation("")
   }
  }
  const handleSubNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("-")
    }else{
      const sub = Number(firstNumber) -  Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation("")
   }
  }
  const handleDivNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("/")
    }else{
      const div = Number(firstNumber) /  Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation("")
   }
  }
  const handleMultiNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("*")
    }else{
      const multi = Number(firstNumber) *  Number(currentNumber)
      setCurrentNumber(String(multi))
      setOperation("")
   }
  }
  const handleEquals= () => {
    if(firstNumber !== "0" && operation !== "" && currentNumber !== "0"){
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
          case "-":
            handleSubNumbers();
            break;
          case "/":
            handleDivNumbers();
            break;
          case "*":
            handleMultiNumbers();
            break;
          default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
      <Button label = "." onClick={() => handleAppNumber(".")}/>
      <Button label = "/" onClick={handleDivNumbers}/>
      <Button label = "C" onClick={handleOnClear}/>
      <Button label = "*" onClick={handleMultiNumbers}/>
      </Row>
      <Row>
      <Button label = "7" onClick={() => handleAppNumber("7")}/>
      <Button label = "8" onClick={() => handleAppNumber("8")}/>
      <Button label = "9" onClick={() => handleAppNumber("9")}/>
      <Button label = "-" onClick={handleSubNumbers}/>
      </Row>
      <Row>
      <Button label = "4" onClick={() => handleAppNumber("4")}/>
      <Button label = "5" onClick={() => handleAppNumber("5")}/>
      <Button label = "6" onClick={() => handleAppNumber("6")}/>
      <Button label = "+" onClick={handleSumNumbers}/>
      </Row>
      <Row>
      <Button label = "1" onClick={() => handleAppNumber("1")}/>
      <Button label = "2" onClick={() => handleAppNumber("2")}/>
      <Button label = "3" onClick={() => handleAppNumber("3")}/>
      <Button label = "=" onClick={handleEquals}/>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
