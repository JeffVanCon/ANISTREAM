import "./App.css";

function App() {
  return (
    <>
      <nav id="nav_link">
        <div className="logo_container">
          <img src="/src/images/logos/Logo.png" alt="Logo" className="logo" />
          <h2>ANISTREAM</h2>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
          alt="menu"
          className="menu_popUp"
        ></img>
        <div className="menu">
          <ul className="nav_bar_options">
            <li className="nav_bar_list">
              <a href="#nav_link">Shows</a>
            </li>
            <li className="nav_bar_list">
              <a href="#nav_link">Movies</a>
            </li>
            <li className="nav_bar_list">
              <a href="#nav_link">Manga</a>
            </li>
            <li className="nav_bar_list">
              <a href="#nav_link">Upcoming</a>
            </li>
          </ul>
        </div>
        <div className="btn_container">
          <button>Login</button>
          <button>Sign in</button>
        </div>
        <div className="menu mobile">
          <ul className="nav_bar_options">
            <li className="nav_bar_list">
              <a href="#nav_link">Shows</a>
            </li>
            <li className="nav_bar_list">
              <a href="#nav_link">Movies</a>
            </li>
            <li className="nav_bar_list">
              <a href="#nav_link">Manga</a>
            </li>
            <li className="nav_bar_list">
              <a href="#nav_link">Upcoming</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="header_container">
        <h4>Watch Attack on Titan: The final season streaming now !</h4>
        <img
          src="/src/images/Attack-on-Titan-Season-4-Poster.webp"
          alt="Anime Hit"
          className="header_img"
        />
      </div>
      <div className="popular_container">
        <div className="popular_title_container">
          <h1>MOST POPULAR ANIME</h1>
          <div className="underline"></div>
        </div>
        <div className="popular_grid_layout">
          <div className="popular_panel">
            <img
              src="/src/images/death note poster.jpg"
              alt="Anime Sub-Hit"
              className="popular_img"
            />
            <h3>Death Note</h3>
          </div>
          <div className="popular_panel">
            <img
              src="/src/images/Demon slayer poster.jpg"
              alt="Anime Sub-Hit"
              className="popular_img"
            />
            <h3>Demon Slayer</h3>
          </div>
          <div className="popular_panel">
            <img
              src="/src/images/dragon-ball-z-anime-wallpaper-preview.jpg"
              alt="Anime Sub-Hit"
              className="popular_img"
            />
            <h3>Dragon Ball Z</h3>
          </div>
          <div className="popular_panel">
            <img
              src="/src/images/mha poster.webp"
              alt="Anime Sub-Hit"
              className="popular_img"
            />
            <h3>My Hero Academia</h3>
          </div>
          <div className="popular_panel">
            <img
              src="/src/images/naruto poster.jpg"
              alt="Anime Sub-Hit"
              className="popular_img"
            />
            <h3>Naruto</h3>
          </div>
        </div>
      </div>
      <div className="subscription_container">
        <div className="popular_title_container">
          <h1 className="color_fix">Plans</h1>
          <div className="underline_sm"></div>
        </div>
        <div className="subscription_grid_layout">
          <div className="subscription_panel">
            <div className="subscription_mini_title">
              <h1>Free</h1>
              <h2 className="subscription_price">$0/month</h2>
            </div>
            <ul className="benefit_list">
              <li>Free for life time</li>
              <li>Limited shows</li>
              <li>Limited mangas</li>
              <li>On-Air episodes after 1 month</li>
              <li>Standard Quality</li>
            </ul>
          </div>
          <div className="subscription_panel">
            <div className="subscription_mini_title">
              <h1>Pro</h1>
              <h2 className="subscription_price">$5/month</h2>
            </div>
            <ul className="benefit_list">
              <li>Only on 1 device</li>
              <li>All shows</li>
              <li>All mangas</li>
              <li>On-Air episodes after 2 hours</li>
              <li>High Quality</li>
            </ul>
          </div>
          <div className="subscription_panel">
            <div className="subscription_mini_title">
              <h1>Premium</h1>
              <h2 className="subscription_price">$15/month</h2>
            </div>
            <ul className="benefit_list">
              <li>Upto 4 devices</li>
              <li>All shows</li>
              <li>All mangas</li>
              <li>On-Air episodes after 2 hours</li>
              <li>Highest Quality(4k)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_logo">
          <img src="/src/images/logos/Logo.png" alt="Logo" className="logo" />
          <span>ANISTREAM</span>
        </div>
        <ul className="footer_info">
          <li>
            <a href="#nav_link">About</a>
          </li>
          <li>
            <a href="#nav_link">Licenses</a>
          </li>
          <li>
            <a href="#nav_link">Streaming Rights</a>
          </li>
          <li>
            <a href="#nav_link">Terms & Conditions</a>
          </li>
          <li>
            <a href="#nav_link">Help</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
