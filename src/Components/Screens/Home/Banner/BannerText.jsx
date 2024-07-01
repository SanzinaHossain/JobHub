import "../Home.css"

export default function BannerText() {
  return (
    <div className="flex flex-col justify-center lg:py-0 py-5">
      <p className="text-3xl text-[#570987]">One Step Closer To Your</p>
      <p className="text-4xl text-[#570987] font-bold mt-5 pacifico-regular">
        Dream Job
      </p>
      <p className="text-justify text-black mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi
        sit explicabo obcaecati doloremque voluptate deleniti maiores soluta vel
        saepe, ad facere assumenda quae quis nemo hic. Eveniet, consectetur
        sapiente.
      </p>
      <button className="border-2 border-[#570987] hover:bg-[#570987] text-[#570987] p-3 rounded-lg hover:text-white font-bold mt-5 w-32">
        Search Job
      </button>
    </div>
  )
}
