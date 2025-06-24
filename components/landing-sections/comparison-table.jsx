import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const Icon = ({ status }) =>
  status ? (
    <CheckCircleIcon className="h-5 w-5 text-green-500 inline mr-1" />
  ) : (
    <XCircleIcon className="h-5 w-5 text-red-500 inline mr-1" />
  );

const data = [
  {
    feature: 'LLM-powered Contextual Scoring',
    nexhire: { ok: true, note: 'Skills + Culture' },
    ats: { ok: false, note: 'Mostly keyword-based' },
    builders: { ok: false, note: 'Formatting only' },
  },
  {
    feature: 'Bidirectional Matching',
    nexhire: { ok: true, note: 'Seeker + Recruiter' },
    ats: { ok: false, note: 'One-sided (mostly recruiter)' },
    builders: { ok: false, note: 'Mostly seeker only' },
  },
  {
    feature: 'Transparent Score Breakdown',
    nexhire: { ok: true, note: 'Human-readable' },
    ats: { ok: false, note: 'Black-box rankings' },
    builders: { ok: false, note: 'None' },
  },
  {
    feature: 'Resume Ranking',
    nexhire: { ok: true, note: 'Pretrained LLMs' },
    ats: { ok: false, note: 'Custom model training' },
    builders: { ok: false, note: 'Only score, no ranking' },
  },
  {
    feature: 'No Training Required',
    nexhire: { ok: true, note: 'Pretrained LLMs' },
    ats: { ok: false, note: 'Custom model training' },
    builders: { ok: true, note: '' },
  },
    {
    feature: 'Cultural Fit Analysis',
    nexhire: { ok: true, note: 'Pretrained LLMs' },
    ats: { ok: false, note: 'Custom model training' },
    builders: { ok: false, note: '' },
  },
  {
    feature: 'Embeddings for Similarity Search',
    nexhire: { ok: true, note: 'Built-in' },
    ats: { ok: false, note: 'Absent or premium-tier' },
    builders: { ok: false, note: '' },
  },
];

export default function FeatureComparison() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-transparent w-6xl">
      <table className="min-w-full  table-fixed text-sm text-left">
        <thead className="uppercase text-lg border-b border-border-transparent">
          <tr>
            <th className="px-4 py-3 w-1/4 border-r border-border-transparent">Feature</th>
            <th className="px-4 py-3 w-1/4">NexHire.ai</th>
            <th className="px-4 py-3 w-1/4">Traditional ATS</th>
            <th className="px-4 py-3 w-1/4">Resume Builders</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-transparent">
          {data.map((item, i) => (
            <tr key={i}>
              <td className="px-4 py-3 font-bold text-base text-text-subtitle border-r border-border-transparent">{item.feature}</td>
              <td className="px-4 py-3 text-text-description text-base font-light">
                <Icon status={item.nexhire.ok} />
                {item.nexhire.note}
              </td>
              <td className="px-4 py-3 text-text-description text-base font-light">
                <Icon status={item.ats.ok} />
                {item.ats.note}
              </td>
              <td className="px-4 py-3 text-text-description text-base font-light">
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