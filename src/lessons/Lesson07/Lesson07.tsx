import "./styles.css";

function Lesson07() {
  // Тип any - любой тип
  let city: any = "Berlin";
  city = 235543;
  city = true;
  city = [34, "London", null, false];

  interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
  }
  const userData: User = {
    name: "John",
    age: 43,
    //isAdmin: true,
  };

  interface Address {
    city: string;
    postcode: string | number;
  }
  const address1: Address = {
    city: "Paris",
    postcode: 12345,
    street: "Main street",
  };
  const address2: Address = {
    city: "London",
    postcode: "356543",
    street: "Main street",
  };
  //   Создание одноимённых интерфейсов - интерфейс с таким же именем не будет
  // отдельным интерфейсом, он просто будет дополнять предыдущий
  interface Address {
    street: string;
  }
  //  Наследование интерфейсов
  interface Person {
    fullName: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const personData: Person = {
    fullName: "Adam Smith",
    email: "adam@gmail.com",
  };
  const adminData: Admin = {
    email: "John@gmail.com",
    adminId: 234516,
    fullName: "John Johnson",
  };
  // Типизация через type
  // Использование type для создания усложнённого типа для переменных
  type Weight = string | number | null;
  let personWeight: Weight = "56kg";
  let userWeight: Weight = null;
  userWeight = 45;

  // Использование type для типизации объекта
  type Animal = {
    name: string;
    weight: weight;
  };
  const animalData: Animal = {
    name: "Lion",
    weight: "200kg",
  };

  type ZooAnimal = Animal & { country: string };
  const zebra: ZooAnimal = {
    country: "Afrika",
    name: "Zebra",
    weight: null,
  };
  type CustomTupel<T = string> = [number, string, T];
  const arrayMix: CustomTupel<boolean> = [24, "Bob", false];
  const arrayMix2: CustomTupel<number> = [40, "Mary", 23456];
  const arrayMix3: CustomTupel = [56, "Tom", "Berlin"];

  interface Fruit<T = number> {
    title: string;
    address: T;
  }

  const fruit1: Fruit = {
    tilte: "Apple",
    address: 45,
  };
  const fruit2: Fruit<string> = {
    title: "Grape",
    address: "3546748",
  };

  enum Colors {
    Red = 5,
    Black,
    Green,
  }
  let currentColor: Colors = Colors.Black;
  console.log(currentColor);

  // Строковое перечисление
  //   enum для цветов сетофора
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }
  const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Стоп!";
      case TRAFFIC_LIGHT.YELLOW:
        return "Приготовьтесь идти";
      case TRAFFIC_LIGHT.GREEN:
        return "Можно идти";
    }
  };
  interface UserInterFase {
    id: number;
    name: string;
  }

  const arrayUsers: UserInterFase[] = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Mary" },
  ];

  return (
    <div className="lesson07-wrapper">{getAction(TRAFFIC_LIGHT.GREEN)}</div>
  );
}

export default Lesson07;
