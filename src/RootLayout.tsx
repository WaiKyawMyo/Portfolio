import { Outlet } from "react-router";
import Header from "./components/Header";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    // min-h-screen ensures the black background covers the whole page
    <div className="relative min-h-screen overflow-hidden bg-[#030303] text-white selection:bg-purple-500/30">
      
      {/* --- BACKGROUND LAYER (Fixed) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Purple Blob */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" 
        />

        {/* Bottom Right Blue Blob */}
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]" 
        />

        {/* Optional: Subtle Grid Pattern or Noise for that "Premium" feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] brightness-100 contrast-150"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        {/* Main content grows to fill space */}
        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer/>
      </div>
    </div>
  );
};

export default RootLayout;