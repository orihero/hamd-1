import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from "./components/Bar";
import BarAside from "./components/BarAside/BarAside";
import BarKuxnya from "./components/BarKuxnya/BarKuxnya";
import BarMain from "./components/BarMain/BarMain";
import Call from "./components/Call/Call";
import FirstBar from "./components/FirstBar/FirstBar";
import Foods from "./components/Foods/Foods";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/main"} element={<MainPage />}>
          <Route path={"first"} element={<FirstBar />} />
          <Route path={"first/call"} element={<Call />} />
          <Route path={"bar"} element={<BarKuxnya />} />
          <Route path={"foods"} element={<Foods />} />
          <Route path={"payment"} element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="i-container">
        <BarMain />
        <BarAside />
      </div>
    </div>
  );
};

// {
/* <div className="i-modal ">
	<div className="i-modal-box p-4">
		<img src="assets/img/danger.svg" alt="">
		<p className="mb-3">Подтвердить</p>
		<p className="mb-3">Вы хотите оплатить чек с помощью “ Сум “?</p>
		<p className="d-flex">
			<a className="px-4 pt-2 pb-2 mx-3" href="#">Да</a>
			<a className="px-4 pt-2 pb-2 mx-3 not" href="#">Нет</a>
		</p>
	</div>
	</div> */
