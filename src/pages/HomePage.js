import data from "../data";

const HomePage = {
    render() {
        return /* html */`
        <div class="mx-auto bg-gray-900"> 
            <div class="bg-black grid grid-cols-[1000px,auto]">
            <div>
                 <img src="../../images/the_contract.jpg"/>
            </div>

            <div class="text-white mx-auto py-20"> 
                <p>Grand Theft Auto </p>
                <h1 class="text-5xl py-5">The Contract - Out Now </h1>
            </div>
                
            </div>
            <div class="DetailNews pt-12 max-w-screen-xl mx-auto">
                <h2 class="text-2xl font-semibold my-4 text-white">News</h2>
                <div class="grid grid-cols-3 gap-7">
                    ${data.map((post) => `
                        <div class=" rounded-lg bg-black">
                            <a href="/DetailNews/${post.id}">
                                <img src="${post.img}" class="w-full" />
                            </a>
                            <div class="p-4"> 
                            <h1 class="my-3"><a  href="/DetailNews/${post.id}"class="font-semibold text-lg text-white">${post.title}</a></h1>
                            <p class="text-white">${post.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

            
        </div>
        `;
    },
};

export default HomePage;