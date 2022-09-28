import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const Initial_State = {
	user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
	loading: false,
	error: null,
};

const AuthReducer = (state, action) => {
	switch (action.type) { 
		case "LOGIN_START":
			return {
				user: null,
				loading: true,
				error: null,
			};
		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.payload,
				loading: false,
				error: null,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				user: null,
				loading: false,
				error: true,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
				loading: false,
				error: null,
			}
	}
}

export const AuthContextProvider = (props) => {
	const [state, dispatch] = useReducer(AuthReducer, Initial_State);
	const value = { state, dispatch };

	return (
		<AuthContext.Provider value={value}>
			{props.children}
		</AuthContext.Provider>
	);
}