## The Project

This project has been created by using React along with Redux. Pretending that this is a e-commerce site, on landing page, there is dummy data fetched from JSON file displayed as blog posts. User is directed to specific page of the post on click of each item. Inside of details page dummy data displayed again. There is also a comment section where user can type in a name and the comment which will be added to page if submitted. Of course, user can delete the comments too.

After submit of a comment, if user goes back to homepage by clicking the icon on navigation bar, quantity of comments can be seen below specific blog details.

## Challenges

Even though I could easily achieve the same result with React state too, I wanted to master my skills in Redux. This was already challenging to get out of my comfort zone and do something different. But I've managed to do it without too much of struggle thanks to my skills in React which helped me quite a lot along the way.

My main struggle was about how to communicate with reducer. To know which properties to spread was challenging until I figured out my own way. Another challenge was to delete the comments. It wasn't hard at all to add comments, but to delete them I had to find my way through spreading properties which was tricky.

All in all, I have learned a lot in this project. Mainly how to use Redux store and the communication among reducer and the store. Apart from that I've developed the habit of using Redux dev tools which made my life easier as well.

Live version of the project can be seen here: https://react-blog-store.netlify.app/
