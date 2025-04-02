import Layout from '../components/layout/layout.jsx';
import ReportInterface from "../components/report-interface.jsx"

function ReportPage(){
  return (
    <Layout>
        <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Sistema de Reportes</h1>
        <ReportInterface />
        </main>
    </Layout>
  )
}
export default ReportPage;