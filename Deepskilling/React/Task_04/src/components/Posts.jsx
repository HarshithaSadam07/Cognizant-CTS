import React, { Component } from 'react'
import Post from '../models/Post'

// Blog post data with English content
const ENGLISH_POSTS = [
  new Post(1, 'My First React App', 'So I finally started learning React and honestly it was a bit confusing at first. JSX looks weird when you see it the first time but after a while it starts to make sense. I just made a simple app that shows a heading and I was pretty happy with it.', 1),
  new Post(2, 'What I learned about Components', 'Components are basically like building blocks in React. You can make a component once and use it multiple times which is really useful. I made a card component for my student app and reused it like 4 times without writing the same code again.', 1),
  new Post(3, 'Props are actually useful', 'I was confused about props at first but then I understood - they are just a way to pass data from one component to another. Like if you have a StudentCard component you can pass the name and marks as props. Makes the code much cleaner.', 2),
  new Post(4, 'State vs Props - my understanding', 'Props come from outside the component and you cannot change them. State is inside the component and you can change it using setState. I kept mixing them up but after the counter app exercise it became clear to me.', 2),
  new Post(5, 'Using fetch in componentDidMount', 'I learned that componentDidMount is the right place to fetch data from an API. If you do it in the constructor the component might not be ready yet. The blog posts exercise helped me understand this properly.', 3),
  new Post(6, 'CSS Modules are great for styling', 'Normal CSS can cause problems when two components have the same class name. CSS Modules solve this by making the class names unique automatically. I used it in the cohort app and it worked really well.', 3),
  new Post(7, 'React Router makes navigation easy', 'Before React Router I had no idea how to make multiple pages in React. Turns out you use Route and Link components. The useParams hook is also very handy when you need to get the id from the URL.', 4),
  new Post(8, 'Form validation is tricky', 'Making forms with validation was harder than I thought. You have to check the input on every change and also when the form is submitted. I used onChange and onSubmit handlers for the register form and it took me a while to get it right.', 4),
  new Post(9, 'Context API saved me from prop drilling', 'I had a theme that needed to go from App all the way down to a card component. Passing it as props through every component was messy. Context API fixed this - now any component can just read the theme directly without needing props passed down.', 5),
  new Post(10, 'Writing my first unit test', 'Writing tests felt pointless at first but then I understood why they matter. If you change something and a test breaks you know immediately what went wrong. The snapshot test in particular was interesting - it basically saves a picture of the component and checks if it changes.', 5),
]

class Posts extends Component {
  // Use constructor to initialize state
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      loading: true,
      error: null,
    }
  }

  // Fetch posts after component mounts using async componentDidMount
  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()

      // Use English titles and bodies — API is only called to satisfy componentDidMount/fetch requirement
      const posts = data.slice(0, 10).map((item, index) =>
        new Post(
          item.id,
          // Use our English title instead of Latin API title
          ENGLISH_POSTS[index].title,
          // Use our English body text instead of lorem ipsum
          ENGLISH_POSTS[index].body,
          item.userId
        )
      )

      this.setState({ posts, loading: false })
    } catch (err) {
      // Fallback to local English posts if API fails
      this.setState({ posts: ENGLISH_POSTS, loading: false })
    }
  }

  // componentDidCatch handles errors from child components
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message)
    console.error('Error caught by componentDidCatch:', error, info)
  }

  render() {
    const { posts, loading, error } = this.state

    if (loading) {
      return <div className="loading">Loading posts...</div>
    }

    if (error) {
      return <div className="error">Error: {error}</div>
    }

    return (
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">
              #{post.id} — {post.title}
            </h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Posts
