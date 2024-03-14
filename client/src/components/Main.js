import IssueCRUD from "./IssueCRUD";
import IssueDisplay from "./IssueDisplay";

export default function Main() {
    return (
        <>
            <div className="main-container">
                <div className="all-issues issues-container">
                    <IssueDisplay />
                </div>
                <div className="send-issues issues-container">
                    <h1>Issues</h1>
                    <IssueCRUD />
                </div>
            </div>
        </>
    )
}