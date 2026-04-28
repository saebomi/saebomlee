import Link from 'next/link';

// Main
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen px-6">
      <section className="flex flex-col justify-end h-[100vh]">
        <p className="text-3xl font-bold leading-tight mb-4 tracking-tighter">
          6+ Years in Web UI/UX Engineering,<br />
          I build anything and everything digital. (And yes, I design them too.)<br /> 
        </p>
        <h1 className="text-[16.8vw] font-black leading-none tracking-tighter uppercase">
          SAEBOM:LEE
        </h1>
      </section>
      
      <WorkList />
    </main>
  );
}

// Work Data
const projects = [
  { id: "01", title: "Slim9 Website UI/UX 개발", tags: ["Develop", "UI/UX", "Website"] },
  { id: "02", title: "Slim9 Website UI/UX 개발", tags: ["Develop", "UI/UX", "Website"] },
];

// Work List
function WorkList() {
  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-4xl font-bold">Work</h2>
        <Link href="/work">
          <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
            View all work
          </button>
        </Link>
      </div>
      
      <div className="border-t border-black">
        {projects.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-300 hover:bg-gray-50 transition">
            <span className="w-12 font-mono text-lg">{item.id}</span>
            <span className="flex-1 text-xl font-medium">{item.title}</span>
            <div className="flex gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="px-4 py-1 border border-black rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

