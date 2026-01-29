function ProductForm() {
  const [form, setForm] = useState({ name: '', price: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // Sử dụng spread operator
  };

  return (
    <form>
      <input name="name" placeholder="Tên sản phẩm" onChange={handleChange} />
      <input name="price" placeholder="Giá" onChange={handleChange} />
      <input name="category" placeholder="Danh mục" onChange={handleChange} />
      <p>{JSON.stringify(form)}</p>
    </form>
  );
}