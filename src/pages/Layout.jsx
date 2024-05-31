import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";
import useTheme from "./components/useTheme";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import { useEffect } from "react";

const Layout = () => {
	const theme = useTheme();

	const navigate = useNavigate();

	useEffect(() => {
		navigate("/pages/home");
	}, [navigate]);

	return (
		<div
			className={classNames("min-h-screen", {
				"bg-base-100": theme === "sunset" || theme === "nord",
			})}
		>
			<div className="max-w-5xl mx-auto">
				<div className="drawer lg:drawer-open">
					<input
						id="my-drawer-2"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="flex flex-col items-center justify-center drawer-content">
						<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full">
							<div className="w-full">
								<Navbar />
							</div>
						</div>

						{/* Page content here */}
						<div className="w-full pl-8 mt-20 mb-14">
							<Outlet />
						</div>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<div className="h-[100vh] overflow-hidden menu w-60 p-0 m-0">
							{/* Sidebar content here */}
							<SideNav />
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
