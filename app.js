document.getElementById('signInForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('username', document.getElementById('username').value);
    window.location.href = 'home.html';
});

document.getElementById('postForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').files[0];
    const post = {
        text: postText,
        imageUrl: URL.createObjectURL(postImage)
    };
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    window.location.href = 'home.html';
});

window.addEventListener('load', function() {
    const postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<p>${post.text}</p><img src="${post.imageUrl}" style="max-width: 100%;">`;
            postsContainer.appendChild(postElement);
        });
    }
});

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}
