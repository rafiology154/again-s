const AppHeader = () => {
return(
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
                <h1 class="text-xl font-bold text-gray-800">
                    <span class="text-purple-600">CS</span> — Ticket System
                </h1>
                </div>

            <nav class="flex space-x-6 items-center text-sm font-medium">
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-150">Home</a>
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-150">FAQ</a>
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-150">Changelog</a>
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-150">Blog</a>
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-150">Download</a>
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-150">Contact</a>

                <button class="ml-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-150 flex items-center shadow-lg">
                    <span class="text-xl mr-1 font-semibold">+</span> New Ticket
                </button>
            </nav>
        </div>
    </div>
    )
    }
    export default AppHeader;
    