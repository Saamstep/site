import { ReactNode } from "react";
import Button from 'react-bootstrap/Button';
import { useSearchParams } from "react-router-dom";

function searchParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleButtonClick = () => {
        const params = new URLSearchParams();
        params.delete("projects");

        setSearchParams(params, {
            preventScrollReset: true, // Prevents scroll reset, if needed
        });
    };

    return (
        <>
            <Button variant="danger" onClick={handleButtonClick}>Reset</Button>
        </>
    )
}

export default searchParams;