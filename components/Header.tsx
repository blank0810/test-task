export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to ClipFactory AI
        </h1>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
