function newPostJs(data) {
    const form = document.querySelector(".itemsPost__div");
    const inputTitle = document.querySelector(".itemsPost__div--title");
    const postDescription = document.querySelector(
        ".itemsPost__div--description"
    );
    const postBtnDiv = document.querySelector(".itemsPost__div--btnDiv");
    const postBtn = document.querySelector("#postBtn");

    postDescription.addEventListener("mouseup", () => {
        postBtn.classList.add("coloredPostBtn");
    });
    postDescription.addEventListener("mouseleave", () => {
        postBtn.classList.remove("coloredPostBtn");
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newPost = {
            // id_poster: data.id_poster + 1,
            // user: data.user + 1,
            title: inputTitle.value,
            text: postDescription.value,
        };
        // console.log(newPost);
    });
    // return posts;
}
newPostJs(posts);
