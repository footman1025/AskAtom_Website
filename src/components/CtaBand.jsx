import { asset } from '../asset.js'

export default function CtaBand() {
  return (
    <div className="cta-band">
      <img src={asset('images/site/cta-code.jpg')} alt="" loading="lazy" />
      <div className="wrap cta-inner">
        <h2>Have something that needs building, or fixing?</h2>
        <a className="btn btn-light" href="#contact">Start a conversation</a>
      </div>
    </div>
  )
}
