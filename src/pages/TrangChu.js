import data from "../data";

const TrangChu = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div class="my-3">
                <img src="../../images/banner.jpg" class="w-full "  />
            </div>
            <div class="ChiTietNews">
                <h2 class="text-2xl font-semibold my-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/ChiTietNews/${post.id}">
                                <img src="${post.img}" class="w-full" />
                            </a>
                            <h3 class="my-3"><a  href="/ChiTietNews/${post.id}"class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>

            <div class="ChiTietNews">
            <h2 class="text-2xl font-semibold my-4">Hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/ChiTietNews/${post.id}">
                            <img src="${post.img}" class="w-full" />
                        </a>
                        <h3 class="my-3"><a  href="/ChiTietNews/${post.id}"class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>
                `).join("")}
            </div>
        </div>

        </div>
        `;
    },
};

export default TrangChu;