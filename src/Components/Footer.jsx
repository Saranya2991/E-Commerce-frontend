import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
function Footer(){
    return(
        <footer className="relative bg-green-700">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">
            Online Market
          </h2>
          
        </div>
        <div className="flex gap-6 text-xl">
          <a href="#" className="text-white hover:text-black">
            <FaGithub />
          </a>

          <a href="#" className="text-white hover:text-black">
             <FaLinkedin />
          </a>

          <a href="#" className="text-white hover:text-black">
            <FaEnvelope />
          </a>
        </div>

        
        <p className="text-sm text-white text-center md:text-right">
          © 2026 Online Market. All rights reserved.
        </p>
          </div>
    </footer>
    )
}

export default Footer