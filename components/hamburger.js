import { css } from 'glamor'

export default (props) => (
  <div className={hamburgerStyle}>
    <div className="hamburger hamburger--squeeze">
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  </div>
)

const hamburgerStyle = css({
  position: 'fixed',
  top: 8,
  left: 8,
  width: 64,
  height: 64,
  zIndex: 9999,

  ':hover': {
    opacity: 0.6,
  },
})
