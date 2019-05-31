import axios from 'axios';

const urls = {
    login: '/api/auth/login',
    register: '/api/auth/register',
    getViewer: '/api/account/user',
    productsLatest: '/api/products/latest',
    add: '/api/products',
    image: '/api/upload/images',
};

export const Auth = {
    _token: null,

    get isLoggedIn() {
        return !!this._token;
    },

    setToken(token) {
        this._token = token;

        this._storeToken(token);

        this._setTokenToAxios(token);
    },

    init() {
        try {
            const token = window.localStorage.getItem('token');
            this._token = JSON.parse(token);
            
            this._setTokenToAxios(this._token);
        } catch (err) {
            console.error(err);
        }
    },

    login(body) {
        return axios.post(urls.login, body)       
    },

    register(body) {
        return axios.post(urls.register, body)       
    },

    logout() {
        this._token = null;
        try {
            window.localStorage.removeItem('token')
        } catch (err) {
            console.error(err);
        }
        this._setTokenToAxios(null);
    },
    _storeToken() {
        try {
            window.localStorage.setItem('token', JSON.stringify(this._token));
        } catch (err) {
            console.error(err);
        } 
    },
    _setTokenToAxios(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

export const Viewer = {
    get() {
        return axios.get(urls.getViewer);
    }
};

export const Products = {
    getLatest() {
        return axios.get(urls.productsLatest)
    },
    add(body) {
        return axios.post(urls.add, body)
    },
};

export const Images = {
    upload(file) {
        const fd = new FormData();
        fd.append('image', file);
        return axios.post(urls.image, fd);
    }
}

export function init() {
    Auth.init();
};