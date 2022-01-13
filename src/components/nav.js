const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-900">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-900">Tuyển sinh</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-900">Chương trình đào tạo</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-900">Góc tuyển sinh</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-900">Tuyển dụng</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;