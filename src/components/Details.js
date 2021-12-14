import '../index.css';

//Data from Today component
export default function Details({name, value, unit}) {
  return (
    <div className="information px-sm-5 d-flex justify-content-between align-items-center">
      <p className="m-0">{name}</p>
      <p className="m-0">{value} {unit}</p>
    </div>
  );
}
