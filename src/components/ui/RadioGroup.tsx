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
			{options.map((option) => {
				const isSelected = selectedValue === option.value;
				const optionClasses = isSelected
					? 'border-[#B8926A] bg-[#EAE6DF]/60'
					: 'border-[#B0B0B0]/30 hover:bg-[#EAE6DF]/40';

				return (
					<label
						key={option.value}
						className={`flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors duration-150 ${optionClasses}`}
					>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={isSelected}
							onChange={() => onChange(option.value)}
							className="mt-1 accent-[#B8926A]"
						/>
						<span className="flex flex-col">
							<span className="text-sm font-semibold text-gray-900">{option.label}</span>
							{option.description ? (
								<span className="text-xs text-gray-500">{option.description}</span>
							) : null}
						</span>
					</label>
				);
			})}

			{error ? <p className="text-xs text-red-500">{error}</p> : null}
		</div>
	);
};

export default RadioGroup;
