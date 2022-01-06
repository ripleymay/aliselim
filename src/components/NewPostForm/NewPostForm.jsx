import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';

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
        <form autoComplete="off" >
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required >
              <option value="Spoken">Spoken</option>
              <option value="Visual">Visual</option>
              <option value="Written">Written</option>
          </select>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          <label>Image</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} required />
          <label>Link</label>
          <input type="text" name="link" value={formData.link} onChange={handleChange} />
          <label>Body</label>
          <input type="text" name="body" value={formData.body} onChange={handleChange} required />
          <button type="submit">Create</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}