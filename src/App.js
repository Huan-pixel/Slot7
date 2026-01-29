import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// --- ĐỊNH NGHĨA CÁC COMPONENT (Xóa các dòng export default ở đây) ---
function QuantityManager() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <input type="number" value={count} readOnly style={{ width: '40px', textAlign: 'center' }} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function ProductForm() {
  const [form, setForm] = useState({ name: '', price: '', category: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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

function OrderModal() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleConfirm = () => {
    alert("Duyệt đơn hàng thành công!");
    setIsShowModal(false);
  };
  return (
    <div>
      <button onClick={() => setIsShowModal(true)}>Xử lý đơn hàng</button>
      {isShowModal && (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <p>Bạn có chắc chắn muốn duyệt đơn hàng này?</p>
          <button onClick={handleConfirm}>Xác nhận</button>
          <button onClick={() => setIsShowModal(false)}>Hủy</button>
        </div>
      )}
    </div>
  );
}

function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(["Học lập trình .NET", "Học lập trình Java"]);
  const addTask = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };
  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };
  return (
    <div style={{ background: '#22272e', padding: '20px', color: 'white' }}>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Please input a Task" />
      <button onClick={addTask} style={{ background: 'red', color: 'white' }}>Add Todo</button>
      <div style={{ background: 'white', color: 'black', marginTop: '20px', padding: '10px' }}>
        <h3>Todo List</h3>
        {list.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>{item}</span>
            <button onClick={() => deleteTask(index)} style={{ background: 'red', color: 'white' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- COMPONENT CHÍNH ---
function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/ex1">Ex 1</Link> | <Link to="/ex2">Ex 2</Link> | 
        <Link to="/ex3">Ex 3</Link> | <Link to="/ex4">Ex 4</Link>
      </nav>
      <Routes>
        <Route path="/ex1" element={<QuantityManager />} />
        <Route path="/ex2" element={<OrderModal />} />
        <Route path="/ex3" element={<ProductForm />} />
        <Route path="/ex4" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Lệnh export duy nhất
