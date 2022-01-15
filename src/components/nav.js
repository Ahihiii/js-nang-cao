const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Home</a></li>
                <li><a href="/NewsPage" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">News</a></li>
                <li><a href="/AboutPage" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">About</a></li>
                <li><a href="/Download" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Download</a></li>
                <li><a href="/Support" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Support</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;