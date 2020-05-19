export const getReleaseYear = (releaseDate) => {
  if (releaseDate && releaseDate.length > 0) {
    return releaseDate.split("-")[0]
  }
}

export const getRunTime = (totalMinutes) => {
  if (totalMinutes && totalMinutes > 0) {
    let hour = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    if (hour > 0 && minutes > 0) {
      return `${hour}h ${minutes}m`
    }
    if (hour === 0 && minutes > 0) {
      return `${minutes}m`
    }
    if (minutes === 0) {
      return `${hour}h`
    }
  }
}

export const formatCollectionName = (collectionId) => {
  return collectionId.toUpperCase().replace("_", " ")
}
