import "./Player.css";
import AudioFile from "./data/sample-audio.mp3";
import { Link } from "react-router-dom";

const Player = () => {
    return (
        <div className="player-container">
            <div className="player-header">
                <div className="player-call-id">Calls / IHKXNJLbjUn09UzuT767</div>
                <div className="player-details">
                    <div>June15 2021 04:35 AM |</div>
                    <div className="player-duration">00:02:32</div>
                    <div>Appointment</div>
                    <div>2</div>
                    <div><i className="fa fa-smile"></i>    0.31</div>
                    <div><i className="fa fa-star"></i>   3</div>
                    <div className="btn-review-container">
                        <button className="btn btn-review">Revewi Form</button>
                    </div>
                </div>
                

                
            </div>
            <div className="player-transcript">
                <div className="transcript-label">Transcript</div>
                <div className="transcript-buttons">
                    <button className="btn btn-keyword">Keyword</button>
                    <button className="btn btn-entity">Entity</button>
                    <button className="btn btn-phrase">Phrase</button>
                    <button className="btn btn-incident">Incident</button>
                </div>
            </div>

            <div className="player-label-content">
                <div className="player-label-details">
                    <div className="player-label">Agent</div>
                    <div className="player-duration">00:00:04</div>
                </div>
                <div className="player-info-details">
                    Good afternoon My name is Steven Can I have your first name
                </div>
            </div>
            
            <div className="player-label-content">
                <div className="player-label-details">
                    <div className="player-label">Caller</div>
                    <div className="player-duration">00:00:07</div>
                </div>
                <div className="player-info-details">
                    Do i ADDRESS
                </div>
            </div>
            
            <div className="player-label-content">
                <div className="player-label-details">
                    <div className="player-label">Agent</div>
                    <div className="player-duration">00:00:10</div>
                </div>
                <div className="player-info-details">
                    Oh right hang Up Here Today ADDRESS
                </div>
            </div>
            
            <div className="player-label-content">
                <div className="player-label-details">
                    <div className="player-label">Caller</div>
                    <div className="player-duration">00:00:07</div>
                </div>
                <div className="player-info-details">
                    You"ve got my account in front of you,
                </div>
            </div>
            


            <div className="audio-player">
                <audio
                    
                    controls
                    muted
                    src={AudioFile}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            </div>

            <Link
                className="player-link"
                to="/">Design1(Table)
            </Link>
        </div>
    )
}


export default Player;