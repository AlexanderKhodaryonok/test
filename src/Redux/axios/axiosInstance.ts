import axiosLib from "axios";
import MockAdapter from 'axios-mock-adapter';

const axios = axiosLib.create({
    baseURL: 'baseUrl',
});

export default axios;

export const mock = new MockAdapter(axios);
