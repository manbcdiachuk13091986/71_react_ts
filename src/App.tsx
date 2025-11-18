import { BrowserRouter, Route, Routes,  } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import { routesData } from "routes/routes";
import type { RoutePage } from "routes/types";


// Импорты лекций
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson10 from "lessons/Lesson10/Lesson10";
// import Lesson12 from "lessons/Lesson12/Lesson12";

// Импорты домашних работ
// import Homework07 from "homeworks/Homework07/Homework07";
// import Homework09 from "homeworks/Homework09/Homework09";
// import Homework10 from "homeworks/Homework10/Homework10";
// import Homework12 from "homeworks/Homework12/Homework12";

function App() {
  const routes = routesData.map(({path, element}: RoutePage)=>{
    return <Route  path={path} element={element}/>

  });
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложение */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент */}
          {routes}
        </Routes>
      </Layout>

      {/* Лекция 6 - TypeScript */}
      {/* <Lesson06 /> */}

      {/* Лекция 7 - TypeScript: object types */}
      {/* <Lesson07 /> */}
      {/* <Homework07/> */}

      {/* Лекция 8 - Styling components */}
      {/* <Lesson08 /> */}

      {/* Лекция 9 - Styling components, control components */}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}

      {/* Лекция 10 - useEffect */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}

      {/* Лекция 12 - Formik */}
      {/* <Lesson12 /> */}
      {/* <Homework12 /> */}
    </BrowserRouter>
  );
}

export default App;
