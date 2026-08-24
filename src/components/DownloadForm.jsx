import { useEffect, useState } from "react";

function DownloadForm({ onSave, editingDownload, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    category: "Document",
  });

  useEffect(() => {
    if (editingDownload) {
      setFormData({
        name: editingDownload.name,
        url: editingDownload.url,
        category: editingDownload.category,
      });
    } else {
      setFormData({
        name: "",
        url: "",
        category: "Document",
      });
    }
  }, [editingDownload]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.url) {
      alert("Please fill in all fields.");
      return;
    }

    onSave(formData);

    if (!editingDownload) {
      setFormData({
        name: "",
        url: "",
        category: "Document",
      });
    }
  };

  return (
    <div className="download-card">
      <div className="card-header">
        <div>
          <h2>{editingDownload ? "Update Download" : "Add Download"}</h2>

          <p>
            {editingDownload
              ? "Update the selected file record."
              : "Add a new file to your download records."}
          </p>
        </div>

        <div className="bolt">⚡</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>File Name</label>

            <input
              type="text"
              name="name"
              placeholder="example.zip"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Document</option>
              <option>Image</option>
              <option>Video</option>
              <option>Archive</option>
              <option>Software</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>File URL</label>

          <input
            type="url"
            name="url"
            placeholder="https://example.com/file.zip"
            value={formData.url}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          {editingDownload && (
            <button
              type="button"
              className="secondary-button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}

          <button type="submit" className="primary-button">
            {editingDownload ? "Update Record" : "Add Download"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DownloadForm;
