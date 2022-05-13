import { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";

export const Toast = () => {
  const { toast, setToast } = useProductContext();
  useEffect(() => {
    setTimeout(() => {
      setToast({
        ...toast,
        showToast: false,
      });
    }, 2000);
  }, [toast.showToast]);
  return (
    <>
      {toast.showToast && (
        <div className="ecom-toast">
          <div className={`alert m-radius ${toast.type}`}>{toast.message}</div>
        </div>
      )}
    </>
  );
};
