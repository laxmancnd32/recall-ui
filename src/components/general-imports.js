import cookie from "react-cookies";

export const onLogin = userId => {
    global.localStorage.setItem('userId', userId);
    cookie.save('userId', userId, { path: '/' })
};

export const setAccessToken = accessToken => {
    return global.localStorage.setItem('accessToken', accessToken );
}