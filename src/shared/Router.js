import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import DetailPage from "pages/DetailPage";

function Router() {
    // path가 주소임!!!  element는 주소에 따라서 보여줄 페이지!!! 주소에 페이지가 바인딩 된 것. 
    // 결국에 그 주소로 이동하면 바인딩된 페이지가 보인다!
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
