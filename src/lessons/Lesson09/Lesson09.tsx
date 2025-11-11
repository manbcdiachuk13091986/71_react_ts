import { useState, type ChangeEvent } from "react";

import Counter from "components/Counter/Counter";
import {
  AnimalBox,
  BoxInfo,
  InputsWrapper,
  Lesson09Wrapper,
  Result,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Lesson09() {
  // Контролируемый компонент - компонент значение которого мы хроним в локальном хранилище
  //  и изменяем его с помощью функции для изменения состояния. Эти значения мы передаём
  // в атрибуты value и onChange через пропсы компонента (Input)
  // 1 шаг - создаём state
  const [userEmail, setUserEmail] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // 2 шаг - создание функции для изменения значения в инпуте. Для получения
  // значения, которое пользователь ввёл мы будем использовать объект Event
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const showResult = () => {
    setResult(userEmail);
  };

  console.log(userEmail);

  // ----------------------------------------
  const [counter, setCounter] = useState<number>(0);

  const onMinusClick = (): void => {
    setCounter((prevState) => prevState - 5);
  };

  const onPlusClick = (): void => {
    setCounter((prevState) => prevState + 5);
  };

  return (
    <Lesson09Wrapper>
      <InputsWrapper>
        {/* Данный компонент является неконтролируемым, так как его значение и изменение контролирует
      браузер, а мы только видим результат */}
        <Input
          name="user_name"
          label="User name"
          id="user_name_id"
          placeholder="Enter your name" type={"number"}        />
        <Input
          name="user_email"
          label="User email"
          id="user_email_id"
          placeholder="Enter your email"
          value={userEmail}
          onChange={onChangeEmail} type={"number"}        />
        <Button name="GET RESULT" onClick={showResult} />
        <Result>{result}</Result>
      </InputsWrapper>
      <Counter
        counter={counter}
        onMinusClick={onMinusClick}
        onPlusClick={onPlusClick}
      />
      <BoxInfo>Information</BoxInfo>
      <AnimalBox>
        <p>Animal card</p>
      </AnimalBox>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
