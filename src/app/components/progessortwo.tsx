import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex bg-white items-start max-w-screen-lg w-full mx-auto mt-10 ">
        
        {/* Step 1 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-orange-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-teal-800"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-gray-700">
              Step:1 <p className="text-orange-700">Explore Our Collection</p>
            </h6>
            <p className="text-xs text-black">
            Browse our beautiful flowers and pick your favorites.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-orange-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-teal-800"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-gray-800">
              Step:2 <p className="text-orange-700">Design Your Bouquet</p>
            </h6>
            <p className="text-xs text-black">
            Create your perfect bouquet with our customization options
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-orange-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-teal-800"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-gray-800">
              Step:3 <p className="text-orange-700">Enjoy the Discount</p>
            </h6>
            <p className="text-xs text-black">
            Use 'FLORET20' at checkout to get 20% off your order
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
