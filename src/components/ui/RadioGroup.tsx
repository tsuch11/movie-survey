// ── RadioGroup ─────────────────────────────────────────────────────
// Reusable radio button list rendered from an options array
// แก้ไขได้: label/description layout, item spacing

// ── Types ──────────────────────────────────────────────────────────
export type RadioOption = {
	value: string;
	label: string;
	description?: string;
};

type Props = {
	name: string;
	options: RadioOption[];
	selectedValue: string;
	onChange: (value: string) => void;
	error?: string;
};

// ── Component ────────────────────────────────────────────────────
const RadioGroup = ({ name, options, selectedValue, onChange, error }: Props) => {
	// ── Render ─────────────────────────────────────────────────────
	return (
		<div className="flex flex-col gap-2">
			{options.map((option) => (
				<label
					key={option.value}
					className="flex items-start gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer transition-colors duration-150 hover:bg-gray-50"
				>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={() => onChange(option.value)}
						className="mt-1"
					/>
					<span className="flex flex-col">
						<span className="text-sm font-semibold text-gray-900">{option.label}</span>
						{option.description ? (
							<span className="text-xs text-gray-500">{option.description}</span>
						) : null}
					</span>
				</label>
			))}

			{error ? <p className="text-xs text-red-500">{error}</p> : null}
		</div>
	);
};

export default RadioGroup;
