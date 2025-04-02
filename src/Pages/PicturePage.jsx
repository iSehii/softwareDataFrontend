import Camera from '../components/camera'
import Layout from '../components/layout/layout.jsx';
function PicturePage(){
    return(
      <Layout>
        <div>
            <div className="row">
                <div className="col">
                    <h1 className="text-white text-2xl font-semibold text-center mb-6">Tomar fotografias</h1>
                </div>
                <br />
                <div className="col">
                    <Camera/>
                </div>
            </div>
        </div>
      </Layout>
    )
}
export default PicturePage;