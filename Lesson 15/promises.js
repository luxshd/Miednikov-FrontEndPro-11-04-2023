const fetchData = (id, url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Not found');
            }
            return response.json();
        })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error);
            });
    });
}


document.addEventListener('click', (e) => {
    const input = document.querySelector('input');
    const postBlock = document.querySelector('.post-block');

    // Отображаем пост по клику
    if (e.target.id === 'show-post') {
        document.querySelector('.comments-block').innerHTML = '';
        if (input.value < 1 || input.value > 100) {
            return postBlock.innerHTML = 'Invalid input. Please try again.'
        }
        const id = input.value;
        let url = 'https://jsonplaceholder.typicode.com/posts/' + id;

        fetchData(id, url)
            .then((data) => {
                postBlock.innerHTML = `
                    <p><b>Title:</b> ${data.title}</p>
                    <p><b>Body:</b> ${data.body}</p>
                    <button id="${id}" class="show-comments" type="submit">Show comments</button>`;
            })
            .catch((error) => {
                console.log(error)
            });

        input.value = ''
    }

    // Отображаем комментарии по клику
    if (e.target.classList[0] === 'show-comments') {
        let commentsUrl = `https://jsonplaceholder.typicode.com/posts/${e.target.id}/comments`;
        const commentsBlock = document.querySelector('.comments-block');

        fetchData(e.target.id, commentsUrl)
            .then((data) => {
                data.forEach(comment => {
                    commentsBlock.innerHTML += `
                        <div class="comment">
                            <p><b>Name:</b> ${comment.name}</p>
                            <p><b>Body:</b> ${comment.body}</p>
                            <p><b>Email:</b> ${comment.email}</p>
                        </div>`
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }
})