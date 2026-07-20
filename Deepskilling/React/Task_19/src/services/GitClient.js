import axios from 'axios'

// GitClient module — fetches GitHub repositories for a given username
const GitClient = {
  /**
   * Fetch repositories for a GitHub user
   * @param {string} username - GitHub username
   * @returns {Promise<string[]>} - array of repository names
   */
  getRepositories: async (username) => {
    const url = `https://api.github.com/users/${username}/repos`
    const response = await axios.get(url)
    // Return only the repository names
    return response.data.map((repo) => repo.name)
  },
}
export default GitClient
