export default function Default() {
    return(
        <div className="h-[100vh] flex items-center">
            <div className="container lg:px-60">
                <div className="flex flex-col items-center px-4 py-10 text-amber-50 gap-y-10 rounded-2xl md:shadow-2xl md:bg-primary-700">
                    <img
                        className="md:bg-gray-50 p-4 rounded-xl hover:scale-105 animation cursor-pointer"
                        src="/logo.jpg" alt="Logo"
                    />
                    <h1 className="text-4xl text-center text-amber-50 md:text-5xl">
                        Please select your preferred language:
                    </h1>

                    <div className="flex flex-col w-full text-3xl md:text-2xl md:w-auto md:flex-row md:gap-x-12 gap-y-3">
                        <a className="text-center" href="/">
                            <button className="base-button">Türkçe</button>
                        </a>
                        <a className="text-center" href="/">
                            <button className="base-button">English</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}