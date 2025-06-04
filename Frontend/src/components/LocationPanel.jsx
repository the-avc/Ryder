import React from 'react'

const LocationPanel = (props) => {

    // console.log(props);

    //sample array for location
    const locations = [
        "248,near uidnv, sector 15, gurgaon",
        "248,near pandavas, sector 15, gurgaon",
        "248,near gangotri, sector 15, gurgaon",
    ]
    return (
        < div>
            {
                locations.map(function (elem, idx) {
                    return <div key={idx} className='flex items-center border-2 p-3 rounded-xl border-gray-50 active:border-black justify-start gap-4 my-3'>
                        <h2 className='bg-[#eee] h-8 w-11 flex items-center justify-center rounded-full p-2'>
                            <i className='ri-map-pin-fill'></i>
                        </h2>
                        <h4 className='font-medium'>
                            {elem}
                        </h4>
                    </div>

                })
            }


        </div>

    )
}

export default LocationPanel