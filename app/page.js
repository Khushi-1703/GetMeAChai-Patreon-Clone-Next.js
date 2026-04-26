import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 h-[44vh] px-5 md:px-2 text-sm md:text-base">

        <div className="text-2xl font-bold flex gap-3 sm:gap-6 md:gap-9 md:text-5xl justify-center items-center sm:text-3xl">
          Get Me A Chai
          <span>
            <img className="invertImg" src="/tea.gif" width={88} alt="tea" />
          </span>
        </div>

        <p className="sm:text-center text-left">
          A crowdfunding platform for creators to fund their projects.
        </p>

        <p className="sm:text-center text-left mb-3">
          A place where your fans can buy you a chai. Unlesh the power of your
          fans and get your projects funded. Join the chai revolution and start
          your journey to success.
        </p>

        <div className="flex gap-2">
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
            >
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
            >
              Read More
            </button>
          </Link>
        </div>

      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="container mx-auto pb-24 pt-14 px-10">

        <h2 className="text-3xl font-bold mb-14 text-center">Your Fans can buy you a Chai</h2>

        <div className="flex flex-col sm:flex-row sm:gap-5 gap-10 justify-around">

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" width={88} alt="person" />
            <p className="text-center font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" width={88} alt="coin" />
            <p className="text-center font-bold">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" width={88} alt="group" />
            <p className="text-center font-bold">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>

        </div>

      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="container mx-auto pb-22 pt-14 flex flex-col items-center justify-center">

        <h2 className="text-3xl font-bold mb-14 text-center">Learn more about us</h2>

        {/* Responsive youtube embed */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">

          <iframe className="w-full h-full" src="https://www.youtube.com/embed/8-EyxMuvE9A?si=HFEcx64GJshi3C6P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          
        </div>

      </div>
    </>
  );
}
