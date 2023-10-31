export const fetchStories = () => {
    return fetch(
    //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=a2914f27be974de7b2a1b449a9c2cccd'
    ).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Unable to retrieve data from server.')
      }
    })
  }