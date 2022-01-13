import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import TuyenSinh from "./pages/TuyenSinh";
import TrangChu from "./pages/TrangChu";
import ChiTietNews from "./pages/ChiTietNews";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(TrangChu.render());
    },
    "/TuyenSinh": () => {
        print(TuyenSinh.render());
    },
    // "/ChuongTrinhDT": () => {
    //     print(ChuongTrinhDT.render());
    // },
    // "/GocTuyenSinh": () => {
    //     print(GocTuyenSinh.render());
    // },
    // "/TuyenDung": () => {
    //     print(TuyenDung.render());
    // },
    "/ChiTietNews/:id": ({ data }) => {
        const { id } = data;
        print(ChiTietNews.render(id));
    },
});

router.resolve();