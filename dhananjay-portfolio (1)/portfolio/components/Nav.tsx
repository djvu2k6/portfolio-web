export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-6 md:py-7 text-sm gap-3">
      <span className="font-medium">Dhananjay Mohan</span>
      <div className="flex flex-wrap justify-end gap-x-4 gap-y-1 md:gap-x-7 text-xs md:text-sm">
        <a href="#about" className="underline-draw">
          About
        </a>
        <a href="#skills" className="underline-draw">
          Skills
        </a>
        <a href="#work" className="underline-draw">
          Work
        </a>
        <a href="#open-source" className="underline-draw">
          Open Source
        </a>
        <a href="#contact" className="underline-draw">
          Contact
        </a>
      </div>
    </nav>
  );
}
