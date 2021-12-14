import "../index.css";

export default function Loader() {
  return (
    <div className="d-flex align-items-center text-center" style={{height: '18vh'}}>
      <div className="lds-facebook align-items-center text-center">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
