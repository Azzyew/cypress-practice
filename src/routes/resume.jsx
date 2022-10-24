import '../styles.css'

export const Resume = () => {
  return (
    <div class="container">
      <div class="info">
        <div>
          <h1 class="title" data-test="title">LAISA COSTA</h1>
          <h3 class="subtitle" data-test="subtitle">FRONTEND DEVELOPER</h3>
        </div>
      </div>
      <div>
        <section class="first">
          <div class="content">
            <h2 data-test="about">SOBRE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="content">
            <h2 data-test="contact">CONTATO</h2>
            <p>+55 51 123456789</p>
            <p>lorem@ipsum.com</p>
            <p>loremipsum.com</p>
          </div>
        </section>

        <section class="second">
          <div class="content">
            <h2 class="xp" data-test="experience">EXPERIÊNCIA</h2>
            <h3>LOREM IPSUM</h3>
            <span>Lorem Ipsum Technologies</span>
            <ul>
              <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
            </ul>
          </div>
          <div class="content2">
            <h3>LOREM IPSUM</h3>
            <span>Lorem Ipsum Technologies</span>
            <ul>
              <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
            </ul>
          </div>
        </section>
        <section class="third">
          <div class="content">
            <h2 data-test="qualification">QUALIFICAÇÕES</h2>
            <div>
              <p>2019 - Lorem ipsum dolor sit amet</p>
              <p>2018 - Lorem ipsum dolor sit amet</p>
              <p>2018 - Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="content">
            <h2 data-test="skills">HABILIDADES</h2>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}