const handleSubmit = (e) => {
  e.preventDefault();
  setFormError('');

  // validate image URL
  try {
    new URL(image);
  } catch (error) {
    setFormError('A imagem precisa ser uma URL.');
    return; // Adicionado return
  }

  // criar o array de tags
  const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

  // checar todos os valores
  if (!title || !image || !tags || !body) {
    setFormError('Por favor, preencha todos os campos!');
    return;
  }

  if (formError) return;

  const data = {
    title,
    image,
    body,
    tagsArray,
    uid: user.uid,
    editedBy: user.displayName,
  };

  updateDocument(id, data);

  // redirect to home page
  navigate('/dashboard');
};
