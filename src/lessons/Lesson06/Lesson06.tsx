import "./styles.css";
function Lesson06() {
  // Типы переменных
  // Тип переменных указывается после название через двоеточие
  // 1. Типизация строк - string
  let userName: string = "Mary";
  userName = `Tom`;
  // userName = true;
  let result: string = 1 + 2 + "4";
  let simpleNumber: number = 23;
  simpleNumber = Infinity;
  simpleNumber = 2.6;
  simpleNumber = NaN;

  let isAdmin: boolean = true;
  isAdmin = false;
  isAdmin = userName !== `Bob`;

  let age: undefined = undefined;

  let data: null = null;

  let bigNumber: bigint = 12345689076555555555555555555n;

  let uniq: symbol = Symbol("description");
  //uniq = "23499ffffff2";

  const colors: string[] = ["red", "blue", "green"];
  //colors.push(453748);

  const colorCode: [string, number] = ["blue", 3527];

  const showMessage = (): void => {
    console.log("Hello");
  };

  const getSum = (): number => {
    const sum: number = 2 + 7;
    return sum;
  };

  const getUserData = (firstName: string, age: number): string => {
    return `${firstName} - ${age} y.o.`;
  };

  let name = "Bob";
  //name = true;
  const number = [4, 5, 6];
//   number.push("89");
 let color: string | number = 70;
 color = "blue";

 const example: (string| number)[]= [34, "green", 67];

  return (
    <div className="lesson06-wrapper">
      <div>Lesson06 - TypeScript</div>
      {getUserData("tom", 45)}
    </div>
  );
}
export default Lesson06;
