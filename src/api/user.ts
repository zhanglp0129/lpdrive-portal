import request from "../utils/request.ts";

export const userLoginService = (loginForm) => request.post('/user/login', loginForm)