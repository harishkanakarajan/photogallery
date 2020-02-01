import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {InvokeGetAPI} from '../API/InvokeAPI'
import APIConfig, {APIEndPointConfig} from '../Config/APIConfig'

describe('Validating API data', () => {
    it('returns data when sendMessage is called', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet(APIConfig.apiBaseURL + APIEndPointConfig.listAlbum).reply(200, data);

        InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.listAlbum).then(response => {
            expect(response).toEqual(data);
            done();
        });
    });    
})