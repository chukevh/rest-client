export default function Main() {
    return (
        <>
            <div className="main-container">
                <div className="all-issues-container">
                    <h1>All Issues</h1>
                </div>
                <div className="send-issues-container">
                    <h1>Issues</h1>
                    <form className="form-container">
                    <label>Id</label>
                    <input/>
                    <label>Title</label>
                    <input/>
                    <label>Description</label>
                    <input/>
                    <button>Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}