import { createContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const getFromLocalStorage = (key) => {
	if (!key || typeof window === 'undefined') {
		return ""
	}
	return localStorage.getItem(key) || '{}'
}

const Initial_State = {
	user: getFromLocalStorage("user") ? JSON.parse(getFromLocalStorage("user")) : [],
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

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user))
	}, [state.user]);

	const value = { state, dispatch };

	return (
		<AuthContext.Provider value={value}>
			{props.children}
		</AuthContext.Provider>
	);
}