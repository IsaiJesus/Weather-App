import { useState } from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Header({ submitSearch, isLoading }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location == "") {
      toast.warn("Please, enter a city name", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    submitSearch(location);
    setLocation("");
  };

  return (
    <Stack className="py-4 align-items-center bg-dark text-light">
      <header className="w-100" style={{ maxWidth: "400px" }}>
          <h1
            className="p-1 mt-1 mb-4 fw-bold text-center"
          >
            Weather App
          </h1>
          <Form
            onSubmit={handleSubmit}
            className="my-1 mb-4 border rounded bg-white"
          >
            <Form.Group className="d-flex">
              <InputGroup>
                <Form.Control
                  className="border border-0 fw-medium"
                  type="text"
                  placeholder="Search for a location"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
                <Button
                  className="d-flex align-items-center justify-content-center btn btn-info border border-0 text-info-emphasis"
                  type="submit"
                >
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
            {
              isLoading && <div className="loader mt-4 mx-auto"></div>
            }
      </header>
    </Stack>
  );
}
