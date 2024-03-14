import { IRestService } from "./restService";
import { UserToken, UserLoginRequest, RegisterUserRequest } from "../models";
import { loginFailed, loginSuccess, logout } from "../state/features/user/userSlice";
import { store } from "../state/store";

export interface IUserService {
	login(userLogin: UserLoginRequest): Promise<UserToken | null>;
	registerUser(input: RegisterUserRequest): Promise<void | null>;
	logout(): void;
}

export class UserService implements IUserService {
	constructor(private readonly restService: IRestService) {}

	async login(userLogin: UserLoginRequest): Promise<UserToken | null> {
		try {
			const url = "/account/login";

			const tokenResponse = await this.restService.post<UserToken, UserLoginRequest>(
				url,
				userLogin,
			);

			if (tokenResponse) {
				store.dispatch(loginSuccess(tokenResponse));
			} else {
				store.dispatch(loginFailed());
			}

			return tokenResponse;
		} catch (error) {
			console.error(`Unable to login: ${error}`);
		}
		return null;
	}

	async registerUser(input: RegisterUserRequest): Promise<void | null> {
		try {
			const url = "/account/register";

			return await this.restService.post<void, RegisterUserRequest>(url, input);
		} catch (error) {
			console.error(`Unable to register: ${error}`);
		}
	}

	logout(): void {
		// localStorage.removeItem("persist:root");
		store.dispatch(logout());
	}
}
