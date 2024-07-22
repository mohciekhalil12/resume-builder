import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Welcome to Resume Builder</h1>
      <p className="mb-4">Create professional resumes easily with our user-friendly tool.</p>
      <a href="/resume-form" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Your Resume
      </a>
    </Layout>
  );
}