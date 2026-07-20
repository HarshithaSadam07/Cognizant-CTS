import React, { Component } from 'react'

const blogs = [
  { id: 1, title: 'Getting Started with React', category: 'React', published: true },
  { id: 2, title: 'Understanding Hooks', category: 'React', published: true },
  { id: 3, title: 'Draft: Advanced Patterns', category: 'React', published: false },
  { id: 4, title: 'CSS Grid vs Flexbox', category: 'CSS', published: true },
]

class BlogDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPublished: true,
    }
  }

  render() {
    const { showPublished } = this.state
    // Conditional rendering using if-else inside render
    let displayBlogs
    if (showPublished) {
      displayBlogs = blogs.filter(b => b.published)
    } else {
      displayBlogs = blogs
    }

    return (
      <div className="detail-section">
        <h2>📝 Blog Details</h2>
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={showPublished}
            onChange={() => this.setState({ showPublished: !showPublished })}
          />
          &nbsp; Show Published Only
        </label>

        {/* List rendering with keys */}
        <ul className="item-list">
          {displayBlogs.map((blog) => (
            <li key={blog.id} className={`item-card blog-card ${blog.published ? '' : 'draft'}`}>
              <strong>{blog.title}</strong>
              <span>{blog.category}</span>
              {/* Conditional rendering using && */}
              {!blog.published && <span className="tag draft-tag">Draft</span>}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogDetails
