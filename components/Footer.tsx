export default function Footer() {
  return (
    <footer className="bg-gray-900/30 backdrop-blur-md text-white py-8 text-center border-t border-white/10">
      <p className="text-sm font-light tracking-wide drop-shadow">
        &copy; {new Date().getFullYear()} Tùng&apos;s Agency. All rights
        reserved.
      </p>
    </footer>
  );
}
