import Image from "next/image";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      {/* First section - Cream box with arrow */}
      <div className="h-screen w-screen snap-start bg-[#FFFDD0] flex items-center justify-center">
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="animate-bounce"
        >
          <path 
            d="M12 4L12 20M12 20L18 14M12 20L6 14" 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Second section - Contact image */}
      <div className="h-screen w-screen snap-start relative">
        <Image
          src="/info.png"
          alt="Info"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  );
}