import * as types from '../ActionTypes/Types'

export const listAlbums = (albums) => ({
    type: types.VF_NZ_ALBUMS,
    payload: albums,
})