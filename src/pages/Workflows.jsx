import React from 'react'

export default function Workflows(){
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>Your Buying Workflows</h2>
      <p className='text-gray-700'>When signed in, you'll see your active workflows here (inspection scheduling, escrow, documents upload, etc.).</p>
      <ul className='mt-4 list-disc pl-5 text-gray-700 space-y-2'>
        <li>Offer preparation</li>
        <li>Inspection scheduling</li>
        <li>Escrow & title steps</li>
        <li>Closing checklist</li>
      </ul>
    </div>
  )
}
