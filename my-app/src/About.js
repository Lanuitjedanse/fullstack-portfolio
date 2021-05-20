import "./About.css";

export default function About() {
  return (
    <div className="about-box">
      <div className="pic-box">
        <h2>About me</h2>
        <img src="/me-pic.png" alt="lucie bellenger" className="profile-pic" />
      </div>

      <div className="skills-box">
        <p className="profile-description">
          I'm a Frenchie based in Berlin since 2014. I am a full Stack Developer
          after succesfully graduating at Spiced Academy in March 2021. I have a
          Bachelor and Master 1 in Marketing and Sales. I worked more than 5
          years in Marketing, Translations and Customer Service.
        </p>
        <h4>
          {"<"}Stack{"/>"}
        </h4>
        <div className="skills">
          <p>HTML5</p>
          <p>CSS3</p>
          <p>SCSS</p>
          <p>JavaScript</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Vue.js</p>
          <p>Vuex</p>
          <p>React</p>
          <p>Redux</p>
          <p>Nuxt.js</p>
          <p>Python3</p>
          <p>PostgresSQL</p>
          <p>Jest</p>
          <p>AWS</p>
          <p>MongoDB</p>
          <p>Bootstrap</p>
          <p>socket.io</p>
          <p>PixiJS</p>
          <p>Git</p>
          <p>PixiJS</p>
          <p>Tailwind</p>
          <p>LiveSwitch</p>
          <p>TypeScript</p>
        </div>
      </div>
    </div>
  );
}
