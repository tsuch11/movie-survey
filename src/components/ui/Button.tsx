// ── Button ─────────────────────────────────────────────────────────
// Reusable button with primary/secondary variant
// แก้ไขได้: variantClasses

// ── Types ──────────────────────────────────────────────────────────
type Props = {
	label: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary';
};

// ── Component ────────────────────────────────────────────────────
const Button = ({ label, onClick, type = 'button', variant = 'primary' }: Props) => {
	const variantClasses =
		variant === 'primary'
			? 'bg-blue-600 text-white hover:bg-blue-700'
			: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50';

	// ── Render ─────────────────────────────────────────────────────
	return (
		<button
			type={type}
			onClick={onClick}
			className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${variantClasses}`}
		>
			{label}
		</button>
	);
};

export default Button;
