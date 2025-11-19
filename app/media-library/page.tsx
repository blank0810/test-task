export default function MediaLibraryPage() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Media Library</h2>
        <p className="text-gray-600">Manage your media assets</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 text-center">
        <div className="text-6xl mb-4">🎬</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Your media library is empty</h3>
        <p className="text-gray-600 mb-6">Upload videos, images, and audio files</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + Upload Media
        </button>
      </div>
    </main>
  );
}
