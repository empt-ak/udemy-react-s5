
const Form = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="initial">Initial investment</label>
        <input id="initial" />
        <label htmlFor="annual">Annual investement</label>
        <input id="annual" />
      </div>

      <div className="input-group">
        <label htmlFor="expectedReturn">Expected return</label>
        <input id="expectedReturn" />
        <label htmlFor="duration">Duration</label>
        <input id="duration" />
      </div>
    </section>
  )
}

export default Form
