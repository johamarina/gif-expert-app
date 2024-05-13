export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i2ujG5GZELZdNbgHganEmSMOtg479IWW&q=${category}&limit=20`;
    const response = await fetch(url);
    const { data } = await response.json()

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)

    return gifs
}