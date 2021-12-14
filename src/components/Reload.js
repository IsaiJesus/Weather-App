export default function Reload() {
    
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <button
      className="btn btn-outline-warning mt-2 mb-5"
      onClick={handleReload}
    >
      Reload Page
    </button>
  );
}
