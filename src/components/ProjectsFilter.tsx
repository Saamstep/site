import Button from "react-bootstrap/Button";
import { useSearchParams } from "react-router-dom";

function searchParams() {
  const [, setSearchParams] = useSearchParams();

  const handleButtonClick = () => {
    const params = new URLSearchParams();
    params.delete("projects");

    setSearchParams(params.toString(), {
      preventScrollReset: true, // Prevents scroll reset, if needed
    });
  };

  return (
    <>
      <Button variant="danger" onClick={handleButtonClick}>
        Reset
      </Button>
    </>
  );
}

export default searchParams;
