import "../Home.css"

export const BannerStyles = {
  bannerContainer:
    "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full lg:px-24 px-5 justify-evenly ",

  // banner Image
  bannerImageContainer: "justify-center hidden md:flex lg:flex h-full",
  bannerImage: "rounded-lg max-w-lg max-h-min",

  //banner Text

  bannerTextContainer: "flex flex-col justify-center lg:py-0 py-5",
  bannerFirstText: "text-3xl text-[#570987]",
  bannerSecondText: "text-4xl text-[#570987] font-bold mt-5 pacifico-regular",
  bannerThirdText: "text-justify text-black mt-5",
  bannerButton:
    "border-2 border-[#570987] hover:bg-[#570987] text-[#570987] p-3 rounded-lg hover:text-white font-bold mt-5 w-32",
}
