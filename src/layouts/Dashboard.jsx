import { Link, Outlet } from "react-router"
import useRole from "../hooks/useRole"
import Footer from "../components/Footer"
import logo from "../assets/contest_logo.png";


const Dashboard = () => {
    const user = useRole()
    const theme = localStorage.getItem("theme") || "light"

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4"><Link to="/" className="flex items-center gap-3 group">
                        <div className={`p-2 ${theme === "dark" ? "bg-gray-300" : "bg-gray-100"} rounded-2xl ring-4 ring-gray-300 group-hover:ring-indigo-400 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                            <img src={logo} alt="logo" className="w-12 h-12 rounded-xl object-cover" />
                        </div>
                        <span className="text-2xl font-bold drop-shadow-sm">ContestHub</span>
                    </Link></div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">

                        <Link to="/dashboard/over-view">
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Leaderboard">

                                    <span className="is-drawer-close:hidden">Leaderboard</span>
                                </button>
                            </li>
                        </Link>

                        {/* Admin Routes  */}

                        {user?.role === "admin" && <>
                            <Link to="/dashboard/manage-users">
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manager Users">

                                        <span className="is-drawer-close:hidden">Manager Users</span>
                                    </button>
                                </li>
                            </Link>
                            <Link to="/dashboard/manage-contests">
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manager Contests">

                                        <span className="is-drawer-close:hidden">Manager Contests</span>
                                    </button>
                                </li>
                            </Link>
                        </>}

                        {/* Creator Routes */}

                        {user?.role === "creator" && <>
                            <Link to="/dashboard/add-contest">
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add New Contest">

                                        <span className="is-drawer-close:hidden">Add New Contest</span>
                                    </button>
                                </li>
                            </Link>
                            <Link to="/dashboard/created-contests">
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Contests">

                                        <span className="is-drawer-close:hidden">My Contests</span>
                                    </button>
                                </li>
                            </Link>
                        </>}

                        {/* Participant Routes */}

                        {user?.role === "participant" && <>
                            <Link to="/dashboard/participated-contests">
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Contests">

                                        <span className="is-drawer-close:hidden">My Contests</span>
                                    </button>
                                </li>
                            </Link>

                            <Link to="/dashboard/my-winnings">
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Winnings">


                                        <span className="is-drawer-close:hidden">My Winnings</span>
                                    </button>

                                </li>
                            </Link>
                        </>}



                        <Link to="/dashboard/my-profile">
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">


                                    <span className="is-drawer-close:hidden">My Profile</span>
                                </button>

                            </li>
                        </Link>


                        <Link to="/">
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Back">

                                    <span className="is-drawer-close:hidden">Back</span>
                                </button>

                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard