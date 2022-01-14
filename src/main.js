import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import DetailNews from "./pages/DetailNews";
import Login from "./pages/Login";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/About": () => {
        print(AboutPage.render());
    },
    "/Login": () => {
        print(Login.render());
    },
    "/News": () => {
        print(NewsPage.render());
    },
    // "/TuyenDung": () => {
    //     print(TuyenDung.render());
    // },
    "/DetailNews/:id": ({ data }) => {
        const { id } = data;
        print(DetailNews.render(id));
    },
});

router.resolve();