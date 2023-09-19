import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>

        <form>
            <input className="bg-transparent" type="number"/>
        </form>

        <div className="text-white grid grid-cols-4 gap-5">
            <button className='bg-gray-200 text-black rounded-full p-5'>AC</button>
            <button className='bg-gray-200 text-black rounded-full p-5'>-/+</button>
            <button className='bg-gray-200 text-black rounded-full p-5'>%</button>
            <button className='bg-yellow-500 rounded-full p-5'>&divide;</button>

            <button className='bg-gray-500 rounded-full p-5'>7</button>
            <button className='bg-gray-500 rounded-full p-5'>8</button>
            <button className='bg-gray-500 rounded-full p-5'>9</button>
            <button className='bg-yellow-500 rounded-full p-5'>&times;</button>

            <button className='bg-gray-500 rounded-full p-5'>4</button>
            <button className='bg-gray-500 rounded-full p-5'>5</button>
            <button className='bg-gray-500 rounded-full p-5'>6</button>
            <button className='bg-yellow-500 rounded-full p-5'>-</button>
   
            <button className='bg-gray-500 rounded-full p-5'>1</button>
            <button className='bg-gray-500 rounded-full p-5'>2</button>
            <button className='bg-gray-500 rounded-full p-5'>3</button>
            <button className='bg-yellow-500 rounded-full p-5'>+</button>
        
            <button className='col-span-2 bg-gray-500 rounded-full p-5'>0</button>
            <button className='bg-gray-500 rounded-full p-5'>.</button>
            <button className='bg-yellow-500 rounded-full p-5'>=</button>
        </div>

      </div>

    </main>
  )
}
