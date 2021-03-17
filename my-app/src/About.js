import "./About.css";

export default function About() {
    return (
        <div className="about-box">
            <div className="pic-box">
                <h2>About</h2>
                <img
                    src="/me-pic.png"
                    alt="lucie bellenger"
                    className="profile-pic"
                />
            </div>

            <div className="skills-box">
                <p className="profile-description">
                    I'm a Frenchie based in Berlin since 2014. I am a full Stack
                    Developer after succesfully graduating at Spiced Academy in
                    March 2021. I have a Bachelor and Master 1 in Marketing and
                    Sales. I worked more than 5 years in Marketing, Translations
                    and Customer Service.
                </p>
                <h4>
                    {"<"}Stack{"/>"}
                </h4>
                <div className="skills">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>JQuery</p>
                    <p>Node.js</p>
                    <p>Vue.js</p>
                    <p>React</p>
                    <p>Postgres</p>
                    <p>Redux</p>
                    <p>Socket.io</p>
                </div>
            </div>
        </div>
    );
}
