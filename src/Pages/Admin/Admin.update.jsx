import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamMemberManagement from '../../component/TeamMemberManagement';

const AdminForm = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', time: '', imageUrl: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get('http://localhost:4000/events');
    setEvents(response.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/events', formData);
    fetchEvents(); // Refresh event list
    setFormData({ name: '', description: '', time: '', imageUrl: '' }); // Reset form
  };

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:4000/events/${id}`, formData);
    fetchEvents(); // Refresh event list
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/events/${id}`);
    fetchEvents(); // Refresh event list
  };

  return (
    <>
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Event Name" required className="border p-2 mb-2" />
        <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="border p-2 mb-2" />
        <input name="time" value={formData.time} onChange={handleChange} placeholder="Time" required className="border p-2 mb-2" />
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required className="border p-2 mb-2" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Event</button>
      </form>

      <h3 className="text-xl font-bold mb-2">Existing Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event._id} className="flex justify-between mb-2">
            <div>{event.name} - {event.time}</div>
            <div>
              <button onClick={() => handleUpdate(event._id)} className="bg-yellow-500 text-white p-1 rounded">Update</button>
              <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <TeamMemberManagement/>
    </>
  );
};

export default AdminForm;
