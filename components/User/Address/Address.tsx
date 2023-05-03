export default function Address(){

    return(<form
        className="divide-y divide-gray-200 lg:col-span-9"
        action="#"
        method="POST"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div>
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Address
            </h2>
            {/* <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be
              careful what you share.
            </p> */}
          </div>

          <div className="mt-6 flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  {/* <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                    workcation.com/
                  </span> */}
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    defaultValue="soham de"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
               
              </div>
            </div>

            
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                PIN Code
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>

           

            
          </div>
        </div>

        {/* Privacy section */}
        <div className="pt-6 divide-y divide-gray-200">
          <div className="px-4 sm:px-6">
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Privacy
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Ornare eu a volutpat eget vulputate. Fringilla
                commodo amet.
              </p>
            </div>
            <ul
              role="list"
              className="mt-2 divide-y divide-gray-200"
            >
              
            </ul>
          </div>
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>)
}