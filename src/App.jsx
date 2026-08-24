import { useEffect, useState } from "react";
import DownloadForm from "./components/DownloadForm";
import DownloadList from "./components/DownloadList";
import "./App.css";

function App() {
  const [downloads, setDownloads] = useState(() => {
    const saved = localStorage.getItem("filex-downloads");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingDownload, setEditingDownload] = useState(null);

  useEffect(() => {
    localStorage.setItem("filex-downloads", JSON.stringify(downloads));
  }, [downloads]);

  // CREATE / UPDATE
  const handleSave = (downloadData) => {
    if (editingDownload) {
      setDownloads((prev) =>
        prev.map((download) =>
          download.id === editingDownload.id
            ? {
                ...download,
                ...downloadData,
              }
            : download,
        ),
      );

      setEditingDownload(null);
    } else {
      const newDownload = {
        id: Date.now(),
        ...downloadData,
        status: "Pending",
        createdAt: new Date().toLocaleString(),
      };

      setDownloads((prev) => [newDownload, ...prev]);
    }
  };

  // DELETE
  const handleDelete = (id) => {
    setDownloads((prev) => prev.filter((download) => download.id !== id));
  };

  // EDIT
  const handleEdit = (download) => {
    setEditingDownload(download);
  };

  // CANCEL EDIT
  const handleCancelEdit = () => {
    setEditingDownload(null);
  };

  // UPDATE STATUS
  const handleStatusChange = (id, status) => {
    setDownloads((prev) =>
      prev.map((download) =>
        download.id === id ? { ...download, status } : download,
      ),
    );
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">X</div>
          <span>
            File<span>X</span>
          </span>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          React CRUD Demo
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="badge">⚡ React File Management System</div>

          <h1>
            Manage your
            <br />
            <span>downloads.</span>
          </h1>

          <p>
            Add, view, update and delete file download records using React
            components, state and CRUD operations.
          </p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span className="stat-icon">↓</span>

            <div>
              <strong>{downloads.length}</strong>
              <p>Total Downloads</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">◷</span>

            <div>
              <strong>
                {downloads.filter((d) => d.status === "Pending").length}
              </strong>

              <p>Pending</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">✓</span>

            <div>
              <strong>
                {downloads.filter((d) => d.status === "Completed").length}
              </strong>

              <p>Completed</p>
            </div>
          </div>
        </section>

        <section className="form-section">
          <DownloadForm
            onSave={handleSave}
            editingDownload={editingDownload}
            onCancel={handleCancelEdit}
          />
        </section>

        <section className="downloads-section">
          <div className="section-title">
            <div>
              <h2>Download Records</h2>
              <p>Manage your FileX download history</p>
            </div>

            <span className="record-count">{downloads.length} records</span>
          </div>

          <DownloadList
            downloads={downloads}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        </section>
      </main>

      <footer>
        <span>FileX</span>
        <span>React CRUD Application</span>
      </footer>
    </div>
  );
}

export default App;
