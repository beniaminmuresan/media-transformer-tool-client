import React, { Component } from 'react';
import requireAuth from './requireAuth';
import ActiveStorageProvider from 'react-activestorage-provider';

class Dashboard extends Component {
  render() {
    return (
      
      <div className="lists-container">
        <ActiveStorageProvider
          endpoint={{
            path: '/api/v1/media_histories',
            model: 'MediaHistory',
            attribute: 'media_file',
            method: 'PUT'
          }}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />
      
              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })}
            </div>
          )}
        />
      </div>
    )
  }
}
export default requireAuth(Dashboard);
