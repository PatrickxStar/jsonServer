document.addEventListener('DOMContentLoaded', () => {
    const resultsDiv = document.getElementById('results');

    function clearResults() {
        resultsDiv.innerHTML = '';
    }

    function renderResults(data) {
        clearResults();
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(data, null, 2);
        resultsDiv.appendChild(pre);
    }

    document.getElementById('getAllPosts').addEventListener('click', () => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => renderResults(data))
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('getPost10').addEventListener('click', () => {
        fetch('http://jsonplaceholder.typicode.com/posts/10')
            .then(response => response.json())
            .then(data => renderResults(data))
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('createPost').addEventListener('click', () => {
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
        })
            .then(response => response.json())
            .then(data => renderResults(data))
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('replacePost12').addEventListener('click', () => {
        fetch('http://jsonplaceholder.typicode.com/posts/12', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: 12,
                title: 'Updated Title',
                body: 'Updated Body',
                userId: 1,
            }),
        })
            .then(response => response.json())
            .then(data => renderResults(data))
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('updatePost12').addEventListener('click', () => {
        fetch('http://jsonplaceholder.typicode.com/posts/12', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: 'Partially Updated Title',
            }),
        })
            .then(response => response.json())
            .then(data => renderResults(data))
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('deletePost12').addEventListener('click', () => {
        fetch('http://jsonplaceholder.typicode.com/posts/12', {
            method: 'DELETE',
        })
            .then(() => {
                clearResults();
                resultsDiv.textContent = 'Post with ID 12 deleted successfully';
            })
            .catch(error => console.error('Error:', error));
    });
});
