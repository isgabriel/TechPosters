//Sugestão de usuários
function usersSuggestion(element, user) {
    const aside = document.querySelector(".container__suggestions");

    const title = document.createElement("h3");
    title.innerText = "Sugestões para você seguir";

    const section = document.createElement("section");
    section.classList.add("container__profiles");

    const ulSuggestions = document.createElement("ul");
    ulSuggestions.classList.add("container__list");

    for (let i = 0; i < user.length; i++) {
        if (
            user[i].id == element[0] ||
            user[i].id == element[1] ||
            user[i].id == element[2]
        ) {
            const divInfo = loadUserInfo(user[i]);
            const li = document.createElement("li");
            const divBtn = document.createElement("div");
            const button = document.createElement("button");

            li.classList.add("container__list--user");
            li.id = `${user[i].id}`;

            divBtn.classList.add("userInfo__divBtn");

            button.classList.add("btnNotFollowing");
            button.innerText = "Seguir";
            button.addEventListener("click", (event) => {
                if (button.innerText === "Seguir") {
                    button.classList.remove("btnNotFollowing");
                    button.classList.add("btnFollowing");
                    button.innerText = "Seguindo";
                } else {
                    button.classList.remove("btnFollowing");
                    button.classList.add("btnNotFollowing");
                    button.innerText = "Seguir";
                }
            });

            divBtn.append(button);
            li.append(divInfo, divBtn);
            ulSuggestions.appendChild(li);
        }
    }
    section.appendChild(ulSuggestions);
    aside.append(title, section);
}

//Criar Post
function createPost(user, post) {
    const section = document.querySelector(".container__posts");

    const ulPosts = document.createElement("ul");
    ulPosts.classList.add("container__listPosts");

    for (let i = 0; i < user.length; i++) {
        if (
            user[i].id == post[0].id_post ||
            user[i].id == post[1].id_post ||
            user[i].id == post[2].id_post
        ) {
            const divInfoUser = loadUserInfo(user[i]);
            const postContainer = document.createElement("li");
            const postTitle = document.createElement("h2");
            const postDesc = document.createElement("p");
            const divBtnModal = document.createElement("div");
            const btnOpenModal = document.createElement("button");
            const divLikes = document.createElement("div");
            const heartIcon = document.createElement("i");
            const likeCont = document.createElement("p");

            divInfoUser.classList.remove("profilesSuggestion");

            postContainer.classList.add("container__post");

            postTitle.classList.add("container__post--title");
            postTitle.innerText = `${post[i].title}`;

            postDesc.classList.add(
                "container__post--description",
                "descriptionPosts"
            );
            postDesc.innerText = `${post[i].text}`;

            divBtnModal.classList.add("container__btnModal");

            btnOpenModal.classList.add("btnOpenModal");
            btnOpenModal.innerText = "Abrir Post";
            btnOpenModal.id = `${post[i].id_post}`;

            heartIcon.classList.add("fa-solid", "fa-heart", "heartImg");

            likeCont.classList.add("likeCont");
            let likeValue = 25;

            heartIcon.addEventListener("click", () => {
                if (heartIcon.classList.contains("heartImg")) {
                    heartIcon.classList.remove("heartImg");
                    heartIcon.classList.add("redHeart");
                    likeValue = likeValue + 1;
                    likeCont.innerHTML = `${likeValue}`;
                } else {
                    heartIcon.classList.remove("redHeart");
                    heartIcon.classList.add("heartImg");
                    likeValue = likeValue - 1;
                    likeCont.innerHTML = `${likeValue}`;
                }
            });
            likeCont.innerHTML = `${likeValue}`;

            divLikes.append(heartIcon, likeCont);
            divBtnModal.append(btnOpenModal, divLikes);

            postContainer.append(divInfoUser, postTitle, postDesc, divBtnModal);
            ulPosts.appendChild(postContainer);
        }
    }
    section.appendChild(ulPosts);
}

function createModal(id) {
    const modalContainer = document.createElement("div");
    const modalDivNav = document.createElement("div");
    const modalClose = document.createElement("button");
    const modalDivPost = document.createElement("div");
    const modalTitle = document.createElement("h2");
    const modalDescription = document.createElement("p");

    let element = {};
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id_post === Number(id)) {
            element = posts[i];
        }
        modalTitle.innerText = element.title;
        modalDescription.innerText = element.text;
    }

    modalDivNav.classList.add("divBtnModal");
    const user = userModalInfo(id);
    const cardUser = loadUserInfo(user);
    cardUser.classList.add("container__cardUserModal");
    modalDivPost.classList.add("container__divPost");

    modalTitle.classList.add("container__post--title", "titleModal");

    modalDescription.classList.add("container__post--description", "descModal");

    modalClose.classList.add("modal__btn");
    modalClose.innerText = "X";

    modalDivNav.append(modalClose);
    modalDivPost.append(cardUser, modalTitle, modalDescription);
    modalContainer.append(modalDivNav, modalDivPost);
    return modalContainer;
}

function renderModal() {
    const modal = document.querySelector(".modal__container");
    const buttons = document.querySelectorAll(".btnOpenModal");

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener("click", () => {
            const modalContent = createModal(button.id);

            modal.innerHTML = "";

            modal.appendChild(modalContent);

            modal.showModal();
            closeModal();
        });
    }
}

function closeModal() {
    const modal = document.querySelector(".modal__container");
    const closeBtn = document.querySelector(".modal__btn");

    closeBtn.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal__container")) {
            modal.close();
        }
    });
}

function userModalInfo(id) {
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].id) {
            return users[i];
        }
    }
}
function loadUserInfo(user) {
    const divUserInfo = document.createElement("div");
    const img = document.createElement("img");
    const divParags = document.createElement("div");
    const userName = document.createElement("p");
    const userJob = document.createElement("p");

    divUserInfo.classList.add("userInfo__div", "profilesSuggestion");

    img.classList.add("main__container--userIcon");
    img.src = user.img;

    divParags.classList.add("userInfo__parags");

    userName.classList.add("main__container--userName");
    userName.innerText = user.user;

    userJob.classList.add("main__container--userJob");
    userJob.innerText = user.stack;

    divParags.append(userName, userJob);
    divUserInfo.append(img, divParags);

    return divUserInfo;
}
usersSuggestion(sugestUsers, users);
createPost(users, posts);
renderModal();
