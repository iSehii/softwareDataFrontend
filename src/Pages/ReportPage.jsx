import Layout from '../components/layout/layout.jsx';
import ReportInterface from "../components/report-interface.jsx"
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

function ReportPage(){
  return (
    <Layout>
        <ReportInterface />      
    </Layout>
  )
}
export default ReportPage;