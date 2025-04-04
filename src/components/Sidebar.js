import react from "react";
import 'remixicon/fonts/remixicon.css';
import "./style.css";

export default function Sidebar(){
    return(
     <>
    <div className="sidebar-container">
        <aside className="sidebar">
      
        <h2>Vehicle Learning Innovation</h2>
        <nav>
          <ul>
          <li>
             <i className="ri-home-4-line"></i> Dashboard
              </li>
            <li> <i className="ri-chat-3-line"></i>Conversation</li>
            <li> <i className="ri-car-line"></i>Vehicle Inventory</li>
            <li><i className="ri-user-3-line"></i>Students</li>
            <li><i className="ri-user-settings-line"></i>Instructor</li>
            <li><i className="ri-error-warning-line"></i>Dispute Management</li>
            <li> <i className="ri-book-2-line"></i>Lesson Details</li>
            <li><i className="ri-settings-2-line"></i>Settings</li>
          </ul>
        </nav>
      </aside>

        </div>
     </>
    );
}