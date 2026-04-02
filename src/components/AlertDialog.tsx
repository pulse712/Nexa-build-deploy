import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

const AlertDialog = ({ isOpen, onClose, title = "Success", message }: AlertDialogProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleOkClick = () => {
    setIsLoading(true);
    onClose();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-md rounded-2xl p-6 shadow-2xl"
              style={{
                background: "hsl(222 47% 14%)",
                border: "1px solid hsl(0 0% 100% / 0.1)",
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
                style={{ color: "hsl(0 0% 60%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.1)";
                  e.currentTarget.style.color = "hsl(0 0% 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "hsl(0 0% 60%)";
                }}
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "hsl(192 91% 52% / 0.1)" }}
                >
                  <CheckCircle size={32} style={{ color: "hsl(192 91% 52%)" }} />
                </div>

                <h3
                  className="font-heading font-bold text-xl mb-2"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "hsl(0 0% 70%)" }}
                >
                  {message}
                </p>

                <button
                  onClick={handleOkClick}
                  disabled={isLoading}
                  className="px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 justify-center min-w-[100px]"
                  style={{
                    background: isLoading ? "hsl(192 91% 45%)" : "hsl(192 91% 52%)",
                    color: "hsl(0 0% 100%)",
                    opacity: isLoading ? 0.8 : 1,
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.background = "hsl(192 91% 45%)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.background = "hsl(192 91% 52%)";
                    }
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "OK"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AlertDialog;
