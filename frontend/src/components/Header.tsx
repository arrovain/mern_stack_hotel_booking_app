import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/"> MernHolidays.com
                    </Link>
                    <span className="flex space-x-2">
                        <Link className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-green-500" to="/sign-in">
                        Sign In
                        </Link>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Header