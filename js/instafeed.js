// Replace with your Instagram Access Token
const accessToken = 'IGQWRPYjZAuYjlyTW1tN1FYRDN5b1NsdS1hNGJOaWY0d2dqUTljTTJ5U3A1QkxQS3pGbDRsMHZAHdzlOUmNqS2g2UFA4ajVlWENmVzJDMlpRbFpKTlVab1BySlZANNERRT1lnWkZADREJuV1BCOU42Q0h2YkFwbTM1R1EZD';

// Function to fetch and display Instagram feed
function getInstagramFeed() {
    fetch(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('instagram-feed');

            data.data.forEach(post => {
                const postLink = document.createElement('a');
                postLink.href = post.permalink;
                postLink.target = '_blank';

                
                const postImage = document.createElement('img');
                postImage.src = post.media_url;
                postImage.alt = post.caption;

                postLink.appendChild(postImage);
                feedContainer.appendChild(postLink);
            });
        })
        .catch(error => console.error(error));
}

// Call the function to fetch and display the Instagram feed
getInstagramFeed();