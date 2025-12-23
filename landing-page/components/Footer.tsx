export default function Footer() {
  return (
    <footer className="py-12 bg-black text-slate-500 text-center border-t border-white/10">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kacper Kulesza. Wszelkie prawa zastrzeżone.
        </p>
        <p className="text-xs mt-2 opacity-50">
          Strona nie stanowi porady medycznej ani psychoterapeutycznej.
        </p>
      </div>
    </footer>
  );
}
