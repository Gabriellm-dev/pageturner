import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addBook } from '../../services/Api';
import {jwtDecode} from 'jwt-decode';

const BookForm = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    fkUserCpf: '',
    name: '',
    publisher: '',
    publicationDate: '',
    editionNumber: '',
    authors: '',
    genre: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userCpf = decodedToken.cpf;
        setFormData(prevFormData => ({
          ...prevFormData,
          fkUserCpf: userCpf
        }));
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: name === 'editionNumber' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addBook(formData);
      const newBook = response.data;
      setMessage('Livro adicionado com sucesso');
      onBookAdded(newBook);
      setFormData({
        fkUserCpf: formData.fkUserCpf,
        name: '',
        publisher: '',
        publicationDate: '',
        editionNumber: '',
        authors: '',
        genre: ''
      });
    } catch (error) {
      setMessage('Erro ao adicionar livro. Tente novamente.');
      console.error('Erro ao adicionar livro:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Livro</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Título"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="publisher"
          placeholder="Editora"
          value={formData.publisher}
          onChange={handleChange}
        />
        <input
          type="date"
          name="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="editionNumber"
          placeholder="Número da Edição"
          value={formData.editionNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="authors"
          placeholder="Autores"
          value={formData.authors}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Gênero"
          value={formData.genre}
          onChange={handleChange}
        />
        <button type="submit">Adicionar Livro</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

BookForm.propTypes = {
  onBookAdded: PropTypes.func.isRequired,
};

export default BookForm;