import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const Icon = ({ status }) =>
  status ? (
    <CheckCircleIcon className="h-5 w-5 text-green-500 inline mr-1" />
  ) : (
    <XCircleIcon className="h-5 w-5 text-red-500 inline mr-1" />
  );

const data = [
  {
    feature: 'LLM-powered contextual scoring',
    nexhire: { ok: true, note: 'Skills + Culture' },
    ats: { ok: false, note: 'Mostly keyword-based' },
    builders: { ok: false, note: 'Formatting only' },
  },
  {
    feature: 'Bidirectional matching',
    nexhire: { ok: true, note: 'Seeker + Recruiter' },
    ats: { ok: false, note: 'One-sided (mostly recruiter)' },
    builders: { ok: false, note: 'Seeker only' },
  },
  {
    feature: 'Transparent score breakdown',
    nexhire: { ok: true, note: 'Human-readable' },
    ats: { ok: false, note: 'Black-box rankings' },
    builders: { ok: false, note: 'None' },
  },
  {
    feature: 'Free-tier friendly architecture',
    nexhire: { ok: true, note: 'OpenRouter, HuggingFace' },
    ats: { ok: false, note: 'Expensive per-seat pricing' },
    builders: { ok: true, note: 'But limited utility' },
  },
  {
    feature: 'No training required',
    nexhire: { ok: true, note: 'Pretrained LLMs' },
    ats: { ok: false, note: 'Custom model training' },
    builders: { ok: true, note: '' },
  },
  {
    feature: 'Embeddings for similarity search',
    nexhire: { ok: true, note: 'Built-in' },
    ats: { ok: false, note: 'Absent or premium-tier' },
    builders: { ok: false, note: '' },
  },
];

export default function FeatureComparison() {
  return (
    <div className="overflow-x-auto mt-10 rounded-lg shadow border border-gray-200">
      <table className="min-w-full table-fixed text-sm text-left">
        <thead className="bg-gray-100 text-gray-800 uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 w-1/4">Feature</th>
            <th className="px-4 py-3 w-1/4">NexHire.ai</th>
            <th className="px-4 py-3 w-1/4">Traditional ATS</th>
            <th className="px-4 py-3 w-1/4">Resume Builders</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((item, i) => (
            <tr key={i}>
              <td className="px-4 py-3 font-medium text-gray-800">{item.feature}</td>
              <td className="px-4 py-3 text-gray-700">
                <Icon status={item.nexhire.ok} />
                {item.nexhire.note}
              </td>
              <td className="px-4 py-3 text-gray-700">
                <Icon status={item.ats.ok} />
                {item.ats.note}
              </td>
              <td className="px-4 py-3 text-gray-700">
                <Icon status={item.builders.ok} />
                {item.builders.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}