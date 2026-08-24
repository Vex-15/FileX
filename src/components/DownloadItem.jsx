function DownloadItem({ download, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="download-item">
      <div className="file-icon">
        {download.category === "Image"
          ? "🖼️"
          : download.category === "Video"
            ? "🎬"
            : download.category === "Archive"
              ? "📦"
              : download.category === "Software"
                ? "💻"
                : "📄"}
      </div>

      <div className="file-info">
        <div className="file-title">
          <strong>{download.name}</strong>

          <span className="category">{download.category}</span>
        </div>

        <a href={download.url} target="_blank" rel="noreferrer">
          {download.url}
        </a>

        <small>Added: {download.createdAt}</small>
      </div>

      <select
        className={`status-select ${download.status.toLowerCase()}`}
        value={download.status}
        onChange={(e) => onStatusChange(download.id, e.target.value)}
      >
        <option>Pending</option>
        <option>Downloading</option>
        <option>Completed</option>
        <option>Failed</option>
      </select>

      <div className="item-actions">
        <button className="edit-button" onClick={() => onEdit(download)}>
          Edit
        </button>

        <button className="delete-button" onClick={() => onDelete(download.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DownloadItem;
