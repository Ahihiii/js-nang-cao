import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailNews from "./pages/DetailNews";
import News from "./admin/News";
import NewsPage from "./pages/NewsPage";
import AddNew from "./admin/AddNew";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
    "/AboutPage": () => {
        print(AboutPage.render());
    },
    "/NewsPage": () => {
        print(NewsPage.render());
    },
    "/SignIn": () => {
        print(SignIn.render());
    },
    "/SignUp": () => {
        print(SignUp.render());
    },
    "/DetailNews/:id": ({ data }) => {
        const { id } = data;
        print(DetailNews.render(id));
    },
    "/News": () => {
        print(News.render());
    },
    AddNew: () => {
        print(AddNew.render());
    },
});

router.resolve();