import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import GitClient from './GitClient'

// Mock the axios module
vi.mock('axios')

describe('GitClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return repository names for techiesyed', async () => {
    // Arrange: mock axios.get to return fake repo data
    const mockRepos = [
      { id: 1, name: 'react-projects' },
      { id: 2, name: 'node-api' },
      { id: 3, name: 'portfolio-website' },
    ]

    axios.get.mockResolvedValueOnce({ data: mockRepos })

    // Act: call GitClient with the username
    const repoNames = await GitClient.getRepositories('techiesyed')

    // Assert: correct names are returned
    expect(repoNames).toEqual(['react-projects', 'node-api', 'portfolio-website'])

    // Assert: axios was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/techiesyed/repos'
    )
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  it('should return an empty array when user has no repositories', async () => {
    axios.get.mockResolvedValueOnce({ data: [] })

    const repoNames = await GitClient.getRepositories('techiesyed')

    expect(repoNames).toEqual([])
  })

  it('should throw an error when the API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'))

    await expect(GitClient.getRepositories('techiesyed')).rejects.toThrow('Network Error')
  })
})
