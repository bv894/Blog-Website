// Sample blog post data
const blogPosts = [
    {
      title: 'Introduction to JavaScript',
      body: 'JavaScript is a programming language used to add interactivity and dynamic behavior to web pages. It runs on the client-side (in the user\'s web browser) and can manipulate the Document Object Model (DOM), handle events, and make asynchronous requests to servers. In this post, we\'ll explore the basics of JavaScript and its core features.',
      author: 'John Doe',
      date: '2023-05-15'
    },
    {
      title: 'Tips for Effective Web Design',
      body: 'Web design is the process of creating visually appealing and user-friendly websites. It involves various aspects, such as layout, typography, color schemes, and user experience. In this post, we\'ll discuss some tips and best practices for effective web design that can help you create engaging and memorable websites.',
      author: 'Jane Smith',
      date: '2023-05-10'
    },
    {
      title: 'The Importance of Accessibility in Web Development',
      body: 'Accessibility is a crucial aspect of web development that ensures websites are usable by people with disabilities or impairments. It involves making websites perceivable, operable, understandable, and robust for all users. In this post, we\'ll explore the importance of accessibility, its benefits, and best practices for creating inclusive and accessible websites.',
      author: 'Michael Johnson',
      date: '2023-05-05'
    }
  ];
  
  // Function to render blog posts on the page
  const renderPosts = (posts) => {
    const postsContainer = document.getElementById('posts-container');
  
    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
  
      const title = document.createElement('h3');
      title.textContent = post.title;
  
      const body = document.createElement('p');
      body.textContent = `${post.body.slice(0, 100)}...`;
  
      const readMoreLink = document.createElement('a');
      readMoreLink.href = `#`;
      readMoreLink.textContent = 'Read More';
  
      const author = document.createElement('p');
      author.textContent = `Author: ${post.author}`;
  
      const date = document.createElement('p');
      date.textContent = `Date: ${post.date}`;
  
      postElement.appendChild(title);
      postElement.appendChild(body);
      postElement.appendChild(readMoreLink);
      postElement.appendChild(author);
      postElement.appendChild(date);
  
      postsContainer.appendChild(postElement);
    });
  };
  
  // Render blog posts on page load
  window.addEventListener('load', () => {
    renderPosts(blogPosts);
  });