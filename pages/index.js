import Link from "next/link";
import Image from "next/image";
import ImageOne from "../assets/images/Web capture_14-3-2022_145135_vercel.com.jpeg";
import ImageTwo from "../assets/images/Web capture_14-3-2022_152036_vercel.com.jpeg";
import PhotoProfil from "../assets/images/DSC_7633 copie (1).jpg";
import MovieApp from "../assets/images/Web capture_15-3-2022_104835_first-app-henna.vercel.app.jpeg";
import Recipe from "../assets/images/recipe.jpeg";
import Techno from "../assets/images/thcno.jpg";
import {
  AiTwotonePhone,
  AiOutlineMail,
  AiFillContacts,
  AiFillGithub,
} from "react-icons/ai";
export default function Home() {
  return (
    <main className="font-mono" style={{ height: "100vh" }}>
      <div
        className="h-full fixed bg-white shadow-xl text-center py-14 flex flex-col justify-between"
        style={{ width: "22%", height: "100%", float: "left" }}
      >
        <h1 className="text-2xl font-bold">EL MEHDI SAADOUN</h1>
        <nav className="">
          <ul className="text-xl">
            <li className="pb-4 font-medium">
              <Link href="#home">
                <a>Home</a>
              </Link>
            </li>
            <li className="pb-4 font-medium">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="pb-4 font-medium">
              <Link href="#portfolio">
                <a>Portfolio</a>
              </Link>
            </li>

            <li className="pb-4 font-medium">
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="text-2xl font-bold">
          <Link href={"https://github.com/MAHDI789"}>
            <a>
              <AiFillGithub className="mx-auto" />
            </a>
          </Link>
        </h1>
      </div>
      <div
        className="px-10"
        style={{ width: "78%", float: "right", height: "100%" }}
        id="home"
      >
        <div className="grid place-items-center" style={{ height: "100%" }}>
          <div className="container">
            <span className="text-amber-500 font-bold pb-4 inline-block">
              Hi There...
            </span>
            <p className="text-4xl font-medium pb-4">I AM EL MEHDI SAADOUN</p>
            <h2 className="text-xl pb-6">I Am A Front-End Devloper</h2>
            <p className="font-medium text-lg pb-4">
              <span className="font-bold">2021</span>: Ofppt diploma 2 year in
              multimedia development
            </p>
            <Link href={"#about"}>
              <a className="inline-block font-medium rounded text-xl text-white bg-amber-500 p-2">
                About me
              </a>
            </Link>
          </div>
        </div>
        <div className="about-me" id="about">
          <p className="text-3xl font-bold mb-6">ABOUT ME</p>
          <div className="information block 2xl:flex md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
            <div
              className="bg-black mr-4 p-3 2xl:w-1/3"
              style={{ height: "400px" }}
            >
              <div className="bg-white h-full">
                <img
                  src={PhotoProfil.src}
                  alt="photo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="2xl:w-2/3">
              <h2 className="text-3xl leading-relaxed font-medium">
                My Name Is El Mehdi Saadoun & I Am Front-End Developer
              </h2>

              <div className="more-details grid grid-cols-2 gap-y-4">
                <div>
                  <h3>
                    <span className="text-amber-500 font-bold">Age</span>: 22
                  </h3>
                </div>
                <div>
                  <h3>
                    <span className="text-amber-500 font-bold">Gender</span>:
                    Male
                  </h3>
                </div>
                <div>
                  <h3>
                    <span className="text-amber-500 font-bold">Phone</span>:
                    0650630566
                  </h3>
                </div>
                <div>
                  <h3>
                    <span className="text-amber-500 font-bold">Langugage</span>:
                    Arabic,Francais
                    <br />
                    English
                  </h3>
                </div>
                <div>
                  <h3>
                    <span className="text-amber-500 font-bold">
                      Technologie
                    </span>
                    : HTML, CSS,JAVASCRIPT
                  </h3>
                </div>
                <div>
                  <h3>
                    <span className="text-amber-500 font-bold">FrameWork</span>{" "}
                    :(REACT JS ,NEXT JS ,Tailwindcss)
                  </h3>
                </div>
              </div>
              <div className="Education mt-8">
                <span className="font-bold inline-block text-white bg-amber-500 p-2 text-2xl mb-2">
                  Education
                </span>
                <p className="font-medium text-lg">
                  <span className="font-bold text-amber-500">2021</span>: Ofppt
                  diploma 2 year in multimedia development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-both"></div>
        <div className="port mt-12" id="portfolio">
          <p className="text-3xl font-bold mb-6">Portfolio</p>
          <div className="2xl:grid 2xl:grid-cols-3 2xl:gap-x-6 sm:grid sm:gap-y-4 lg:grid lg:grid-cols-2 lg:gap-x-2">
            <Link href={"http://technopath.store/"} passHref>
              <div className="bg-white shadow-lg h-96">
                <div className="bg-black" style={{ height: "80%" }}>
                  <img
                    src={Techno.src}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </div>
                <div style={{ height: "20%" }}>
                  <p className="text-xl font-bold text-center mb-4">
                    Project 1 : FIN FORMATION OFPPT
                  </p>
                  <p className="text-center">Site ECOMMERCE</p>
                </div>
              </div>
            </Link>
            <Link href={"https://hotem.vercel.app/"} passHref>
              <div className="bg-white shadow-lg h-96 cursor-pointer">
                <div className="bg-black" style={{ height: "80%" }}>
                  <img
                    src={ImageOne.src}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </div>
                <div style={{ height: "20%" }}>
                  <p className="text-xl font-bold mb-4 text-center">
                    Project 2 : Hotel App
                  </p>
                  <p className="text-center">
                    The Mission :show rent & sale home
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"https://es-iota.vercel.app/"} passHref>
              <div className="bg-white shadow-lg h-96 cursor-pointer">
                <div className="bg-black" style={{ height: "80%" }}>
                  <img
                    src={ImageTwo.src}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </div>
                <div style={{ height: "20%" }}>
                  <p className="text-xl font-bold mb-4 text-center">
                    Project 3 : Site ECOMMERCE
                  </p>
                  <p className="text-center">The Mission : Add to Cart</p>
                </div>
              </div>
            </Link>
            <Link href={"https://first-app-henna.vercel.app/"} passHref>
              <div className="bg-white shadow-lg h-96 cursor-pointer">
                <div className="bg-black" style={{ height: "80%" }}>
                  <img
                    src={MovieApp.src}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </div>
                <div style={{ height: "20%" }}>
                  <p className="text-xl font-bold mb-4 text-center">
                    Project 3 : Site Movie
                  </p>
                  <p className="text-center">The Mission : listing Movie</p>
                </div>
              </div>
            </Link>
            <Link href={"https://recipe-wheat.vercel.app/"} passHref>
              <div className="bg-white shadow-lg h-96 cursor-pointer">
                <div className="bg-black" style={{ height: "80%" }}>
                  <img
                    src={Recipe.src}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </div>
                <div style={{ height: "20%" }}>
                  <p className="text-xl font-bold mb-4 text-center">
                    Project 3 : Recipe app
                  </p>
                  <p className="text-center">The Mission : listing Recipe</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="contact mt-12 pb-12" id="contact">
          <p className="text-3xl font-bold mb-6">Contact</p>
          <div className="bg-white 2xl:grid-cols-3 shadow-xl w-100 h-56 2xl:grid 2xl:place-items-center lg:place-items-center lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 md:place-items-center sm:grid sm:grid-cols-1 sm:place-items-center">
            <div>
              <p className="flex items-center gap-2 text-xl">
                <AiTwotonePhone className="mx-0" />
                <span>0650630566</span>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xl">
                <AiOutlineMail />
                <span>mahdimama04@gmail.com</span>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xl">
                <AiFillContacts />
                <span>El Mehdi SAADOUN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
