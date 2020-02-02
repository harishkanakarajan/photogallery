const APIConfig = {
    apiBaseURL: "http://jsonplaceholder.typicode.com/",
    apiContentType: "application/json",
    apiConfigHeaders: { "Access-Control-Allow-Origin": "*" },
}

export const APIEndPointConfig = {
    listAlbum: "albums",
    userList: "users",
    photoList: "photos?albumId=",
    album: "albums?id=",
}

export default APIConfig