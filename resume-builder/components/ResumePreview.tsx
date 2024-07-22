import React from 'react';

type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
};

type ResumePreviewProps = {
  data: ResumeData;
};

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="border p-6 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{data.fullName}</h1>
      <p className="mb-2">{data.email} | {data.phone}</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Professional Summary</h2>
      <p>{data.summary}</p>
    </div>
  );
};

export default ResumePreview;