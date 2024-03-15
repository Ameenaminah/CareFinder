import { FC, ReactNode } from "react";
import { useAppSelector } from "../hooks";
import { Navigate } from "react-router-dom";

interface Props {
	children: ReactNode;
}

export const AuthorizedRoute: FC<Props> = ({ children }) => {
	const { isAuthenticated } = useAppSelector((s) => s.user);
	return <>{isAuthenticated ? children : <Navigate to="/" />}</>;
};
