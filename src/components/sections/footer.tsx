export function Footer() {
  return (
    <footer className="bg-[#f1f1f1] text-black py-20 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-2">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-[0.9]">
            Join the future <br/> of finance.
          </h2>
          <a href="mailto:hello@vyne.network" className="text-xl underline decoration-1 underline-offset-4 hover:opacity-70">
            hello@vyne.network
          </a>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-neutral-500">Protocol</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Whitepaper</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Block Explorer</a></li>
            <li><a href="#" className="hover:underline">Governance Forum</a></li>
            <li><a href="#" className="hover:underline">Bug Bounty</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-neutral-500">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Discord</a></li>
            <li><a href="#" className="hover:underline">Twitter / X</a></li>
            <li><a href="#" className="hover:underline">GitHub</a></li>
            <li><a href="#" className="hover:underline">Telegram</a></li>
            <li><a href="#" className="hover:underline">Mirror.xyz</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-neutral-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-wider">
        <p>&copy; 2025 Vyne Foundation. All Rights Reserved.</p>
        <p>Decentralization First.</p>
      </div>
      
       <div className="mt-20 text-center">
            <h1 className="text-[12vw] leading-none text-neutral-200 font-medium select-none">
                VYNE
            </h1>
        </div>
    </footer>
  );
}
