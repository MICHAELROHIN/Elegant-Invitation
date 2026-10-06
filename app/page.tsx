import Link from "next/link";

export default function Home() {
  const templates = [
    { id: 1, name: "Template 1", link: "/templates/1" },
    { id: 2, name: "Template 2", link: "/templates/2" },
    { id: 3, name: "Template 3", link: "/templates/3" },
    { id: 4, name: "Template 4", link: "/templates/4" },
    { id: 5, name: "Template 5", link: "/templates/5" },
    { id: 6, name: "Template 6", link: "/templates/6" },
    { id: 7, name: "Template 7", link: "/templates/7" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#222222] flex flex-col justify-between items-center px-4 py-12 sm:py-16">
      {/* Header Section */}
      <header className="text-center mt-4 sm:mt-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1c1c1c]">
          Elegant Wedding Invitations
        </h1>
        <p className="mt-3 text-[#666666] text-sm sm:text-base font-normal">
          Choose your wedding invitation template
        </p>
      </header>

      {/* Templates Grid Section */}
      <main className="w-full max-w-5xl my-12 sm:my-14 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1060px]">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.09)] transition-all duration-200 flex flex-col items-center justify-center p-7 min-h-[160px]"
            >
              <h2 className="text-xl font-bold text-[#1f1f1f] mb-4 text-center">
                {template.name}
              </h2>
              <Link
                href={template.link}
                className="bg-[#242424] hover:bg-[#111111] text-white text-xs sm:text-sm font-medium py-2 px-5 rounded-lg transition-colors duration-150 cursor-pointer shadow-sm active:scale-95"
              >
                View Invitation
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="text-center text-xs sm:text-sm text-[#777777] pb-4">
        <p>© Elegant Wedding Invitations</p>
      </footer>
    </div>
  );
}