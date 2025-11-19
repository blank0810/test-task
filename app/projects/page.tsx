export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Summer Campaign', status: 'Active', videos: 12 },
    { id: 2, name: 'Product Launch', status: 'In Progress', videos: 5 },
    { id: 3, name: 'Brand Stories', status: 'Completed', videos: 23 },
    { id: 4, name: 'Social Media Series', status: 'Active', videos: 8 },
  ];

  return (
    <main className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Projects</h2>
        <p className="text-gray-600">Manage your video projects</p>
      </div>
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + New Project
          </button>
        </div>
        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.videos} videos</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Active' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
