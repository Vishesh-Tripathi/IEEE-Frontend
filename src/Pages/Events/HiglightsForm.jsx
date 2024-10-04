import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ImageUploadForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [event, setEvent] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [images, setImages] = useState([]);
  const [editingImageId, setEditingImageId] = useState(null);

  // Fetch all images on component mount
  
  const fetchImages = async () => {
      try {
          const response = await axios.get('http://localhost:4000/highlights/getimages');
          console.log(response);   
          setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };
    useEffect(() => {
      fetchImages();
    }, []);
    console.log(images)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = { url: imageUrl, description, event };
    // console.log(newImage)

    try {
      if (editingImageId) {
        // Update existing image
        await axios.put(`http://localhost:4000/highlights/images/${editingImageId}`, newImage);
        setStatusMessage('Image updated successfully.');
      } else {
        // Add new image
        await axios.post('http://localhost:4000/highlights/images', newImage);
        setStatusMessage('Image uploaded successfully.');
      }
      fetchImages(); // Refresh the images
      clearForm(); // Reset the form
    } catch (error) {
      console.error('Error uploading image:', error);
      setStatusMessage('Error uploading the image.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/highlights/images/${id}`);
      setStatusMessage('Image deleted successfully.');
      fetchImages(); // Refresh the images after deletion
    } catch (error) {
      console.error('Error deleting image:', error);
      setStatusMessage('Error deleting the image.');
    }
  };

  const handleEdit = (image) => {
    setImageUrl(image.url);
    setDescription(image.description);
    setEvent(image.event);
    setEditingImageId(image._id);
  };

  const clearForm = () => {
    setImageUrl('');
    setDescription('');
    setEvent('');
    setEditingImageId(null);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">{editingImageId ? 'Update Image' : 'Upload New Image'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            id="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="event" className="block text-sm font-medium text-gray-700">Event</label>
          <input
            type="text"
            id="event"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700"
        >
          {editingImageId ? 'Update Image' : 'Upload Image'}
        </button>
      </form>

      {statusMessage && (
        <p className="mt-4 text-center text-sm text-gray-600">{statusMessage}</p>
      )}

      {/* Image Preview and Controls */}
      <h3 className="text-lg font-bold text-center mt-8">Uploaded Images</h3>
      <div className="mt-4">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image._id} className="flex items-center justify-between mb-4 p-2 border-b">
              <img src={image.url} alt={image.description} className="w-16 h-16 rounded-lg" />
              <div className="flex-1 ml-4">
                <p className="font-medium">{image.description || 'No description'}</p>
                <p className="text-sm text-gray-500">{image.event || 'No event'}</p>
              </div>
              <div className="flex">
                <button
                  onClick={() => handleEdit(image)}
                  className="bg-yellow-500 text-white p-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(image._id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploadForm;
