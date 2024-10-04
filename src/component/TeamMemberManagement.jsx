import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamMemberManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', imageUrl: '', socialLinks: { twitter: '', facebook: '', instagram: '', email: '' } });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/teams');
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:4000/teams/${editId}`, formData);
      } else {
        await axios.post('http://localhost:4000/teams', formData);
      }
      setFormData({ name: '', role: '', imageUrl: '', socialLinks: { twitter: '', facebook: '', instagram: '', email: '' } });
      setEditId(null);
      fetchTeamMembers();
    } catch (error) {
      console.error('Error saving team member:', error);
    }
  };

  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      role: member.role,
      imageUrl: member.imageUrl,
      socialLinks: member.socialLinks,
    });
    setEditId(member._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/teams/${id}`);
      fetchTeamMembers();
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Team Member Management</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="border p-2 mb-2 w-full" />
        <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" required className="border p-2 mb-2 w-full" />
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required className="border p-2 mb-2 w-full" />
        
        <h3 className="font-semibold mt-4">Social Links</h3>
        <input name="twitter" value={formData.socialLinks.twitter} onChange={handleSocialChange} placeholder="Twitter" className="border p-2 mb-2 w-full" />
        <input name="facebook" value={formData.socialLinks.facebook} onChange={handleSocialChange} placeholder="Facebook" className="border p-2 mb-2 w-full" />
        <input name="instagram" value={formData.socialLinks.instagram} onChange={handleSocialChange} placeholder="Instagram" className="border p-2 mb-2 w-full" />
        <input name="email" value={formData.socialLinks.email} onChange={handleSocialChange} placeholder="Email" className="border p-2 mb-2 w-full" />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          {editId ? 'Update Member' : 'Add Member'}
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">Existing Team Members</h3>
      <ul>
        {teamMembers.map((member) => (
          <li key={member._id} className="flex justify-between mb-2 border p-2 rounded">
            <div>
              <strong>{member.name}</strong> - {member.role}
              <div>
                <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> | 
                <a href={`mailto:${member.socialLinks.email}`}>Email</a>
              </div>
            </div>
            <div>
              <button onClick={() => handleEdit(member)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
              <button onClick={() => handleDelete(member._id)} className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMemberManagement;
