import "../index.css";

export default function Reload() {
    
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <button
      className="reload"
      onClick={handleReload}
    >
      Reload Page
    </button>
  );
}
