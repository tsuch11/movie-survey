// ── TextField ──────────────────────────────────────────────────────
// Reusable labeled input (text/email) with optional multiline (textarea) mode
// แก้ไขได้: input/textarea class, error style

// ── Types ──────────────────────────────────────────────────────────
type Props = {
	label: string;
	name: string;
	value: string;
	onChange: (value: string) => void;
	type?: string;
	placeholder?: string;
	required?: boolean;
	error?: string;
	multiline?: boolean;
};

// ── Component ────────────────────────────────────────────────────
const TextField = ({
	label,
	name,
	value,
	onChange,
	type = 'text',
	placeholder,
	required,
	error,
	multiline,
}: Props) => {
	const fieldClasses = `w-full rounded-lg border px-4 py-2 text-sm text-gray-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#B8926A] ${error ? 'border-red-400' : 'border-[#B0B0B0]/40'}`;

	// ── Handlers ───────────────────────────────────────────────────
	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		onChange(event.target.value);

	// ── Render ─────────────────────────────────────────────────────
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={name} className="text-sm font-medium text-gray-900">
				{label}
				{required ? <span className="text-red-500"> *</span> : null}
			</label>

			{multiline ? (
				<textarea
					id={name}
					name={name}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					rows={4}
					className={fieldClasses}
				/>
			) : (
				<input
					id={name}
					name={name}
					type={type}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					className={fieldClasses}
				/>
			)}

			{error ? <p className="text-xs text-red-500">{error}</p> : null}
		</div>
	);
};

export default TextField;
