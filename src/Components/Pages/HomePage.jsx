import { Button } from "flowbite-react"
import Card from "../Reusable/Card"
import { useNavigate } from "react-router-dom"
export default function Page() {
  const navigate = useNavigate()
  let data = [{
    name: "Seafood",
    url: "https://asset.kompas.com/crops/gf1mVjPg_0EvurG79FTHsBylSiM=/0x0:0x0/750x500/data/photo/2022/08/19/62ffb4a8eb9ba.jpg"
  },
  {
    name: "Dessert",
    url: "https://files-aller-blogger-platform.aws.aller.com/uploads/sites/87/2023/04/dessert_i_glas_med_mango-2.jpg"
  },
  {
    name: "Pasta",
    url: "https://canuckeats.com/cdn/shop/products/RFO-1400x919-SeafoodLinguine-d1ae9818-c4bf-4066-8adb-acfd6c0ed088-0-1400x919_99b216d6-5ce4-4c26-bb37-a586a5e66546.jpg"
  },
  {
    name: "Drinks",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbxPgqmgTfGn3LZZg0ADEIiZJvcugpacapxgmTswQP9-dhqwUe_QG1fGk-0Svd59Oksw&usqp=CAU"
  }]
  const moveToReservation = () => navigate("/reservation")
  return (
    <section>
      <div id="banner">
        <p className="text-hand text-2xl text-white pt-[2.5%] text-center">Little Lemon Restaurant</p>
        <p className="text-hand text-white text-center">Jakarta</p>
      </div>
      <div className="bg-[#2A2E32] pb-10">
        <div className="flex gap-6 justify-center items-center pt-10">
          <p className="text-white text-3xl font-hand">This weeks specials!</p>
          <Button gradientMonochrome="lime" onClick={moveToReservation}>Create Reservation</Button>
        </div>
        <div className="flex justify-around px-20 py-10 md:flex-row flex-col">
          {
            data.map((el, i) => <Card key={i} el={el} />)
          }
        </div>
      </div>
    </section>
  )
}