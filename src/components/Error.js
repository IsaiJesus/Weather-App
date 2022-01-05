import "../index.css";

const Error = ({message}) => (
  <div className="error mt-2 mb-4">
    <h3 className="m-0 text-center">
      <i className="fas fa-exclamation-circle pe-2"></i>
      {message}
    </h3>
  </div>
);

export default Error;
