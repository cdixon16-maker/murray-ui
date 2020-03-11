import React from 'react';
import './ContactMe.css';

function ContactMe(props) {
    return(
        <div className="work">
            <h2 className="contact">Contact Me</h2>
            <p>If you have an questions please fill out the form and I will contact you as soon as I can. Thank you!</p>
            <form className="form">
                <label className="name">Name:
                    <input type="text" name="Name" placeholder="Full Name" />
                </label>
            </form>
            <form>
                <label>Phone:
                    <input type="text" name="Phone" placeholder= "(XXX)XXX-XXXX" required />
                </label>
            </form>
            <form>
                <label>
                    Service Interested in
                    <select>
                        <option value="Single Exterior Doors" selected>Single Exterior Doors</option>
                        <option value="Interior Doors">Interior Doors</option>
                        <option value="Trim">Trim</option>
                        <option value="Baseboard">Base</option>
                        <option value="Crown Molding">Crown Molding</option>
                        <option value="Floor Tile">Floor Tile</option>
                        <option value="Wall Tiling">Wall Tile</option>
                        <option value="Bath Tile">Bath Tile</option>
                        <option value="Backsplash">Backsplash</option>
                    </select>
                </label>

            </form>
            <form>
            <div>
            <textarea type="text"  cols="19" rows="4" placeholder="Questions..."   />
            </div>
            </form>
            <form>
            <input type="submit" value="Send"/>
            </form>
            
        </div>
    )
}

export default ContactMe;