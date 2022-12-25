import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
  <Router>
    <Switch>  {/* Switch는 Route를 찾음. Route는 링크 뒤에 붙는 URL을 의미함. Route를 찾으면 컴포넌트를 렌더링 */}
      <Route path="/hello">
        <h1>Hello</h1>  {/**그냥 이렇게 작성해도 동작함 */}
      </Route>

      <Route path="/movie/:id"> {/** /:id로 해주면 다음인자를 id로 인식. 어떤 값이든 들어올 수 있음 */}
        <Detail />
      </Route>
      
      <Route path="/"> {/* 이 안에 컴포넌트를 적어줌. path와 URL을 비교해 컨트롤러 맵핑하는 느낌인듯 */}
        <Home />  {/**컴포넌트 임포트하여 불러옴 */}
      </Route>      
    </Switch>
  </Router>
  );
}
export default App;