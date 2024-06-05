import { Button } from 'flowbite-react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Page() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const moveToHome = () => navigate("/")
  return (
    <section className="flex flex-col gap-5 justify-center items-center bg-[#2A2E32] min-h-[89vh]">
      <div className='pb-4 mt-3 border-b-2 border-white'>
        <p className='text-white text-3xl font-hand text-center'>Your reservation has been confirmed.</p>
        <p className='text-white text-center'>You will receive an email with all the details.</p>
      </div>
      <img className="rounded h-[240px] w-[320px] object-cover" src="https://i.pinimg.com/564x/a6/32/23/a6322379aa5986cb8afd92f9822b5082.jpg" alt="resto" />
      <div className='flex flex-col gap-3 w-[320px]'>
        <p className='text-white'><b>Reserved for :</b> {state.name} </p>
        <p className='text-white'><b>Email :</b> {state.email}</p>
        <p className='text-white'><b>Date :</b> {state.date} </p>
        <p className='text-white'><b>Time :</b> {state.time}</p>
        <p className='text-white'><b>Number of guest :</b> {state.guest}</p>
        <p className='text-white'><b>Occasion :</b> {state.occasion}</p>
      </div>
      <Button gradientMonochrome="lime" onClick={moveToHome}>Back to Home</Button>
    </section>
  )
}