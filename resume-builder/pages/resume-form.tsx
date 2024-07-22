import Layout from '@/components/Layout';
import ResumeForm from '@/components/ResumeForm';

export default function ResumeFormPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Create Your Resume</h1>
      <ResumeForm />
    </Layout>
  );
}