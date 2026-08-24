import DownloadItem from "./DownloadItem";

function DownloadList({ downloads, onEdit, onDelete, onStatusChange }) {
  if (downloads.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">↓</div>

        <h3>No download records</h3>

        <p>Add your first download using the form above.</p>
      </div>
    );
  }

  return (
    <div className="download-list">
      {downloads.map((download) => (
        <DownloadItem
          key={download.id}
          download={download}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default DownloadList;
