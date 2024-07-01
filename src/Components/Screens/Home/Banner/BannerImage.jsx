import user from "../../../../assets/images/user.png"

export default function BannerImage() {
  return (
    <div className="justify-center hidden md:flex lg:flex h-full">
      <img src={user} className="rounded-lg max-w-lg max-h-min" />
    </div>
  )
}
