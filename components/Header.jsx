export default function Header() {
  return (
    <header>
      <div className="announcement-bar">
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>

      <div className="main-header">
        <div className="header-left">
          {/* Mobile hamburger */}
          <button className="mobile-menu-button" aria-label="Open menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Brand mark */}
          <div className="brand-mark" aria-hidden="true">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M18 4C18 11.7 24.3 18 32 18C24.3 18 18 24.3 18 32C18 24.3 11.7 18 4 18C11.7 18 18 11.7 18 4Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect
                x="8"
                y="8"
                width="20"
                height="20"
                rx="2"
                transform="rotate(45 18 18)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>

        <div className="logo">LOGO</div>

        <div className="header-actions">
          {/* Search */}
          <button className="search-button" aria-label="Search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Wishlist */}
          <button aria-label="Wishlist">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 20S4 15.5 4 9.5C4 6.5 6 5 8.3 5C10 5 11.2 6 12 7.2C12.8 6 14 5 15.7 5C18 5 20 6.5 20 9.5C20 15.5 12 20 12 20Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Shopping bag */}
          <button aria-label="Shopping bag">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 8H19L18 21H6L5 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Profile */}
          <button className="profile-button" aria-label="Profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5.5 20C5.5 16.4 8.4 13.5 12 13.5C15.6 13.5 18.5 16.4 18.5 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Language */}
          <button
            className="language-selector"
            aria-label="Select language"
          >
            ENG

            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}