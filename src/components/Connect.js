import React from 'react'

const Contact = () => {
    return (
        <div className="contact-section" id="connect">
            <div class="contact-container">
                <div class="contact-row">
                    <div class="contact-title">
                        <h1>Want to Join Us?</h1>
                        <p>Our Social Media Presence</p>
                    </div>
                </div>
                <div class="social-row">
                    <div class="social-info">
                        <div class="social-card">
                            <a href="mailto:mail@stephinreji.me"><i class="social-card-icon fa fa-envelope" /></a>
                            <p>Email</p>
                        </div>
                        <div class="social-card">
                            <a href="https://github.com/For-Community/"><i class="social-card-icon fa fa-github" /></a>
                            <p>Github</p>
                        </div>
                        <div class="social-card">
                            <a href="https://discord.gg/zRDZG3uM53"><i class="social-card-icon fab fa-discord" /></a>
                            <p>Discord</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
