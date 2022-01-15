import data from "../data";

const DetailNews = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class=" bg-gray-800 max-h-full">
        <div class="max-w-5xl mx-auto p-4">
            <h1 class="text-4xl text-white">${found.title}</h1>
            <img class="mx-auto w-3/4 p-6 " src="${found.img}" />
            <p class="text-white">${found.desc}</p>
            </div>
        </div>`;
    },
};
export default DetailNews;