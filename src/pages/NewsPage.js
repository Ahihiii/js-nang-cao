import data from "../data";

const NewsPage = {
    render() {
        return /* html */`
        <div class="mx-auto ">                             
            <div class="DetailNews pt-12 max-w-screen-xl mx-auto pt-20">
                <div class="grid grid-cols-3 gap-7">
                    ${data.map((post) => `
                        <div class=" rounded-lg border border-black mt-10">
                            <a href="/DetailNews/${post.id}">
                                <img src="${post.img}" class="w-full" />
                            </a>
                            <div class="p-4"> 
                            <h1 class="my-3"><a  href="/DetailNews/${post.id}"class="font-semibold text-lg ">${post.title}</a></h1>
                            <p class="">${post.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

        </div>    
        </div>
        `;
    },
};
export default NewsPage;