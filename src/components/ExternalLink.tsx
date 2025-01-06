import { useEffect } from "react";

interface Props {
  url: string;
}

function ExternalRedirect({ url }: Props) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
}

export default ExternalRedirect;
