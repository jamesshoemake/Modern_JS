class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: 'token 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',
      },
    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }
  async getUser(user) {
    // cache the user so if we get a bad response we show the last 'good' user
    let cachedUser = {}
 
    const profileResponse = fetch(
      `https://api.github.com/users/${user}`,
      this.config
    )
 
    const repoResponse = fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )
 
    // concurrently fetch profile and repos
    const responses = await Promise.all([profileResponse, repoResponse])
 
    // check response was good
    if (responses.every((res) => res.ok)) {
      const [profile, repos] = await Promise.all(
        responses.map((promise) => promise.json())
      )
      cachedUser = { profile, repos }
    } else {
      cachedUser.message = 'User Not Found'
    }
 
    return cachedUser
  }
}

