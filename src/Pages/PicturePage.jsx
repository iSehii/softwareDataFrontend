import Camera from '../components/camera'
function PicturePage(){
    return(
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
    )
}
export default PicturePage;