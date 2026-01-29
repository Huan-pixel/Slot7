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
        <div className="modal">
          <div className="modal-content">
            <span onClick={() => setIsShowModal(false)}>&times;</span>
            <p>Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?</p>
            <button onClick={handleConfirm}>Xác nhận</button>
            <button onClick={() => setIsShowModal(false)}>Hủy</button>
          </div>
        </div>
      )}
    </div>
  );
}