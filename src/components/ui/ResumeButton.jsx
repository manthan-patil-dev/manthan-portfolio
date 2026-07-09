import { FileDown } from "lucide-react";
import { resumeUrl } from "../../data/portfolio";

export default function ResumeButton({ variant = "solid" }) {
    const base =
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition";
    const styles =
        variant === "solid"
            ? "bg-teal-600 text-white hover:bg-teal-500"
            : "border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800";

    return (
        <a href={resumeUrl} download className={`${base} ${styles}`}>
            <FileDown size={16} /> Download Resume
        </a>
    );
}
