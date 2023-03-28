import { Link } from 'react-router-dom';

export default function Default() {
    return(
        <div className="h-[100vh] flex items-center">
            <div className="container lg:px-60">
                <div className="flex flex-col items-center px-4 py-10 text-gray-50 gap-y-10 rounded-2xl md:shadow-2xl md:bg-primary-700">
                    <img
                        className="md:bg-gray-100 p-4 rounded-xl hover:scale-105 animation cursor-pointer"
                        src="/logo.jpg" alt="Logo"
                    />
                    <h1 className="text-4xl text-center text-primary-700 md:text-gray-50 md:text-5xl">
                        Please select your preferred language:
                    </h1>

                    <div className="flex flex-col w-full text-3xl md:text-2xl md:w-auto md:flex-row md:gap-x-12 gap-y-3">
                        <Link className="base-button" to="/home">Türkçe</Link>
                        <Link className="base-button" to="/home">English</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}