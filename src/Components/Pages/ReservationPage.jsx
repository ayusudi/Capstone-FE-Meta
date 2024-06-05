
import { Button, Datepicker, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiMail, HiOutlineSparkles, HiOutlineUserCircle, HiClock, HiOutlineUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
export default function ReservationPage() {
  let strDate = new Date().toISOString().split("T")[0]
  const navigate = useNavigate()
  const [warn, setWarn] = useState(false)
  const [object, setObject] = useState({
    date: strDate,
    time: "17:00",
    guest: 1,
    occasion: "Anniversary",
    name: "",
    email: ""
  })
  const changeInput = (key, value) => {
    let obj = { ...object }
    if (key === "date") {
      value = new Date(value).toISOString().split("T")[0]
    }
    obj[key] = value
    setObject(obj)
  }

  const moveToConfirmation = () => {
    if (object.date && object.time && object.guest && object.occasion && object.name && object.email) {
      navigate("/confirmation", { state: object })
    } else {
      setWarn(true)
    }
  }
  return (
    <section className="flex flex-col justify-center items-center bg-[#2A2E32] py-10">
      <p className="text-3xl font-hand text-white mb-3">Table Reservation</p>
      <div className="w-[300px] mb-10 flex flex-col items-start">
        <div className="my-2 block ">
          <Label htmlFor="Date" value="Date" className="text-white text-left" />
        </div>
        <Datepicker onSelectedDateChanged={(e) => changeInput('date', e)} className="w-full" value={object.date} />
        <div className="my-2 block">
          <Label htmlFor="times" value="Select your time" className="text-white" />
        </div>
        <Select onChange={(e) => changeInput('time', e.target.value)} className="w-full" id="times" icon={HiClock} value={object.time} required>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          <option value="19:30">19:30</option>
          <option value="20:00">20:00</option>
          <option value="20:30">20:30</option>
        </Select>
        <div className="my-2 block">
          <Label htmlFor="Number of guests" value="Number of guests" className="text-white" />
        </div>
        <TextInput onChange={(e) => changeInput('guest', e.target.value)} min={1} value={object.guest} className="w-full" id="number" type="number" icon={HiOutlineUserGroup} required />
        <div className="my-2 block">
          <Label htmlFor="occasion" value="Occasion" className="text-white" />
        </div>
        <Select onChange={(e) => changeInput('occasion', e.target.value)} value={object.occasion} className="w-full" id="occasion" icon={HiOutlineSparkles} required>
          <option value="Anniversary">Anniversary</option>
          <option value="Birthday">Birthday</option>
          <option value="Other">Other</option>
        </Select>
        <div className="my-2 block">
          <Label htmlFor="name" value="Your name" className="text-white" />
        </div>
        <TextInput onChange={(e) => changeInput('name', e.target.value)} value={object.name} placeholder="Full Name" icon={HiOutlineUserCircle} className="w-full" id="name" type="text" required />
        <div className="my-2 block">
          <Label htmlFor="email4" value="Your email" className="text-white" />
        </div>
        <TextInput helperText={
          (warn && <span className="font-medium text-[#abe948]">All input is required!</span>)
        } onChange={(e) => changeInput('email', e.target.value)} value={object.email} className="w-full" id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
        <Button onClick={moveToConfirmation} gradientMonochrome="lime" className="mt-5">Reserve</Button>
      </div>
      <img className="rounded" src="https://i.pinimg.com/564x/a6/32/23/a6322379aa5986cb8afd92f9822b5082.jpg" alt="resto" />
    </section>
  )
}