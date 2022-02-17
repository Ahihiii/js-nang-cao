import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class=" mx-auto bg-black grid grid-cols-[200px,auto,150px]">
            <div class="py-2 ">
                <img src="../../images/gta_logo.png" class=" w-14 mx-auto" />
            </div> 

            <div class="p-2 text-white ">
            ${Nav.render()}
            </div>

            <div class="text-white mx-auto p-6">
            <a href="/SignIn">
            <i class="fas fa-user text-2xl"></i>
            </a>
            <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>

        </header>`;
    },
};
export default Header;