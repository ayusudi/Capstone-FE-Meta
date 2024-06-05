import { Button, Navbar } from "flowbite-react";
import logo from "../../Asset/logo.png"
export default function Component() {
  return (
    <Navbar fluid className="bg-[#494eb2]">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white font-hand">Little Lemon Restaurant</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="https://www.coursera.org/learn/meta-front-end-developer-capstone" gradientMonochrome="lime" className="hidden md:flex">Meta Frontend Capstone</Button>
        <Navbar.Toggle className="bg-white" />
      </div>
      <Navbar.Collapse >
        <Navbar.Link className="text-white hover:!text-[#ABE948]" href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white hover:!text-[#ABE948]" href="/">About</Navbar.Link>
        <Navbar.Link className="text-white hover:!text-[#ABE948]" href="/">Menu</Navbar.Link>
        <Navbar.Link className="text-white hover:!text-[#ABE948]" href="/">Reservations</Navbar.Link>
        <Navbar.Link className="text-white hover:!text-[#ABE948]" href="/">Order Online</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
