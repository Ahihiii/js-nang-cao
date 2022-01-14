import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class=" mx-auto bg-black grid grid-cols-[200px,auto,150px]">
            <div class="py-2 ">
                <img src="../../images/gta_logo.png" class=" w-14 mx-auto" />
            </div> 

            <div class="p-2 text-white mx-auto">
            ${Nav.render()}
            </div>

            <div class="text-white mx-auto p-6">
            <a href="/Login">
            <i class="fas fa-user text-2xl"></i>
            </a>
            
            </div>
        </header>`;
    },
};
export default Header;