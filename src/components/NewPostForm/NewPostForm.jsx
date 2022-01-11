import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import './NewPostForm.css';

export default function NewPostForm() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    link: '',
    category: 'Spoken',
    body: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      await postsAPI.create(formData);
      setFormData({
        title: '',
        image: '',
        link: '',
        category: '',
        body: ''
      })
      
    } catch {
      setError('Post creation failed - try again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="post-form" autoComplete="off" >
          <div>
            <select name="category" value={formData.category} onChange={handleChange} required >
                <option value="Spoken">Spoken</option>
                <option value="Visual">Visual</option>
                <option value="Written">Written</option>
            </select>
            <input placeholder="Title" type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <input placeholder="Image link" type="text" name="image" value={formData.image} onChange={handleChange} required />
          <input placeholder="Website link (optional)" type="text" name="link" value={formData.link} onChange={handleChange} />
          <textarea placeholder="Description" name="body" value={formData.body} onChange={handleChange} required />
          <button className="login-btn" type="submit">Create</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}