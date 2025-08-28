import { useEffect } from "react";

export function UseTitle(title) {
  useEffect(() => {
    document.title = `${title} | Diamond Warranty`;
  }, [title]);
}
