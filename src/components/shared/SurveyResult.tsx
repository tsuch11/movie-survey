// ── SurveyResult ───────────────────────────────────────────────────
// Summary view shown after a successful submit, with restart action
// แก้ไขได้: summary field list, labels

import type { SurveyFormData } from '../../types/survey';
import Button from '../ui/Button';

// ── Types ──────────────────────────────────────────────────────────
type Props = {
	formData: SurveyFormData;
	onRestart: () => void;
};

// ── Component ────────────────────────────────────────────────────
const SurveyResult = ({ formData, onRestart }: Props) => {
	// ── Render ─────────────────────────────────────────────────────
	return (
		<div className="flex flex-col gap-4 p-6">
			<h2 className="text-lg font-bold text-green-700">ส่งแบบสำรวจสำเร็จ!</h2>

			<div className="flex flex-col gap-2 text-sm text-gray-700">
				<p>
					<span className="font-semibold">ชื่อ:</span> {formData.name}
				</p>
				<p>
					<span className="font-semibold">อีเมล:</span> {formData.email}
				</p>
				<p>
					<span className="font-semibold">หนังที่เลือก:</span> {formData.selectedMovie}
				</p>
				{formData.comment ? (
					<p>
						<span className="font-semibold">ความคิดเห็น:</span> {formData.comment}
					</p>
				) : null}
			</div>

			<Button label="ทำแบบสำรวจใหม่" variant="primary" onClick={onRestart} />
		</div>
	);
};

export default SurveyResult;
