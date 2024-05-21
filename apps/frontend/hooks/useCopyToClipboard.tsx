import { useState } from "react";

const useCopyToClipboard = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (text: string) => {
		if (!navigator.clipboard) {
			// Clipboard API not supported, fallback to older method
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Safari
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			try {
				const success = document.execCommand("copy");
				if (success) {
					setCopied(true);
				} else {
					console.error("Failed to copy text to clipboard.");
				}
			} catch (err) {
				console.error("Failed to copy text to clipboard.", err);
			} finally {
				document.body.removeChild(textarea);
			}
		} else {
			// Clipboard API supported
			navigator.clipboard
				.writeText(text)
				.then(() => {
					setCopied(true);
				})
				.catch((err) => {
					console.error("Failed to copy text to clipboard.", err);
				});
		}
	};

	return { copied, copyToClipboard };
};

export default useCopyToClipboard;
