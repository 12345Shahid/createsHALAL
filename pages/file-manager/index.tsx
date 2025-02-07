import Head from 'next/head';
import { useState, useEffect } from 'react';
import { APP_NAME } from '../../config/settings';
import { getFolders } from './folders';
import { getFiles, searchFiles } from './files';
import { exportFile } from '../utils/export';

const FileManager = () => {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadFolders();
    loadFiles();
  }, []);

  const loadFolders = async () => {
    const folderList = await getFolders();
    setFolders(folderList);
  };

  const loadFiles = async () => {
    const fileList = await getFiles();
    setFiles(fileList);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchResults = await searchFiles(searchQuery);
    setFiles(searchResults);
  };

  const handleExport = async (fileId, format) => {
    await exportFile(fileId, format);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>File Manager - {APP_NAME}</title>
        <meta name="description" content="Manage your AI-generated content" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">File Manager</h1>

      <div className="mb-4">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded"
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-2">Folders</h2>
          <ul>
            {folders.map((folder) => (
              <li key={folder.id}>{folder.name}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-2">Files</h2>
          <ul>
            {files.map((file) => (
              <li key={file.id} className="flex justify-between items-center mb-2">
                <span>{file.name}</span>
                <div>
                  <button
                    onClick={() => handleExport(file.id, 'pdf')}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Export PDF
                  </button>
                  <button
                    onClick={() => handleExport(file.id, 'csv')}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Export CSV
                  </button>
                  <button
                    onClick={() => handleExport(file.id, 'ppt')}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Export PPT
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FileManager;