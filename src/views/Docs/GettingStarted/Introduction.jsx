import SideBar from "../../../components/SideBar";

export default function Introduction() {
  return (
    <main className="container px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_70%]">
            <SideBar/>
            <div className="content mt-2">
               Introduction
            </div>
        </div>     
    </main>
  )
}
