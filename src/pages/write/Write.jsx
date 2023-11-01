import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg"
                src="https://cdn.pixabay.com/photo/2023/08/06/18/55/building-8173603_1280.jpg" alt="" 
            />

            <form className="writeForm">

                <div className="writeFormGroup">

                    <label htmlFor="fileInput">

                        <i className="writeIcon fa-solid fa-plus"></i>

                    </label>

                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder="start your blog here.." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}