function handleClick() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}

function showDetails(data) {
    const postContainer = document.getElementById("data-container");
    postContainer.innerHTML = "";
    console.log(postContainer);
    data.forEach ((post) =>{
        
        const div = document.createElement("div");

        div.innerHTML = `
            <div class="border border-gray-300 shadow-lg flex flex-col items-center justify-center p-4 space-y-3 h-full">
                <h2 class="font-bold text-2xl text-gray-500">userID : ${post.id}</h2>
                <p class="text-green-400 font-semibold text-center text-xl">
                    ${post.title}
                </p>
                <p class="text-gray-600 font-bold text-center">
                    ${post.body}
                </p>
            </div>
        `
        postContainer.appendChild(div);


    });
}