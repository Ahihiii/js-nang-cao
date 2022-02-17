const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Trang chủ</a></li>
                <li><a href="/NewsPage" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Danh mục</a></li>
                <li><a href="/AboutPage" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Bài viết</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;