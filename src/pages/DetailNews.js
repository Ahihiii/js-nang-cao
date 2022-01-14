import data from "../data";

const DetailNews = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="max-w-5xl mx-auto">
            <h1>${found.title}</h1>
            <img class="mx-auto w-2/4" src="${found.img}" />
            <p>${found.desc}</p>
        </div>`;
    },
};
export default DetailNews;