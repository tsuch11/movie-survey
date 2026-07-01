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
			? 'bg-[#B8926A] text-white hover:opacity-90'
			: 'bg-white text-gray-900 border border-[#B0B0B0]/40 hover:bg-[#EAEFF5]';

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
