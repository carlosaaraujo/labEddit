import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLoginPage } from "../router/coordinator";

const useProtectedPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			goToLoginPage(navigate);
		}
	}, [navigate]);
};

export default useProtectedPage;
