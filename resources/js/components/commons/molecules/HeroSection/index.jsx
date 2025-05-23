import { saveAs } from "file-saver";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {

    const saveFile = () => {
        saveAs(
            "/documents/cv_ahmadilham.pdf", "cv_ahmadilham.pdf"   
        )
    }
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span>
                        <br />
                        <TypeAnimation sequence={["Ilham", 1000, "Web Developer", 1000, "Backend Developer", 1000]} wrapper='span' speed={50} repeat={Infinity} />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Selamat datang di dunia kreativitas saya! Silakan jelajahi portofolio ini untuk melihat berbagai proyek dan desain yang telah saya kerjakan.
                    </p>
                    <div>
                        <button onClick={() => window.open("mailto:ahmad13ilham13@gmail.com", "_blank")} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white cursor-pointer">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 cursor-pointer" onClick={saveFile}>
                            <span className="block bg-(--bg-primary-cray) hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
                        <img 
                            src="./images/statics/hero-image.png" 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt="hero image"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;