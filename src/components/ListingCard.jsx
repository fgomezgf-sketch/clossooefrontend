import React from 'react'
import BedIcon from './icons/BedIcon'
import BathIcon from './icons/BathIcon'

export default function ListingCard({ item }) {
  const img = item?.photos?.[0]?.href || item?.img || 'https://via.placeholder.com/400x250'
  const price = item?.price || item?.list_price || item?.price_formatted || item?.price || 'Price N/A'
  const address = item?.location?.address?.line || item?.address || item?.address?.line || 'Unknown address'

  return (
    <div className='bg-white rounded-lg shadow hover:shadow-lg overflow-hidden'>
      <img src={img} alt={address} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <div className='flex justify-between items-start'>
          <h3 className='font-semibold text-lg'>{address}</h3>
          <div className='text-closetBlue font-bold'>
            {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
          </div>
        </div>

        {/* Beds/Baths/Sqft section */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
          {item?.beds !== undefined && (
            <div className="flex items-center gap-1">
              <BedIcon className="w-5 h-5 text-gray-500" />
              <span>{item.beds}</span>
            </div>
          )}
          {item?.baths !== undefined && (
            <div className="flex items-center gap-1">
              <BathIcon className="w-5 h-5 text-gray-500" />
              <span>{item.baths}</span>
            </div>
          )}
          {item?.sqft && (
            <div className="flex items-center gap-1">
              <span>{item.sqft.toLocaleString()} sqft</span>
            </div>
          )}
        </div>

        <div className='mt-4'>
          <a
            href={item?.rdc_web_url || item?.permalink || '#'}
            target='_blank'
            rel='noreferrer'
            className='inline-block bg-closetBlue text-white px-4 py-2 rounded'
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}
