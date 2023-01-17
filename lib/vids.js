import process from 'process'

const { YOUTUBE_API_KEY } = process.env

async function getRumbleLinks(youtubeLink) {
  // Extract the video ID from the YouTube link
  const videoId = youtubeLink.split('v=')[1]

  // Use the Fetch API to get the video's title from the YouTube API
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`
  )
  const data = await res.json()
  const videoTitle = data.items[0].snippet.title

  // Use the Fetch API to get the titles of the videos on the SamiHindi channel on Rumble
  const rumbleRes = await fetch(
    `https://rumble.com/v3/channels/SamiHindi/videos?max_results=10`
  )
  const rumbleData = await rumbleRes.json()
  const rumbleVideos = rumbleData.data

  // Compare the title of the YouTube video to the titles of the videos on the SamiHindi channel on Rumble
  for (let i = 0; i < rumbleVideos.length; i++) {
    if (rumbleVideos[i].title === videoTitle) {
      // Return both links if a match is found
      return {
        youtubeLink,
        rumbleLink: `https://rumble.com${rumbleVideos[i].url}`
      }
    }
  }
  //if not found return null
  return null
}

export const getYtLinks = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC9jcFkCYiwhh-m5w4UQps-g&maxResults=10&order=date&type=video&key=${YOUTUBE_API_KEY}`
  )
  const data = await res.json()

  // Get the links for the videos on the SamiHindi channel on Rumble
  const rumbleLinks = await Promise.all(
    data.items.map(async (item) => {
      return await getRumbleLinks(
        `https://www.youtube.com/watch?v=${item.id.videoId}`
      )
    })
  )

  // Filter out the videos that don't have a match on Rumble
  const filteredRumbleLinks = rumbleLinks.filter((item) => item !== null)

  // Return the filtered array
  return filteredRumbleLinks
}
